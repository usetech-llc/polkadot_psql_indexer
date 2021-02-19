using Polkadot.Api;
using Polkadot.BinaryContracts.Events;
using Polkadot.BinarySerializer;
using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using PolkaIndexer.DAL;
using PolkaIndexer.WebApi;
using StrobeNet.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

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
        private MetadataSchema _schema;
        private TransactionFactory _tf;

        public Indexer(IApplication app, IDatabaseAdapdable databaseAdapdable, MetadataSchema schema)
        {
            _app = app;
            _systemInfo = app.GetSystemInfo();
            _databaseAdapdable = databaseAdapdable;
            _schema = schema;
            _tf = new TransactionFactory(new Metadata(_app.GetMetadata(null)), _databaseAdapdable);
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

        public void ParseEvent(BlockHash blockHash, string blockNumber)
        {
            var events = _app.StorageApi.GetStorage(new List<string> {
                "0x26aa394eea5630e07c48ae0c9558cef780d41e5e16056765bc8461851072c9d7",
                blockHash.Hash }).Substring(2);

            var ew = new EventsWritter(_schema, _databaseAdapdable);

            foreach (var parser in _schema._databaseSchema.Eparsers)
            {
                var ae = new ArgumentExtractor("0001000000{1}", parser.ArgsMasks);
                var args = ae.Extract(events);

                if (parser.ArgsMasks.Count > 2 && parser.ArgsMasks.Count == args.ToArray().Length)
                {
                    // success
                    ew.Write(parser, args.ToList(), blockHash.Hash, blockNumber);
                }
            }
        }

        public void ParseBlock(BlockHash blockHash)
        {
            var block = _app.GetBlock(new GetBlockParams { BlockHash = blockHash.Hash });

            int transactionId = 0;
            foreach (var extrinsic in block.Block.Extrinsic)
            {
                var specificTransaction = _tf.GetTransactionSpecific(blockHash, block, extrinsic);
                if (specificTransaction != null)
                    specificTransaction.Execute(transactionId);
                transactionId++;
            }
        }

        public bool Scan(ulong defaultBlockNum = 0)
        {
            var lastBlock = _app.GetBlock(null);

            var lastParsedBlock = Convert.ToUInt64(_databaseAdapdable.GetSettingValue<string>("lastParsedBlock"));
            if (lastParsedBlock == 0)
                lastParsedBlock = defaultBlockNum;

            if (lastBlock.Block.Header.Number <= lastParsedBlock)
                return false;

            var blockParams = new GetBlockHashParams { BlockNumber = lastParsedBlock + 1 };

            var curBlockInfo = _app.GetBlockHash(blockParams);
            ParseEvent(curBlockInfo, (lastParsedBlock + 1).ToString());
            ParseBlock(curBlockInfo);
            lastParsedBlock++;
            _databaseAdapdable.SetSettingValue("lastParsedBlock", lastParsedBlock.ToString());

            return true;
        }
    }
}