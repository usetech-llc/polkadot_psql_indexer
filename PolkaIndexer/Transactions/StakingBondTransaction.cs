using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using Polkadot.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class StakingBondTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        private string sk;
        private string rk;
        private string amount;
        private string payee;

        public StakingBondTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute()
        {
            var bonded = new TableName
            {
                MethodName = "bonded",
                ModuleName = "Staking"
            };

            var payee = new TableName
            {
                MethodName = "payee",
                ModuleName = "Staking"
            };

            ulong curValue = 0;
            var intAmount = Convert.ToUInt64(amount);

            var part1 = new TableRow
            {
                RowName = "value",
                BlockNumber = _pex.BlockNumber,
                Value = new List<string> { (intAmount).ToString() }
            };

            var part2 = new TableRow
            {
                RowName = "value",
                BlockNumber = _pex.BlockNumber,
                Value = new List<string> { (intAmount).ToString() }
            };

            _dbAdapter.InsertIntoStorage(bonded, part1);
            _dbAdapter.InsertIntoStorage(payee, part2);

            var transfer = new TableName
            {
                MethodName = "bond",
                ModuleName = "Staking"
            };

            var controller = new TableRow
            {
                RowIndex = 0,
                RowName = "controller",
                Value = new List<string> { sk }
            };

            var payeeDest = new TableRow
            {
                RowIndex = 0,
                RowName = "payee",
                Value = new List<string> { rk }
            };

            var transactionValue = new TableRow
            {
                RowIndex = 1,
                RowName = "value",
                Value = new List<string> { amount }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 1,
                RowName = "blocknumber",
                Value = new List<string> { amount }
            };

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { controller, payeeDest, transactionValue, blocknumber });
        }

        public bool Parse(SignedBlock sb, string extrinsic)
        {
            //var a1 = AddressUtils.GetPublicKeyFromAddr("Cruszf6XVodGCc4aUQGZCqqhQhLYmk5bjkiB3owinCQDckw");
            
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
            Scale.NextByte(ref parse);

            FunctionCallArgV8[] paramsInfo = null;

            rk = parse.Substring(0, 64);
            parse = parse.Substring(64);
            amount = Scale.DecodeCompactInteger(ref parse).Value.ToString();
            payee = parse;

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Staking", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("bond", StringComparison.InvariantCultureIgnoreCase))
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