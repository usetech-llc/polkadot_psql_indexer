using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class StakingNominateTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        private List<string> targets;
        private string sk;

        public StakingNominateTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
            targets = new List<string>();
        }

        public void Execute(int transactionId)
        {
            var transfer = new TableName
            {
                MethodName = "nominate",
                ModuleName = "Staking"
            };

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { transactionId.ToString() }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 1,
                RowName = "blocknumber",
                Value = new List<string> { _pex.BlockNumber.ToString() }
            };

            var targetsString = string.Empty;
            foreach (var i in targets)
            {
                targetsString += $"{i} ,"; 
            }
            targetsString = targetsString.Substring(0, targetsString.Length - 2);

            var targetsRow = new TableRow
            {
                RowIndex = 1,
                RowName = "targets",
                Value = new List<string> { targetsString }
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

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { blockHash, tid, status, nonce, transactionSenderKey, blocknumber, targetsRow });
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
            Scale.NextByte(ref parse);

            while (parse.Length >= 64)
            {
                var target = parse.Substring(0, 64);
                parse = parse.Substring(64);

                if (parse.Length > 0)
                    Scale.NextByte(ref parse);
                
                targets.Add(target);
            }

            FunctionCallArgV8[] paramsInfo = null;

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Staking", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("nominate", StringComparison.InvariantCultureIgnoreCase))
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