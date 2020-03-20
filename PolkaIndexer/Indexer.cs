using Polkadot.Api;
using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using PolkaIndexer.WebApi;
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

    public class Indexer
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

        public void ParseBlock(BlockHash blockHash)
        {
            var block = _app.GetBlock(new GetBlockParams { BlockHash = blockHash.Hash });

            var tf = new TransactionFactory(new Metadata(_app.GetMetadata(null)), _databaseAdapdable);

            int transactionId = 0;
            foreach (var extrinsic in block.Block.Extrinsic)
            {
                var specificTransaction = tf.GetTransactionSpecific(blockHash, block, extrinsic);
                specificTransaction.Execute(transactionId);
                transactionId++;
            }
        }

        public void Scan(int defaultBlockNum = 0)
        {
            var lastBlock = _app.GetBlock(null);

            var lastParsedBlock = Convert.ToInt32(_databaseAdapdable.GetSettingValue<string>("lastParsedBlock"));
            if (lastParsedBlock == 0)
                lastParsedBlock = defaultBlockNum;

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