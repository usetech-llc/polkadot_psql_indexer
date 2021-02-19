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
    internal class ArtGalleryClearReport : SpecificTransaction
    {
        private ExtrinsicInfo _pex;

        private string sk;
        private string signature;
        private string collectionId;
        private string tokenId;

        public ArtGalleryClearReport(string module, string method) : base(module, method)
        {
        }

        public override void Execute(int transactionId)
        {         
            _ = int.TryParse(collectionId, out int colId);
            _ = int.TryParse(tokenId, out int tokId);

            var tokenextendedinfoStorage = new TableName
            {
                MethodName = "tokenextendedinfo",
                ModuleName = "artgallerypallet"
            };
            var kv = new TableRow
            {
                RowName = "key1",
                Value = new List<string> { $"'{{{collectionId.ToString()}}}'" }
            };
            var kv2 = new TableRow
            {
                RowName = "key2",
                Value = new List<string> { $"'{{{tokenId.ToString()}}}'" }
            };

            var extendedinfoDisplayFlagRow = new TableRow
            {
                RowName = "extendedinfo_display_flag",
                Value = new List<string> { $"'{{{0}}}'" }
            };

            var extendedinfoReportRow = new TableRow
            {
                RowName = "extendedinfo_report",
                Value = new List<string> { $"'{{Clear}}'" }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 0,
                RowName = "blocknumber",
                Value = new List<string> { $"'{{{_pex.BlockNumber.ToString()}}}'" }
            };

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { $"'{{{transactionId.ToString()}}}'" }
            };

            _dbAdapter.UpdateStorage(tokenextendedinfoStorage, collectionId, tokenId,  new List<TableRow> { extendedinfoDisplayFlagRow, extendedinfoReportRow, blocknumber, tid });




            var clearReportCall = new TableName
            {
                MethodName = "clear_report",
                ModuleName = "ArtGalleryPallet"
            };

            // insert report state

            var nonce = new TableRow
            {
                RowIndex = 0,
                RowName = "Nonce",
                Value = new List<string> { $"'{{{_pex.Nonce.ToString()}}}'" }
            };

            var blockHash = new TableRow
            {
                RowIndex = 0,
                RowName = "Block",
                Value = new List<string> { $"'{{{_pex.BlockHash.ToString()}}}'" }
            };

            var signatureKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Signature",
                Value = new List<string> { $"'{{{_pex.Signature.ToString()}}}'" }
            };

            var status = new TableRow
            {
                RowIndex = 0,
                RowName = "Status",
                Value = new List<string> { $"'{{{_pex.Status.ToString()}}}'" }
            };

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { $"'{{{sk.ToString()}}}'" }
            };

            var collectionIdRow = new TableRow
            {
                RowIndex = 1,
                RowName = "collection_id",
                Value = new List<string> { $"'{{{collectionId.ToString()}}}'" }
            };

            var colRow = new TableRow
            {
                RowIndex = 1,
                RowName = "collection_id",
                Value = new List<string> { $"'{{{colId.ToString()}}}'" }
            };

            var tokRow = new TableRow
            {
                RowIndex = 1,
                RowName = "token_id",
                Value = new List<string> { $"'{{{tokId.ToString()}}}'" }
            };

            _dbAdapter.InsertIntoCall(clearReportCall, new List<TableRow> { blockHash, tid, status, blocknumber, nonce, signatureKey, transactionSenderKey, collectionIdRow, colRow, tokRow });
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

            collectionId = parse.Substring(0, 16);
            parse = parse.Substring(16);
            tokenId = parse.Substring(0, 16);
            parse = parse.Substring(16);

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("ArtGalleryPallet", StringComparison.InvariantCultureIgnoreCase) && 
                    methodName.Equals("clear_report", StringComparison.InvariantCultureIgnoreCase))
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