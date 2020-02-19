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
    public class ParseStacking
    {
        IApplication _app;
        MetadataSchema _sch;
        Indexer _indexer;
        Postgres _postgres;

        public ParseStacking()
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

        ~ParseStacking()
        {
            _app.Disconnect();
            _app.Dispose();
        }

        [Fact]
        public void ParseStackingBond()
        {
            var call = "StakingCallbond";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 719492 });
            var statePre = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Parse block
            _indexer.ParseBlock(bn);

            var statePost = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Checking correctness of parsing
            var postValCount = statePost[call].Count();

            if (!statePost.ContainsKey(call))
                throw new Exception("Data was not written");

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
            var controller = statePost[call].ElementAt(postValCount - 5);
            var value = statePost[call].ElementAt(postValCount - 4);
            var payee = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("0ca7999ecee02ff74b24312522ad6531c2cc81ebad5219b52439f791a6402d60", controller);
            Assert.Equal("19000000000000000", value);
            Assert.Equal("02", payee);
        }

        [Fact]
        public void ParseStackingBondExtra()
        {
            var call = "StakingCallbond_extra";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 717602 });
            var statePre = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Parse block
            _indexer.ParseBlock(bn);

            var statePost = _postgres.GetBlockByHash(_sch.DatabaseSchema.TableList.ToArray(), bn.Hash);

            // Checking correctness of parsing
            var postValCount = statePost[call].Count();

            if (!statePost.ContainsKey(call))
                throw new Exception("Data was not written");

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
            var maxAdd = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("1000000000000", maxAdd);
        }

        [Fact]
        public void ParseStackingUnbond()
        {
            var call = "StakingCallunbond";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 713333 });
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
            var value = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("505000000000000", value);
        }

        [Fact]
        public void ParseStackingWithdrawUnbonded()
        {
            var call = "StakingCallwithdraw_unbonded";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 713046 });
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
                Assert.True(preValCount == postValCount - 10);
            }
            else
            {
                Assert.True(postValCount == 10);
            }
        }

        [Fact]
        public void ParseStackingValidate()
        {
            var call = "StakingCallvalidate";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 718326 });
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
            var prefs = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("200000000", prefs);
        }

        [Fact]
        public void ParseStackingNominate()
        {
            var call = "StakingCallnominate";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 719462 });
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
            var targets = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("589d797b259ba12d5f74d118a2f63fdd5b519b69003821b9da81614225776a2a", targets);
        }

        [Fact]
        public void ParseStackingChill()
        {
            var call = "StakingCallchill";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 719444 });
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

                // Expecting 10 values
                Assert.True(preValCount == postValCount - 10);
            }
            else
            {
                Assert.True(postValCount == 10);
            }
        }

        [Fact]
        public void ParseStackingSetPayee()
        {
            var call = "StakingCallset_payee";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 715488 });
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
            var payee = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("01", payee);
        }

        [Fact]
        public void ParseStackingSetController()
        {
            var call = "StakingCallset_controller";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 716281 });
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
            var controller = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("ff88f6647fdb89b103465a633cf07f8ada3067ae6b0c18808a16596d1cdd7e0a4e", controller);
        }

        [Fact]
        public void ParseStackingSetValidatorCount()
        {
            var call = "StakingCallset_validator_count";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 904503 });
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
            var newV = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("0", newV);
        }


        [Fact]
        public void ParseStackingForceUnstake()
        {
            var call = "StakingCallforce_unstake";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 612541 });
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
            var stash = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("{562f6a0b999e6dcfb820b2e4dd52cfbfd3aa31c86919604d8e99f3b35bdbd21e}", stash);
        }

        [Fact]
        public void ParseStackingCancelDeferredSlash()
        {
            var call = "StakingCallcancel_deferred_slash";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 260163 });
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
            var era = statePost[call].ElementAt(postValCount - 4);
            var stash_indices = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("", era);
            Assert.Equal("00000000", stash_indices);
        }

        [Fact]
        public void ParseSessionCancelSetKeys()
        {
            var call = "SessionCallset_keys";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 719491 });
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
            var keys = statePost[call].ElementAt(postValCount - 4);
            var proof = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("d63d680bb4a3c20227315afb95862ba264aa21121515b2937dd058367e415a0c", keys);
            Assert.Equal("00", proof);
        }
    }
}
