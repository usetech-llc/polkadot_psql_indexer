using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;
using System.Numerics;

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

        public void Execute(int transactionId)
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

            BigInteger curValue = 0;
            var sval = _dbAdapter.GetLastStorageValue(freebal, curValueRow);
            if (!sval.Equals(""))
            {
                curValue = BigInteger.Parse(sval);
            }

            var intAmount = BigInteger.Parse(amount);

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
                MethodName = "transfer_keep_alive",
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

            var blocknumber = new TableRow
            {
                RowIndex = 0,
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
                Value = new List<string> { _pex.Signature }
            };

            var status = new TableRow
            {
                RowIndex = 0,
                RowName = "Status",
                Value = new List<string> { _pex.Status.ToString() }
            };

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { transactionId.ToString() }
            };

            var blockHash = new TableRow
            {
                RowIndex = 0,
                RowName = "Block",
                Value = new List<string> { _pex.BlockHash.ToString() }
            };

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { blockHash, tid, status, nonce, signatureKey, transactionDest, transactionValue, transactionSenderKey, blocknumber });
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
                Status = err,
                Nonce = nonce,
                ExtrinsicEra = 0,
                Signature = signature,
                Params = parse,
                Unknown = result,
                ParamsInfo = paramsInfo
            };

            return result;
        }
    }
}