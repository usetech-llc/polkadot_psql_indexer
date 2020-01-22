using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class BalancesTransferKeepAliveTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        private string sk;
        private string rk;
        private string amount;

        public BalancesTransferKeepAliveTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute()
        {
            // Set FREEBALANCE for participants 
            // Add transfer value

            var freebal = new TableName
            {
                MethodName = "FreeBalance",
                ModuleName = "Balances"
            };

            var curValueRow = new TableRow
            {
                RowName = "value",
                BlockNumber = _pex.BlockNumber
            };

            ulong curValue = 0;
            var sval = _dbAdapter.GetLastStorageValue(freebal, curValueRow);
            if (!sval.Equals(""))
            {
                curValue = Convert.ToUInt64(sval);
            }

            // var curValue = Convert.ToUInt64(_dbAdapter.GetLastStorageValue(freebal, curValueRow));
            var intAmount = Convert.ToUInt64(amount);

            var part1 = new TableRow
            {
                RowName = "value",
                BlockNumber = _pex.BlockNumber,
                Value = new List<string> { (curValue - intAmount).ToString() }
            };

            var part2 = new TableRow
            {
                RowName = "value",
                BlockNumber = _pex.BlockNumber,
                Value = new List<string> { (curValue + intAmount).ToString() }
            };

            _dbAdapter.InsertIntoStorage(freebal, part1);
            _dbAdapter.InsertIntoStorage(freebal, part2);

            var transfer = new TableName
            {
                MethodName = "transfer",
                ModuleName = "Balances"
            };

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { sk }
            };

            var transactionDest = new TableRow
            {
                RowIndex = 0,
                RowName = "dest",
                Value = new List<string> { rk }
            };

            var transactionValue = new TableRow
            {
                RowIndex = 1,
                RowName = "value",
                Value = new List<string> { amount }
            };

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { transactionDest, transactionValue, transactionSenderKey });
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

            var moduleInd = Scale.NextByte(ref parse);
            var methodInd = Scale.NextByte(ref parse);
            Scale.NextByte(ref parse);

            FunctionCallArgV8[] paramsInfo = null;

            rk = parse.Substring(0, 64);
            parse = parse.Substring(64);
            amount = Scale.DecodeCompactInteger(ref parse).Value.ToString();

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Balances", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("transfer_keep_alive", StringComparison.InvariantCultureIgnoreCase))
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