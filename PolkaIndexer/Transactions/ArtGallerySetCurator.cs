using Polkadot.BinarySerializer;
using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using Polkadot.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;
using System.Numerics;

namespace PolkaIndexer
{
    internal class ArtGallerySetCurator : SpecificTransaction
    {
        private ExtrinsicInfo _pex;

        private string sk;
        private string curator = "";
        private string signature;

        public ArtGallerySetCurator(string module, string method) : base(module, method)
        {
        }

        public override void Execute(int transactionId)
        {

            var curatorCall = new TableName
            {
                MethodName = "set_curator",
                ModuleName = "ArtGalleryPallet"
            };

            var nonce = new TableRow
            {
                RowIndex = 0,
                RowName = "Nonce",
                Value = new List<string> { _pex.Nonce.ToString() }
            };

            var blockHash = new TableRow
            {
                RowIndex = 0,
                RowName = "Block",
                Value = new List<string> { _pex.BlockHash.ToString() }
            };

            var signatureKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Signature",
                Value = new List<string> { _pex.Signature }
            };

            var status = new TableRow
            {
                RowIndex = 0,
                RowName = "Status",
                Value = new List<string> { _pex.Status.ToString() }
            };

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { sk }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 0,
                RowName = "blocknumber",
                Value = new List<string> { _pex.BlockNumber.ToString() }
            };

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { transactionId.ToString() }
            };

            var curatorRow = new TableRow
            {
                RowIndex = 1,
                RowName = "curator",
                Value = new List<string> { curator.ToString() }
            };
            

            _dbAdapter.InsertIntoCall(curatorCall, new List<TableRow> { blockHash, tid, status, blocknumber, nonce, signatureKey, transactionSenderKey, curatorRow });


            var curatorStorage = new TableName
            {
                MethodName = "curator",
                ModuleName = "ArtGalleryPallet"
            };

            _dbAdapter.InsertIntoStorage(curatorStorage, new List<TableRow> { curatorRow, blocknumber });

        }

        public override bool Parse(BlockHash bh, SignedBlock sb, string extrinsic)
        {
            var parse = extrinsic;

            parse = parse.Substring(2);
            var t1 = Scale.DecodeCompactInteger(ref parse);

            // delimiter
            Scale.NextByte(ref parse);
            Scale.NextByte(ref parse);

            // 32 * 2
            var senderPublic = parse.Substring(0, 64);
            parse = parse.Substring(64);
            sk = senderPublic;
            var era = Scale.NextByte(ref parse);

            signature = parse.Substring(0, 128);
            parse = parse.Substring(128);

            var err = Scale.DecodeCompactInteger(ref parse).Value;

            var nonce = Scale.DecodeCompactInteger(ref parse).Value;
            Scale.NextByte(ref parse);

            bool result = false;
            string moduleName = string.Empty, methodName = string.Empty;

            var moduleInd = Scale.NextByte(ref parse);
            var methodInd = Scale.NextByte(ref parse);
       

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("ArtGalleryPallet", StringComparison.InvariantCultureIgnoreCase) && 
                    methodName.Equals("set_curator", StringComparison.InvariantCultureIgnoreCase))
                    result = true;
            }
            catch (Exception)
            {
                return false;
            }

            _pex = new ExtrinsicInfo
            {
                BlockNumber = (int)sb.Block.Header.Number,
                BlockHash = bh.Hash,
                Raw = extrinsic,
                ModuleIndex = moduleInd,
                ModuleName = moduleName,
                MethodIndex = methodInd,
                MethodName = methodName,
                Nonce = nonce,
                ExtrinsicEra = era,
                Params = parse,
                Signature = signature,
                Unknown = result,
                Status = err,
                ParamsInfo = null
            };

            return result;
        }
    }
}