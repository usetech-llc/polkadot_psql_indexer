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
    public class ParseDemocracy
    {
        IApplication _app;
        MetadataSchema _sch;
        Indexer _indexer;
        Postgres _postgres;

        public ParseDemocracy()
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

        ~ParseDemocracy()
        {
            _app.Disconnect();
            _app.Dispose();
        }

        [Fact]
        public void ParseDemocracyPropose()
        {
            var call = "DemocracyCallpropose";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 702968 });
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
            var propHash = statePost[call].ElementAt(postValCount - 4);
            var value = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("{461ad7f8f485166e54de19254ac77898ab0a801f1ac583fcf71f4e7699953b5b}", propHash);
            Assert.Equal("1000000000000", value);
        }

        [Fact]
        public void ParseDemocracySecond()
        {
            var call = "DemocracyCallsecond";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 717763 });
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

                // Expecting 11 values
                Assert.True(preValCount == postValCount - 11);
            }
            else
            {
                Assert.True(postValCount == 11);
            }

            // Values parsing check
            var proposal = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("8", proposal);
        }

        [Fact]
        public void ParseDemocracyVote()
        {
            var call = "DemocracyCallvote";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 717759 });
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
            var refIndex = statePost[call].ElementAt(postValCount - 4);
            var vote = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("22", refIndex);
            Assert.Equal("0", vote);
        }
    }
}
