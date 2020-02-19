using System;
using System.Configuration;
using Xunit;
using Polkadot.Api;
using PolkaIndexer.DAL;
using PolkaIndexer;
using Polkadot.Data;
using System.Linq;

namespace IndexerTest
{
    public class ParseBalances
    {
        IApplication _app;
        MetadataSchema _sch;
        Indexer _indexer;
        Postgres _postgres;

        public ParseBalances()
        {
            var dbCon = "Host=localhost;Port=5432;Database=postgres;Username=postgres;Password=";
            var substrateCon = "wss://kusama-rpc.polkadot.io/";

            _app = PolkaApi.GetAppication();
            _sch = new MetadataSchema();

            string nodeUrl = substrateCon;
            _app.Connect(nodeUrl);

            // Connect to db and check metadata version
            _postgres = new Postgres(dbCon);
            _indexer = new Indexer(_app, _postgres);

            // Create or update current schema
            var metadata = _app.GetMetadata(null);
            _sch.ParseMetadata(metadata);
            var si = _app.GetSystemInfo();

            _sch.DatabaseSchema.Title = "Test_ParseBalances";

            _sch.CommitToDb(_postgres, si);

            // Check current schema
            _indexer.CheckSystemInfo();
        }

        ~ParseBalances()
        {
            _app.Disconnect();
            _app.Dispose();
        }

        [Fact]
        public void ParseBalancesTransfer()
        {
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 177207 });
            var statePre = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Parse block
            _indexer.ParseBlock(bn);

            var statePost = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            if (!statePost.ContainsKey("BalancesCalltransfer"))
                throw new Exception("Data was not written");

            // Checking correctness of parsing
            var postValCount = statePost["BalancesCalltransfer"].Count();

            if (statePre.ContainsKey("BalancesCalltransfer"))
            {
                var preValCount = statePre["BalancesCalltransfer"].Count();

                // Expecting 12 values
                Assert.True(preValCount == postValCount - 12);
            }
            else
            {
                Assert.True(postValCount == 12);
            }

            // Values parsing check
            var address = statePost["BalancesCalltransfer"].ElementAt(postValCount - 4);
            var value = statePost["BalancesCalltransfer"].ElementAt(postValCount - 3);

            Assert.Equal("8cc1b90c74418ff0e928a2a9346e6774666c58d96e496dc8e964e1856bf8b54d", address);
            Assert.Equal("100000000000", value);
        }

        [Fact]
        public void ParseBalancesSetBalance()
        {
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 262433 });
            var statePre = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Parse block
            _indexer.ParseBlock(bn);

            var statePost = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            if (!statePost.ContainsKey("BalancesCallset_balance"))
                throw new Exception("Data was not written");

            // Checking correctness of parsing
            var postValCount = statePost["BalancesCallset_balance"].Count();

            if (statePre.ContainsKey("BalancesCallset_balance"))
            {
                var preValCount = statePre["BalancesCallset_balance"].Count();

                // Expecting 13 values
                Assert.True(preValCount == postValCount - 13);
            }
            else
            {
                Assert.True(postValCount == 13);
            }

            // Values parsing check
            var who = statePost["BalancesCallset_balance"].ElementAt(postValCount - 5);
            var newFee = statePost["BalancesCallset_balance"].ElementAt(postValCount - 4);
            var newReserved = statePost["BalancesCallset_balance"].ElementAt(postValCount - 3);

            Assert.Equal("f8e626a213e05c210a44c79633a70b5f78b922acfd1420f45923768d00209351", who);
            Assert.Equal("1233000000000000", newFee);
            Assert.Equal("1233000000000000", newReserved);
        }

        [Fact]
        public void ParseBalancesForceTransfer()
        {
            var call = "BalancesCallforce_transfer";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 262448 });
            var statePre = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Parse block
            _indexer.ParseBlock(bn);

            var statePost = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            if (!statePost.ContainsKey(call))
                throw new Exception("Data was not written");

            // Checking correctness of parsing
            var postValCount = statePost[call].Count();

            if (statePre.ContainsKey(call))
            {
                var preValCount = statePre[call].Count();

                // Expecting 13 values
                Assert.True(preValCount == postValCount - 13);
            }
            else
            {
                Assert.True(postValCount == 13);
            }

            // Values parsing check
            var source = statePost[call].ElementAt(postValCount - 5);
            var dest = statePost[call].ElementAt(postValCount - 4);
            var value = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("4adf51a47b72795366d52285e329229c836ea7bbfe139dbe8fa0700c4f86fc56", source);
            Assert.Equal("f8e626a213e05c210a44c79633a70b5f78b922acfd1420f45923768d00209351", dest);
            Assert.Equal("1233000000000000", value);
        }

        [Fact]
        public void ParseBalancesTransferKeepAlive()
        {
            var call = "BalancesCalltransfer_keep_alive";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 715131 });
            var statePre = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Parse block
            _indexer.ParseBlock(bn);

            var statePost = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            if (!statePost.ContainsKey(call))
                throw new Exception("Data was not written");

            // Checking correctness of parsing
            var postValCount = statePost[call].Count();

            if (statePre.ContainsKey(call))
            {
                var preValCount = statePre[call].Count();

                // Expecting 12 values
                Assert.True(preValCount == postValCount - 12);
            }
            else
            {
                Assert.True(postValCount == 12);
            }

            // Values parsing check
            var dest = statePost[call].ElementAt(postValCount - 4);
            var value = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("e244a01a44bff3d79ed4d3d94bad2b172099b654cd11350563eaea8aa827256c", dest);
            Assert.Equal("80000000000", value);
        }
    }
}
