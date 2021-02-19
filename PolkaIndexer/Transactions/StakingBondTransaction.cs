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
    internal class StakingBondTransaction : SpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        private string sk;
        private string rk;
        private string amount;
        private string payee;
        private string signature;

        public StakingBondTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute(int transactionId)
        {
            var bonded = new TableName
            {
                MethodName = "bonded",
                ModuleName = "Staking"
            };

            var payee1 = new TableName
            {
                MethodName = "payee",
                ModuleName = "Staking"
            };

            var intAmount = BigInteger.Parse(amount);

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { transactionId.ToString() }
            };

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
            _dbAdapter.InsertIntoStorage(payee1, part2);

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { sk }
            };

            var transfer = new TableName
            {
                MethodName = "bond",
                ModuleName = "Staking"
            };

            var controller = new TableRow
            {
                RowIndex = 0,
                RowName = "controller",
                Value = new List<string> { rk }
            };

            var payeeDest = new TableRow
            {
                RowIndex = 0,
                RowName = "payee",
                Value = new List<string> { payee }
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
                Value = new List<string> { _pex.BlockNumber.ToString() }
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
                Value = new List<string> { signature }
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

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { blockHash, tid, status, blocknumber, nonce, signatureKey, transactionSenderKey, controller, payeeDest, transactionValue });
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

            signature = parse.Substring(0, 128);
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
                ExtrinsicEra = 0,
                Status = err,
                Params = parse,
                Unknown = result,
                ParamsInfo = paramsInfo
            };

            return result;
        }
    }
}