using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class StakingCancelDeferredSlashTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        private string eraP;
        private string slash_indices;
        private string sk;

        public StakingCancelDeferredSlashTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute(int transactionId)
        {
            var transfer = new TableName
            {
                MethodName = "cancel_deferred_slash",
                ModuleName = "Staking"
            };

            var blocknumber = new TableRow
            {
                RowIndex = 1,
                RowName = "blocknumber",
                Value = new List<string> { _pex.BlockNumber.ToString() }
            };

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { transactionId.ToString() }
            };

            var eraRow = new TableRow
            {
                RowIndex = 1,
                RowName = "era",
                Value = new List<string> { eraP }
            };

            var slashIndicesRow = new TableRow
            {
                RowIndex = 1,
                RowName = "slash_indices",
                Value = new List<string> { slash_indices }
            };

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { sk }
            };

            var nonce = new TableRow
            {
                RowIndex = 0,
                RowName = "Nonce",
                Value = new List<string> { _pex.Nonce.ToString() }
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

            var blockHash = new TableRow
            {
                RowIndex = 0,
                RowName = "Block",
                Value = new List<string> { _pex.BlockHash.ToString() }
            };

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { blockHash, tid, signatureKey, status, nonce, transactionSenderKey, slashIndicesRow, blocknumber });
        }

        public bool Parse(BlockHash bh, SignedBlock sb, string extrinsic)
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

            var signature = parse.Substring(0, 128);
            parse = parse.Substring(128);

            var err = Scale.DecodeCompactInteger(ref parse).Value;

            var nonce = Scale.DecodeCompactInteger(ref parse).Value;
            Scale.NextByte(ref parse);

            bool result = false;
            string moduleName = string.Empty, methodName = string.Empty;

            var moduleInd = Scale.NextByte(ref parse);
            var methodInd = Scale.NextByte(ref parse);

            FunctionCallArgV8[] paramsInfo = null;

            eraP = Scale.NextByte(ref parse).ToString();
            slash_indices = parse;

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Staking", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("cancel_deferred_slash", StringComparison.InvariantCultureIgnoreCase))
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
                Signature = signature,
                Status = err,
                Nonce = nonce,
                ExtrinsicEra = 0,
                Params = parse,
                Unknown = result,
                ParamsInfo = paramsInfo
            };

            return result;
        }
    }
}