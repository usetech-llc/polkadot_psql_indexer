using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class DemocracyVoteTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;
        private Metadata _metadata;
        private ExtrinsicInfo pex;

        private string sk;
        private string rk;
        private string refIndex;
        private string vote;

        public DemocracyVoteTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public void Execute()
        {
            var transfer = new TableName
            {
                MethodName = "vote",
                ModuleName = "democracy"
            };

            var proposalHashRow = new TableRow
            {
                RowIndex = 0,
                RowName = "ref_index",
                Value = new List<string> { refIndex }
            };

            var valueRow = new TableRow
            {
                RowIndex = 0,
                RowName = "vote",
                Value = new List<string> { vote }
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
                Value = new List<string> { pex.BlockNumber.ToString() }
            };

            _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { transactionSenderKey, proposalHashRow, valueRow, blocknumber });
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

            //Scale.NextByte(ref parse);
            var moduleInd = Scale.NextByte(ref parse);
            var methodInd = Scale.NextByte(ref parse);

            FunctionCallArgV8[] paramsInfo = null;

            refIndex = Scale.DecodeCompactInteger(ref parse).Value.ToString();
            vote = Scale.NextByte(ref parse).ToString();

            // try parse transaction if catch exception that transaction is not supported
            try
            {
                paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;
                if (moduleName.Equals("democracy", StringComparison.InvariantCultureIgnoreCase) &&
                    methodName.Equals("vote", StringComparison.InvariantCultureIgnoreCase))
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