using Polkadot.Api;
using Polkadot.Data;
using PolkaIndexer;
using PolkaIndexer.DAL;
using PolkaIndexer.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Tools;

namespace WebApi
{
    public class IndexedWebApi : IWebApiDataAdapter
    {
        IDatabaseDataReader _reader;
        MetadataSchema _md;

        public IndexedWebApi(IDatabaseDataReader reader, MetadataSchema md)
        {
            _reader = reader;
            _md = md;
        }

        public Dictionary<TableSchema, IEnumerable<string>> GetBlockByHash(TableSchema[] tablesSql, string hash, string addId = "0")
        {
            var tables = tablesSql.Where(i => i.Rows != null && i.Rows.UseBlockNumber).ToArray();
            tables = tables.Where(i => i.Title.Contains("Call")).ToArray();
            tables = tables.Where(i => i.Rows != null && i.Rows.GetRowNumber("Block") != -1).ToArray();

            int num = 0;
            int.TryParse(addId, out num);

            var data = _reader.GetBlockByHash(tables.ToArray(), hash).ElementAt(num);

            var dic = new Dictionary<TableSchema, IEnumerable<string>>();

            dic.Add(tables.FirstOrDefault(i => i.Title.Equals(data.Key)), data.Value);

            return dic;
        }

        public Dictionary<TableSchema, IEnumerable<string>> GetBlockByNumber(TableSchema[] tablesSql, string number)
        {
            var filterSql = $" \"blocknumber\" @> ARRAY['{number}']::varchar[]";
            var tables = tablesSql.Where(i => i.Rows != null && i.Rows.UseBlockNumber).ToArray();
            tables = tables.Where(i => i.Title.Contains("Call")).ToArray();

            var data = _reader.GetTransactionList(tables, filterSql);

            var dic = new Dictionary<TableSchema, IEnumerable<string>>();

            int num = 0;
            foreach (var di in data)
            {
                dic.Add(tables.FirstOrDefault(i => i.Title.Equals(di.Key)), di.Value);
                num++;
            }

            return dic;
        }

        public Dictionary<TableSchema, IEnumerable<string>> GetFilteredTransactionList(TransactionFilter filter, int limit, int offset)
        {
            var filterList = new List<string>();
            var tables = _md.DatabaseSchema.TableList.Where(i => i.Title.Contains("Call")).ToList();

            // Build sql query 
            if (!string.IsNullOrEmpty(filter.AddressTo))
            {
                tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Rows.GetRowNumber("dest") > -1));
                filterList.Add($" dest = {filter.AddressTo}");
            }

            if (!string.IsNullOrEmpty(filter.AddressFrom))
            {
                tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Rows.GetRowNumber("Sender") > -1));
                filterList.Add($" Sender = {filter.AddressFrom}");
            }

            if (!string.IsNullOrEmpty(filter.Module))
            {
                tables = tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.ModuleName != null && i.ModuleName.Contains(filter.Module, StringComparison.InvariantCultureIgnoreCase))).ToList();
            }

            if (!string.IsNullOrEmpty(filter.Method))
            {
                tables = tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.MethodName != null && i.MethodName.Contains(filter.Method, StringComparison.InvariantCultureIgnoreCase))).ToList();
            }

            var filterSql = string.Join(",", filterList);
            var data = _reader.GetTransactionList(tables.ToArray(), filterSql);

            var dic = new Dictionary<TableSchema, IEnumerable<string>>();

            int num = 0;
            foreach (var di in data)
            {
                dic.Add(tables.FirstOrDefault(i => i.Title.Equals(di.Key)), di.Value);
                num++;
            }

            return dic;
        }

        public Dictionary<TableSchema, IEnumerable<string>> GetTransactionByHash(TableSchema[] tablesSql, string hash, string addId = "0")
        {
            var filterSql = $" \"Block\" @> ARRAY['{hash}']::varchar[]";
            var tables = _md.DatabaseSchema.TableList.Where(i => i.Rows != null && i.Rows.GetRowNumber("Block") != -1).ToArray();

            int num = 0;
            int.TryParse(addId, out num);

            var data = _reader.GetTransactionList(tables, filterSql).ElementAt(num);
            var dic = new Dictionary<TableSchema, IEnumerable<string>>();
            dic.Add(tables.FirstOrDefault(i => i.Title.Equals(data.Key)), data.Value);

            return dic;
        }
    }
}
