using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class NotSpecificTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo _pex;

        public NotSpecificTransaction(IDatabaseAdapdable dbAdapter, Metadata metadata)
        {
            _dbAdapter = dbAdapter;
            _metadata = metadata;
        }

        public void Execute(int transactionId)
        {
            var paramsString = _pex.Params;

            if (_pex.ParamsInfo.Length == 1)
            {
                var pInfo = _pex.ParamsInfo[0];
                object item;
                if (pInfo.Type.Contains("Compact"))
                {
                    item = Scale.DecodeCompactInteger(ref paramsString).Value;
                }
                else
                {
                    item = paramsString;
                }

                var tbl = new TableName
                {
                    ModuleName = _pex.ModuleName,
                    MethodName = _pex.MethodName
                };

                _dbAdapter.InsertIntoCall(tbl, new List<TableRow>
                {
                    new TableRow{ RowName = _pex.ParamsInfo[0].Name, Value = new List<string>{ item.ToString() } },
                    new TableRow{ RowName = "blocknumber", Value =  new List<string>{ _pex.BlockNumber.ToString() } },
                    new TableRow{ RowName = "Block", Value =  new List<string>{ _pex.BlockHash.ToString() } },
                    new TableRow{ RowName = "transactionindex", Value = new List<string>{ transactionId.ToString() } }
                });
            }
        }

        public bool Parse(SignedBlock sb, string extrinsic)
        {
            bool result = false;
            var ex = extrinsic.Substring(2);
            var ci = Scale.DecodeCompactInteger(ref ex);
            var transactionParam = new List<object>();
            string t1 = string.Empty;
            string moduleName = string.Empty, methodName = string.Empty;
            var nonce = Scale.DecodeCompactInteger(ref ex);
            var moduleInd = Scale.NextByte(ref ex);
            int methodInd = 0;
            if (ex.Length > 0)
                methodInd = Scale.NextByte(ref ex);

            FunctionCallArgV8[] paramsInfo = null;

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                result = true;
            }
            catch (Exception)
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
                Nonce = nonce.Value,
                ExtrinsicEra = 0,
                Params = ex,
                Unknown = result,
                ParamsInfo = paramsInfo
            };

            return result;
        }
    }
}