using Polkadot.Api;
using Polkadot.Data;
using PolkaIndexer.WebApi;
using System.Collections.Generic;

namespace PolkaIndexer.DAL
{
    public interface IWebApiDataAdapter
    {
        Dictionary<TableSchema, IEnumerable<string>> GetBlockByNumber(TableSchema[] tablesSql, string number);
        Dictionary<TableSchema, IEnumerable<string>> GetBlockByHash(TableSchema[] tablesSql, string hash, string addId = "0");
        Dictionary<TableSchema, IEnumerable<string>> GetTransactionByHash(TableSchema[] tablesSql, string hash, string addId = "0");
        Dictionary<TableSchema, IEnumerable<string>> GetFilteredTransactionList(TransactionFilter filter, int limit, int offset);
    }
}