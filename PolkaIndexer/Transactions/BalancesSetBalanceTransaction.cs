using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class BalancesSetBalanceTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo pex;
        private string rk;
        private string newFree;
        private string newReserved;

        public BalancesSetBalanceTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute()
        {
            var fb = new TableName { ModuleName = "Balances", MethodName = "FreeBalance" };
            var rb = new TableName { ModuleName = "Balances", MethodName = "ReservedBalance" };
            var ti = new TableName { ModuleName = "Balances", MethodName = "TotalIssuance" };

            _dbAdapter.InsertIntoStorage(fb, new TableRow
            {
                BlockNumber = pex.BlockNumber,
                RowName = "value",
                Value = new List<string> { newFree }
            });

            _dbAdapter.InsertIntoStorage(rb, new TableRow
            {
                BlockNumber = pex.BlockNumber,
                RowName = "value",
                Value = new List<string> { newReserved }
            });

            var bsb = new TableName { ModuleName = "Balances", MethodName = "set_balance" };

            var who = new TableRow
            {
                RowIndex = 0,
                RowName = "who",
                Value = new List<string> { rk }
            };

            var nFree = new TableRow
            {
                RowIndex = 0,
                RowName = "new_free",
                Value = new List<string> { newFree }
            };

            var nReserved = new TableRow
            {
                RowIndex = 0,
                RowName = "new_reserved",
                Value = new List<string> { newReserved }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 0,
                RowName = "blocknumber",
                Value = new List<string> { newReserved }
            };

            _dbAdapter.InsertIntoCall(bsb, new List<TableRow> { who, nFree, nReserved, blocknumber });
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
            var sk = senderPublic;

            parse = parse.Substring(68 * 2);
            Scale.NextByte(ref parse);

            bool result = false;
            string moduleName = string.Empty, methodName = string.Empty;

            Scale.NextByte(ref parse);
            var moduleInd = Scale.NextByte(ref parse);
            var methodInd = Scale.NextByte(ref parse);
            Scale.NextByte(ref parse);

            FunctionCallArgV8[] paramsInfo = null;

            rk = parse.Substring(0, 64);
            parse = parse.Substring(64);

            newFree = Scale.DecodeCompactInteger(ref parse).Value.ToString();

            newReserved = Scale.DecodeCompactInteger(ref parse).Value.ToString();

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Balances", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("set_balance", StringComparison.InvariantCultureIgnoreCase))
                    result = true;
            }
            catch (Exception e)
            {
                return false;
            }

            pex = new ExtrinsicInfo
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