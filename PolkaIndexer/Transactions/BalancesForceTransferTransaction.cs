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
    internal class BalancesForceTransferTransaction : SpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo pex;

        private string sk;
        private string rk;
        private string value;

        public BalancesForceTransferTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
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
                BlockNumber = pex.BlockNumber
            };

            BigInteger curValue = 0;
            var sval = _dbAdapter.GetLastStorageValue(freebal, curValueRow);
            if (!sval.Equals(""))
            {
                curValue = BigInteger.Parse(sval);
            }

            BigInteger intAmount = BigInteger.Parse(value);

            var part1 = new TableRow
            {
                RowName = "value",
                BlockNumber = pex.BlockNumber,
                Value = new List<string> { (curValue - intAmount).ToString() }
            };

            var part2 = new TableRow
            {
                RowName = "value",
                BlockNumber = pex.BlockNumber,
                Value = new List<string> { (curValue + intAmount).ToString() }
            };

            _dbAdapter.InsertIntoStorage(freebal, part1);
            _dbAdapter.InsertIntoStorage(freebal, part2);

            var fTransfer = new TableName { ModuleName = "Balances", MethodName = "force_transfer" };

            var source = new TableRow
            {
                RowIndex = 0,
                RowName = "source",
                Value = new List<string> { sk }
            };

            var nFree = new TableRow
            {
                RowIndex = 0,
                RowName = "dest",
                Value = new List<string> { rk }
            };

            var value2 = new TableRow
            {
                RowIndex = 0,
                RowName = "value",
                Value = new List<string> { value }
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
                Value = new List<string> { pex.BlockHash.ToString() }
            };

            _dbAdapter.InsertIntoCall(fTransfer, new List<TableRow> { blockHash, tid, transactionSenderKey, status, nonce, signatureKey, source, nFree, value2, blocknumber });
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

            Scale.NextByte(ref parse);
            var rk2 = parse.Substring(0, 64);
            parse = parse.Substring(64);

            rk = parse.Substring(0, 64);
            parse = parse.Substring(64);
            value = Scale.DecodeCompactInteger(ref parse).Value.ToString();

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Balances", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("force_transfer", StringComparison.InvariantCultureIgnoreCase))
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