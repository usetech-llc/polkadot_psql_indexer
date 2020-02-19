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
    public class ParseIdentity
    {
        IApplication _app;
        MetadataSchema _sch;
        Indexer _indexer;
        Postgres _postgres;

        public ParseIdentity()
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

        ~ParseIdentity()
        {
            _app.Disconnect();
            _app.Dispose();
        }

        [Fact]
        public void ParseIdentityAddRegistar()
        {
            var call = "IdentityCalladd_registrar";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 844627 });
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
            var account = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("{0aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b}", account);
        }

        [Fact]
        public void ParseIdentityCancelRequest()
        {
            var call = "IdentityCallcancel_request";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 911484 });
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
            var regIndex = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("0", regIndex);
        }

        [Fact]
        public void ParseIdentityClearIdentity()
        {
            var call = "IdentityCallclear_identity";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 1048700 });
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
        public void ParseIdentityKillIdentity()
        {
            var call = "IdentityCallkill_identity";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 832437 });
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
            var target = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("60857d3958e4e8809b36403726468f6b336e952d7cdee4a16c32126719dac411", target);
        }

        [Fact]
        public void ParseIdentityProvideJudgement()
        {
            var call = "IdentityCallprovide_judgement";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 1098912 });
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
            var regIndex = statePost[call].ElementAt(postValCount - 5);
            var target = statePost[call].ElementAt(postValCount - 4);
            var judgement = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("", regIndex);
            Assert.Equal("2e69ac91dc2b3e54afd2d74736e7dfd95faa1e738dab066c80328980c7c9076e", target);
            Assert.Equal("2", judgement);
        }

        [Fact]
        public void ParseIdentityRequestJudgement()
        {
            var call = "IdentityCallrequest_judgement";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 1067415 });
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
            var regIndex = statePost[call].ElementAt(postValCount - 4);
            var maxFee = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("1", regIndex);
            Assert.Equal("5000000000000", maxFee);
        }

        [Fact]
        public void ParseIdentitySetAccountId()
        {
            var call = "IdentityCallset_account_id";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 295993 });
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
            var index = statePost[call].ElementAt(postValCount - 4);
            var newV = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("0", index);
            Assert.Equal("{86b7409a11700afb027924cb40fa43889d98709ea35319d48fea85dd35004e64}", newV);
        }

        [Fact]
        public void ParseIdentitySetFee()
        {
            var call = "IdentityCallset_fee";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 588405 });
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
            var index = statePost[call].ElementAt(postValCount - 4);
            var fee = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("1", index);
            Assert.Equal("5000000000000", fee);
        }

        [Fact]
        public void ParseIdentitySetIdentity()
        {
            var call = "IdentityCallset_identity";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 1101200 });
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
            var info = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("00076465706f6f6c00000000000000", info);
        }

        [Fact]
        public void ParseIdentitySetSubs()
        {
            var call = "IdentityCallset_subs";
            var bn = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = 1013387 });
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
            var subs = statePost[call].ElementAt(postValCount - 3);

            Assert.Equal("ca5164772b835ac12c7e86d391ec217e65f05be0f43b75a059fdb0b3e8a1c44c11416c7068612043656e7461757269204254e0103cb355b3f6f357104c4cea54675909f687aa106a4e47d741dfde35e37611416c7068612043656e74617572692041de4ea9ea77e628210eb1aee0c6816cca8de5235e04a861059b889c6b396fbf1511416c7068612043656e74617572692043a08ca28409640a6ce8108289d3a279cf6fc3f0657b60f3c41f89d04c0e5fbb2d12416c7068612043656e7461757269204262d06a4dfc33d452ca4fbf37fd660a153b0d87011761701591ed79e5bb8759604412416c7068612043656e74617572692042634cee1a8fd3bca977c086368843e54330002df861543497ac55e3818e4111cc2612416c7068612043656e7461757269204362", subs);
        }


    }
}
