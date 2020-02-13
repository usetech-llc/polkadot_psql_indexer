using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class StakingValidateTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        private string sk;
        private string rk;
        private string amount;
        private string payee;

        public StakingValidateTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute()
        {
            var transfer = new TableName
            {
                MethodName = "validate",
                ModuleName = "Staking"
            };

            var prefs = new TableRow
            {
                RowIndex = 1,
                RowName = "prefs",
                Value = new List<string> { amount }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 1,
                RowName = "blocknumber",
                Value = new List<string> { _pex.BlockNumber.ToString() }
            };

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { sk }
            };

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { transactionSenderKey, blocknumber, prefs });
        }

        public bool Parse(SignedBlock sb, string extrinsic)
        {
            var parse = extrinsic;

            parse = parse.Substring(2);
            Scale.DecodeCompactInteger(ref parse);

            // nonce + delimiter
            var nonce = Scale.NextByte(ref parse);
            Scale.NextByte(ref parse);

            // 32 * 2
            var senderPublic = parse.Substring(0, 64);
            parse = parse.Substring(64);
            sk = senderPublic;

            parse = parse.Substring(68 * 2);
            Scale.NextByte(ref parse);

            bool result = false;
            string moduleName = string.Empty, methodName = string.Empty;

            //Scale.NextByte(ref parse);
            var moduleInd = Scale.NextByte(ref parse);
            var methodInd = Scale.NextByte(ref parse);
            amount = Scale.DecodeCompactInteger(ref parse).Value.ToString();
            FunctionCallArgV8[] paramsInfo = null;

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Staking", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("validate", StringComparison.InvariantCultureIgnoreCase))
                    result = true;
            }
            catch (Exception e)
            {
                return false;
            }

            _pex = new ExtrinsicInfo
            {
                BlockNumber = (int)sb.Block.Header.Number,
                BlockHash = sb.Block.Header.ParentHash,
                Raw = extrinsic,
                ModuleIndex = moduleInd,
                ModuleName = moduleName,
                MethodIndex = methodInd,
                MethodName = methodName,
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