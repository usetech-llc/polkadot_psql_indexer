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
    internal class IdentityRequestJudgementTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo pex;

        private string sk;
        private string maxFee;
        private string regIndex;

        public IdentityRequestJudgementTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute(int transactionId)
        {
            var fTransfer = new TableName { ModuleName = "Identity", MethodName = "request_judgement" };

            var regInd = new TableRow
            {
                RowIndex = 0,
                RowName = "reg_index",
                Value = new List<string> { regIndex }
            };

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { transactionId.ToString() }
            };

            var maxF = new TableRow
            {
                RowIndex = 0,
                RowName = "max_fee",
                Value = new List<string> { maxFee }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 0,
                RowName = "blocknumber",
                Value = new List<string> { pex.BlockNumber.ToString() }
            };

            var nonce = new TableRow
            {
                RowIndex = 0,
                RowName = "Nonce",
                Value = new List<string> { pex.Nonce.ToString() }
            };

            var signatureKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Signature",
                Value = new List<string> { pex.Signature }
            };

            var status = new TableRow
            {
                RowIndex = 0,
                RowName = "Status",
                Value = new List<string> { pex.Status.ToString() }
            };

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { sk }
            };

            var blockHash = new TableRow
            {
                RowIndex = 0,
                RowName = "Block",
                Value = new List<string> { pex.BlockHash.ToString() }
            };

            _dbAdapter.InsertIntoCall(fTransfer, new List<TableRow> { blockHash, tid, transactionSenderKey, status, nonce, signatureKey, maxF, regInd, blocknumber });
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

            regIndex = Scale.DecodeCompactInteger(ref parse).Value.ToString();
            maxFee = Scale.DecodeCompactInteger(ref parse).Value.ToString();

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Identity", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("request_judgement", StringComparison.InvariantCultureIgnoreCase))
                    result = true;
            }
            catch (Exception)
            {
                return false;
            }

            pex = new ExtrinsicInfo
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
                Status = err,
                Unknown = result,
                Signature = signature,
                ParamsInfo = paramsInfo
            };

            return result;
        }
    }
}