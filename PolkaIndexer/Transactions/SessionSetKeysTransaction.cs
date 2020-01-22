﻿using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class SessionSetKeysTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        private List<string> keys;
        private string proof;

        public SessionSetKeysTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
            keys = new List<string>();
        }

        public void Execute()
        {
            var transfer = new TableName
            {
                MethodName = "set_keys",
                ModuleName = "Session"
            };

            var keysString = string.Empty;
            foreach (var i in keys)
            {
                keysString += $"{i} ,";
            }
            keysString = keysString.Substring(0, keysString.Length - 2);

            var blocknumber = new TableRow
            {
                RowIndex = 1,
                RowName = "blocknumber",
                Value = new List<string> { _pex.BlockNumber.ToString() }
            };

            var keysRow = new TableRow
            {
                RowIndex = 1,
                RowName = "keys",
                Value = new List<string> { keysString }
            };

            var proofRow = new TableRow
            {
                RowIndex = 1,
                RowName = "proof",
                Value = new List<string> { proof }
            };

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { keysRow, proofRow, blocknumber });
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

            var moduleInd = Scale.NextByte(ref parse);
            var methodInd = Scale.NextByte(ref parse);
            Scale.NextByte(ref parse);
            FunctionCallArgV8[] paramsInfo = null;

            while (parse.Length >= 64)
            {
                var target = parse.Substring(0, 64);
                parse = parse.Substring(64);
                keys.Add(target);
            }

            proof = parse;

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("Session", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("set_keys", StringComparison.InvariantCultureIgnoreCase))
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