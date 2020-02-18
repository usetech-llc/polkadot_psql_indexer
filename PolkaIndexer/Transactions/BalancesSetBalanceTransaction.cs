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
        private string sk;
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
                Value = new List<string> { newReserved }
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

            _dbAdapter.InsertIntoCall(bsb, new List<TableRow> { status, nonce, signatureKey,  who, nFree, nReserved, blocknumber, transactionSenderKey });
        }

        public bool Parse(SignedBlock sb, string extrinsic)
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
            catch (Exception)
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
                ExtrinsicEra = era,
                Params = parse,
                Unknown = result,
                Signature = signature,
                Status = err,
                ParamsInfo = paramsInfo
            };

            return result;
        }
    }
}