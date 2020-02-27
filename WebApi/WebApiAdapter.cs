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

            int.TryParse(addId, out int num);

            var data = _reader.GetBlockByHash(tables.ToArray(), hash);
            var result = new Dictionary<TableSchema, IEnumerable<string>>();

            //var iterIndex = 0;
            for (var iterIndex = 0; iterIndex < data.Count(); iterIndex++)
            {
                var item = data.ElementAt(iterIndex);
                var filtered = new List<string>();
                var cr = tables.First(t => t.Title == item.Key).Rows;

                if (num < 0)
                {
                    continue;
                }

                for (var intIterIndex = 0; intIterIndex * cr.Count() < item.Value.Count(); intIterIndex++)
                {
                    var cdi = item.Value.Skip(intIterIndex * cr.Count()).Take(cr.Count());

                    if (cdi.ElementAt(cdi.Count() - 2) == addId)
                    {
                        filtered.AddRange(cdi);
                    }

                }

                if (filtered.Count() > 0)
                    result.Add(tables.FirstOrDefault(i => i.Title.Equals(item.Key)), filtered);
            }

            return result;
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
                tables = tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Rows?.GetRowNumber("dest") > -1)).ToList();
                filterList.Add($" dest = '{{{filter.AddressTo}}}'");
            }

            if (!string.IsNullOrEmpty(filter.AddressFrom))
            {
                tables = tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Rows?.GetRowNumber("Sender") > -1)).ToList();
                filterList.Add($" \"Sender\" = '{{{filter.AddressFrom}}}'");
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
            var h = hash.StartsWith("0x") ? hash : "0x" + hash;

            var filterSql = $" \"Block\" @> ARRAY['{h}']::varchar[]";
            var tables = _md.DatabaseSchema.TableList.Where(i => i.Rows != null && i.Rows.GetRowNumber("Block") != -1).ToArray();


            int.TryParse(addId, out int num);

            var data = _reader.GetBlockByHash(tables.ToArray(), hash);
            var result = new Dictionary<TableSchema, IEnumerable<string>>();

            for (var iterIndex = 0; iterIndex < data.Count(); iterIndex++)
            {
                var item = data.ElementAt(iterIndex);
                var filtered = new List<string>();
                var cr = tables.First(t => t.Title == item.Key).Rows;

                if (num < 0)
                {
                    continue;
                }

                while (iterIndex * cr.Count() < item.Value.Count())
                {
                    var cdi = item.Value.Skip(iterIndex * cr.Count()).Take(cr.Count());

                    if (cdi.ElementAt(cdi.Count() - 2) == addId)
                    {
                        filtered.AddRange(cdi);
                    }
                }

                result.Add(tables.FirstOrDefault(i => i.Title.Equals(item.Key)), filtered);
            }

            return result;
        }
    }
}
