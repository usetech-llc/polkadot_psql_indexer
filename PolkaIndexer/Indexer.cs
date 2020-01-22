using Polkadot.Api;
using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    class IndexerException : Exception
    {
        public IndexerException(string message) : base(message)
        {
        }
    }

    internal class Indexer
    {
        IApplication _app;
        private SystemInfo _systemInfo;
        private IDatabaseAdapdable _databaseAdapdable;

        public Indexer(IApplication app, IDatabaseAdapdable databaseAdapdable)
        {
            _app = app;
            _systemInfo = app.GetSystemInfo();
            _databaseAdapdable = databaseAdapdable;
        }

        public bool Initialize()
        {
            return _databaseAdapdable.CheckSystemInit();
        }

        public void CheckSystemInfo()
        {
            if (!_databaseAdapdable.CheckSystemInfo(_systemInfo))
            {
                throw new IndexerException("System info network and system info database are different");
            }
        }

        public void ParseBlockDbg(SignedBlock block, MetadataV8 md)
        {
            var tf = new TransactionFactory(new Metadata(md), _databaseAdapdable);

            foreach (var extrinsic in block.Block.Extrinsic)
            {
                var specificTransaction = tf.GetTransactionSpecific(block, extrinsic);
                specificTransaction.Execute();
            }
        }

        public void ParseBlock(BlockHash blockHash)
        {
            var block = _app.GetBlock(new GetBlockParams { BlockHash = blockHash.Hash });

            var tf = new TransactionFactory(new Metadata(_app.GetMetadata(null)), _databaseAdapdable);

            foreach (var extrinsic in block.Block.Extrinsic)
            {
                var specificTransaction = tf.GetTransactionSpecific(block, extrinsic);
                specificTransaction.Execute();
            }
        }

        //private ExtrinsicInfo ParseExtrinsic(SignedBlock sb, string extrinsic)
        //{
        //    var ex = extrinsic.Substring(2);
        //    bool transactionFlag = false;
        //    bool unknown = false;
        //    int extrinsicEra = 0;

        //    var metadata = new Metadata(_app.GetMetadata(null));

        //    var ci = Scale.DecodeCompactInteger(ref ex);
        //    var transactionParam = new List<object>();
        //    string ns;
        //    string t1 = string.Empty;
        //    string moduleName = string.Empty, methodName = string.Empty;

        //    if (ex.Length > 100)
        //    {
        //        // transaction
        //        // Signature version + Address separator + Signer public key + SR25519 Signature (length)
        //        transactionFlag = true;
        //        t1 = ex.Substring(0, 200);
        //        ns = ex.Substring(200);
        //    }
        //    else
        //    {
        //        // extrinsic
        //        ns = ex;
        //    }

        //    var nonce = Scale.DecodeCompactInteger(ref ns);
        //    if (transactionFlag)
        //    {
        //        extrinsicEra = Scale.NextByte(ref ns);
        //    }

        //    var moduleInd = Scale.NextByte(ref ns);
        //    int methodInd = 0;
        //    if (ns.Length > 0)
        //        methodInd = Scale.NextByte(ref ns);

        //    FunctionCallArgV8[] paramsInfo = null;

        //    // try parse transaction if catch exception that transaction is not supported
        //    try
        //    {
        //        paramsInfo = metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
        //        var r1 = metadata.GetModuleCallNameByIds(moduleInd, methodInd);
        //        moduleName = r1.Item1;
        //        methodName = r1.Item2;
        //    }
        //    catch(Exception e)
        //    {
        //        unknown = true;
        //    }

        //    return new ExtrinsicInfo
        //    {
        //        BlockNumber = (int)sb.Block.Header.Number,
        //        BlockHash = sb.Block.Header.ParentHash,
        //        Raw = extrinsic,
        //        ModuleIndex = moduleInd,
        //        ModuleName = moduleName,
        //        MethodIndex = methodInd,
        //        MethodName = methodName,
        //        Nonce = nonce.Value,
        //        ExtrinsicEra = extrinsicEra,
        //        Params = ns,
        //        Unknown = unknown,
        //        ParamsInfo = paramsInfo
        //    }; 
        //}

        internal void Scan()
        {
            var lastBlock = _app.GetBlock(null);

            var lastParsedBlock = Convert.ToInt32(_databaseAdapdable.GetSettingValue<string>("lastParsedBlock"));

            // perform operation until reach last block 
            while ((int)lastBlock.Block.Header.Number > lastParsedBlock)
            {
                var curBlockInfo = _app.GetBlockHash(new GetBlockHashParams { BlockNumber = lastParsedBlock + 1 });
                ParseBlock(curBlockInfo);
                lastParsedBlock++;
                _databaseAdapdable.SetSettingValue("lastParsedBlock", lastParsedBlock.ToString());
            }
        }
    }
}