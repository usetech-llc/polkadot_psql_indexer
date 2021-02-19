using Polkadot.BinarySerializer;
using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using Polkadot.Source.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    abstract class SpecificTransaction
    {
        protected IDatabaseAdapdable _dbAdapter;
        protected Metadata _metadata;
        public string ModuleName { get; private set; }
        public string MethodName { get; private set; }

        private string _sk;
        private string _signature;
        private ExtrinsicInfo _pex;
        private List<(string, string)> _params;

        public SpecificTransaction(string moduleName, string methodName)
        {
            ModuleName = moduleName.ToLower();
            MethodName = methodName.ToLower();
            _params = new ();
        }

        public void Init(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
        {
            _dbAdapter = databaseAdapdable;
            _metadata = metadata;
        }

        public virtual void Execute(int transactionId)
        {
            var tableCall = new TableName
            {
                MethodName = _pex.MethodName,
                ModuleName = _pex.ModuleName
            };

            var nonce = new TableRow
            {
                RowIndex = 0,
                RowName = "Nonce",
                Value = new List<string> { _pex.Nonce.ToString() }
            };

            var blockHash = new TableRow
            {
                RowIndex = 0,
                RowName = "Block",
                Value = new List<string> { _pex.BlockHash.ToString() }
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

            var transactionSenderKey = new TableRow
            {
                RowIndex = 0,
                RowName = "Sender",
                Value = new List<string> { _sk }
            };

            var blocknumber = new TableRow
            {
                RowIndex = 0,
                RowName = "blocknumber",
                Value = new List<string> { _pex.BlockNumber.ToString() }
            };

            var tid = new TableRow
            {
                RowIndex = 1,
                RowName = "transactionindex",
                Value = new List<string> { transactionId.ToString() }
            };

            _dbAdapter.InsertIntoCall(tableCall, new List<TableRow> { blockHash, tid, status, blocknumber, nonce, signatureKey, transactionSenderKey });

        }
        public virtual bool Parse(BlockHash bh, SignedBlock sb, string extrinsic)
        {
            bool result = false;

            try
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
                _sk = senderPublic;
                var era = Scale.NextByte(ref parse);

                _signature = parse.Substring(0, 128);
                parse = parse.Substring(128);

                var err = Scale.DecodeCompactInteger(ref parse).Value;

                var nonce = Scale.DecodeCompactInteger(ref parse).Value;
                Scale.NextByte(ref parse);

                string moduleName = string.Empty, methodName = string.Empty;

                var moduleInd = Scale.NextByte(ref parse);
                var methodInd = Scale.NextByte(ref parse);

                // try parse transaction if catch exception that transaction is not supported
                var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;

                // TODO: parse params
                var args = _metadata.GetModuleAgrsByIds(moduleInd, methodInd);


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
                    ExtrinsicEra = era,
                    Params = parse,
                    Signature = _signature,
                    Unknown = result,
                    Status = err,
                    ParamsInfo = null
                };

                result = true;
            }
            catch (Exception)
            {
                return false;
            }


            return result;
        }

    }

    public struct DefaultTransactionParams
    {
        public bool IsDefault { get; set; }
        public string ModuleName { get; set; }
        public string MethodName { get; set; }
        public int ModuleIndex { get; set; }
        public int MethodIndex { get; set; }
    }

    internal class TransactionFactory
    {
        readonly Metadata _transactionSchema;
        readonly IDatabaseAdapdable _dbAdapter;
        private Dictionary<string, SpecificTransaction> _specificTransactions;
        private SpecificTransaction _defaultSpecificTransactions;

        internal TransactionFactory(Metadata metadata, IDatabaseAdapdable databaseAdapdable)
        {
            _transactionSchema = metadata;
            _dbAdapter = databaseAdapdable;
            _specificTransactions = new Dictionary<string, SpecificTransaction>();

            var addSpecTransaction = new Action<IEnumerable<SpecificTransaction>>((insts) => {
                foreach(var inst in insts)
                {
                    inst.Init(_dbAdapter, _transactionSchema);
                    var name = $"{inst.ModuleName}{inst.MethodName}";
                    _specificTransactions.Add(name, inst);
                }
            });

            _defaultSpecificTransactions = new UnknownTransaction("", "");

            addSpecTransaction(new List<SpecificTransaction>{

                 new ArtGalleryMint("ArtGalleryPallet", "mint"),
                 new ArtGalleryBurn("ArtGalleryPallet", "burn"),
                 new ArtGalleryTransfer("ArtGalleryPallet", "transfer"),
                 new ArtGalleryAppreciate("ArtGalleryPallet", "appreciate"),
                 new ArtGalleryToggleDisplay("ArtGalleryPallet", "toogle_display"),
                 new ArtGalleryReport("ArtGalleryPallet", "report"),
                 new ArtGalleryAcceptReport("ArtGalleryPallet", "accept_report"),
                 new ArtGalleryClearReport("ArtGalleryPallet", "clear_report"),
                 new ArtGallerySetCurator("ArtGalleryPallet", "set_curator"),
                _defaultSpecificTransactions

            });
        }

        internal DefaultTransactionParams GetModuleMethod(BlockHash bh, SignedBlock sb, string extrinsic)
        {
            // try parse transaction if catch exception that transaction is not supported
            try
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
                var sk = senderPublic;
                var era = Scale.NextByte(ref parse);

                var signature = parse.Substring(0, 128);
                parse = parse.Substring(128);

                var err = Scale.DecodeCompactInteger(ref parse).Value;

                var nonce = Scale.DecodeCompactInteger(ref parse).Value;
                Scale.NextByte(ref parse);
                string moduleName = string.Empty, methodName = string.Empty;

                var moduleInd = Scale.NextByte(ref parse);
                var methodInd = Scale.NextByte(ref parse);

                //var refIndex = Scale.DecodeCompactInteger(ref parse).Value.ToString();

                var paramsInfo = _transactionSchema.GetModuleCallNameByIds(moduleInd, methodInd);
                var r1 = _transactionSchema.GetModuleCallNameByIds(moduleInd, methodInd);
                moduleName = r1.Item1;
                methodName = r1.Item2;

                // parse params

                return new DefaultTransactionParams
                {
                    IsDefault = true,
                    MethodIndex = methodInd,
                    MethodName = methodName.ToLower(),
                    ModuleIndex = moduleInd,
                    ModuleName = moduleName.ToLower()
                };
            }
            catch (Exception)
            {
                return new DefaultTransactionParams
                {
                    IsDefault = false,
                    MethodIndex = 0,
                    MethodName = string.Empty,
                    ModuleIndex = 0,
                    ModuleName = string.Empty
                };
            }
        }

        internal SpecificTransaction GetTransactionSpecific(BlockHash bh, SignedBlock sb, string ex)
        {
            var info = GetModuleMethod(bh, sb, ex);

            if (!info.IsDefault)
            {
                return null;
            }            

            if (_specificTransactions.TryGetValue($"{info.ModuleName.ToLower()}{info.MethodName.ToLower()}",
                out SpecificTransaction transaction))
            {
                if (transaction.Parse(bh, sb, ex))
                    return transaction;
            }

            // parse as unknown transaction
            return _defaultSpecificTransactions.Parse(bh, sb, ex) ? _defaultSpecificTransactions : null;
        }
    }
}