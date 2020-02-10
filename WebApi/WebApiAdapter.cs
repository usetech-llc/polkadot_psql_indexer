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

        public Block GetBlockByHash(string hash)
        {
            return _reader.GetBlockByHash(hash);
        }

        public Block GetBlockByNumber(string number)
        {
            return _reader.GetBlockByNumber(number);
        }

        public IEnumerable<string> GetFilteredTransactionList(TransactionFilter filter, int limit, int offset)
        {
            var filterList = new List<string>();
            var tables = _md.DatabaseSchema.TableList.ToList();

            // Build sql query 
            if (UriParse.NotNullOrEmpty(filter.AddressTo))
            {
                tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Rows.ContainRow("dest")));
                filterList.Add($" dest = {filter.AddressTo}");
            }

            if (UriParse.NotNullOrEmpty(filter.AddressFrom))
            {
                tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Rows.ContainRow("Sender")));
                filterList.Add($" Sender = {filter.AddressFrom}");
            }

            if (UriParse.NotNullOrEmpty(filter.Module))
            {
                tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Title.Contains($"{filter.Module}call")));
            }

            if (UriParse.NotNullOrEmpty(filter.Method))
            {
                tables.Intersect(_md.DatabaseSchema.TableList.Where(i => i.Title.Contains($"call{filter.Method}")));
            }

            var filterSql = string.Join(",", filterList);

            return _reader.GetTransactionList(tables.Select(i => i.Title).ToArray(), filterSql);
        }

        public Extrinsic GetTransactionByHash(string hash)
        {
            return _reader.GetTransactionByHash(hash);
        }
    }
}
