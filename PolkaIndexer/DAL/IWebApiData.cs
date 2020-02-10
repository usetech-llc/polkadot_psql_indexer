using Polkadot.Api;
using Polkadot.Data;
using PolkaIndexer.WebApi;
using System.Collections.Generic;

namespace PolkaIndexer.DAL
{
    public interface IWebApiDataAdapter
    {
        Block GetBlockByNumber(string number);
        Block GetBlockByHash(string hash);
        Extrinsic GetTransactionByHash(string hash);
        IEnumerable<string> GetFilteredTransactionList(TransactionFilter filter, int limit, int offset);
    }
}