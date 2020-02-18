using Polkadot.Data;
using PolkaIndexer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.DTO;

namespace WebApi.Tools
{
    //public class DbTransaction
    //{
    //    public string TableName { get; set; }
    //    public IEnumerable<string> Data { get; set; }
    //}

    public static class ResponseWrapper
    {
        public static ExtrinsicData Transaction(Dictionary<TableSchema, IEnumerable<string>> data, string addId = null)
        {
            var result = new List<ExtrinsicData>();

            foreach (var i in data)
            {
                var c = 1;
                int size = i.Key.Rows.Count();
                int index = 0;
                while (index < i.Value.Count())
                {
                    var rlist = i.Value.Skip((c - 1) * size).Take(size);

                    var rowIndex = i.Key.Rows.Count() - 2;
                    string transactionIndex = rlist.ElementAt(rowIndex);

                    if (!(!string.IsNullOrWhiteSpace(addId) && transactionIndex.Equals(addId)))
                    {
                        c++;
                        index += size;
                        continue;
                    }

                    string blockNumber;
                    if (i.Key.Rows.UseBlockNumber == true)
                    {
                        blockNumber = rlist.ElementAt(size - 1);
                    }
                    else
                    {
                        blockNumber = "0";
                    }

                    var block = "0";
                    rowIndex = i.Key.Rows.GetRowNumber("Block");
                    if (rowIndex != -1)
                    {
                        block = rlist.ElementAt(rowIndex);
                    }
                    else
                    {
                        block = $"{blockNumber}-{c}";
                    }

                    var prms = new List<IncludeExtrinsicAttributeParams>();

                    var rc = i.Key.Rows.Count();
                    if (rc > 8)
                    {
                        var schm = (CallRowSchema)i.Key.Rows;
                        for (var prI = 8; prI < schm.Args.Count; prI++)
                        {
                            var si = ((CallRowSchema)i.Key.Rows).Args[prI];
                            prms.Add(new IncludeExtrinsicAttributeParams
                            {
                                Name = si.Key,
                                Type = si.Value,
                                Value = rlist.ElementAt(prI),
                                ValueRaw = rlist.ElementAt(prI)
                            });
                        }
                    }
                    else
                    {
                        var item = (MapRowSchema)i.Key.Rows;
                        prms.Add(new IncludeExtrinsicAttributeParams
                        {
                            Name = item.Key,
                            Type = item.Value,
                            Value = rlist.ElementAt(0),
                            ValueRaw = rlist.ElementAt(0)
                        });
                    }


                    string nonce = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Nonce");
                    if (rowIndex != -1)
                    {
                        nonce = rlist.ElementAt(rowIndex);
                    }
                    else
                    {
                        block = $"{blockNumber}-{transactionIndex}";
                    }

                    string sig = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Signature");
                    if (rowIndex != -1)
                    {
                        sig = rlist.ElementAt(rowIndex);
                    }

                    result.Add(
                        new ExtrinsicData
                        {
                            Id = $"{blockNumber}-{c}",
                            Type = "extrinsic",
                            Attributes = new IncludeExtrinsicAttributeEx
                            {
                                ModuleId = i.Key.ModuleName,
                                CallId = i.Key.MethodName,
                                BlockId = blockNumber,
                                Signed = "1",
                                Unsigned = "0",
                                ExtrinsicHash = block,
                                ExtrinsicIdx = transactionIndex,
                                Success = "1",
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0",
                                Nonce = nonce,
                                Signature = sig,
                                Documentation = string.Join(' ', i.Key.Rows.Documentation),
                                Params = prms
                            }
                        }
                    );
                    c++;
                    index += size;
                }
            }

            return result.FirstOrDefault();
        }

        public static IEnumerable<ExtrinsicData> TransactionList(Dictionary<TableSchema, IEnumerable<string>> data)
        {
            var result = new List<ExtrinsicData>();

            var inhInd = 1;

            foreach (var i in data)
            {
                var c = 1;
                int size = i.Key.Rows.Count();
                int index = 0;
                while (index < i.Value.Count())
                {
                    var rlist = i.Value.Skip((c - 1) * size).Take(size);

                    var rowIndex = i.Key.Rows.Count() - 2;
                    string transactionIndex = rlist.ElementAt(rowIndex);

                    string blockNumber;
                    if (i.Key.Rows.UseBlockNumber == true)
                    {
                        blockNumber = rlist.ElementAt(size - 1);
                    }
                    else
                    {
                        blockNumber = "0";
                    }

                    var block = "0";
                    rowIndex = i.Key.Rows.GetRowNumber("Block");
                    var el = rowIndex != -1 ? rlist.ElementAt(rowIndex) : string.Empty;
                    if (!string.IsNullOrEmpty(el))
                    {
                        block = el;
                        if (block.Length > 10)
                        {
                            block = $"{block.Substring(2)}-{transactionIndex}";
                        }
                    }
                    else
                    {
                        block = $"{blockNumber}-{transactionIndex}";
                    }

                    string nonce = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Nonce");
                    if (rowIndex != -1)
                    {
                        nonce = rlist.ElementAt(rowIndex);
                    }

                    string sig = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Signature");
                    if (rowIndex != -1)
                    {
                        sig = rlist.ElementAt(rowIndex);
                    }

                    var doc = string.Empty;
                    if (i.Key.Rows.Documentation != null)
                        doc = string.Join(' ', i.Key.Rows.Documentation);

                    result.Add(
                        new ExtrinsicData
                        {
                            Id = $"{block}",
                            Type = "extrinsic",
                            Attributes = new IncludeExtrinsicAttribute
                            {
                                ModuleId = i.Key.ModuleName,
                                CallId = i.Key.MethodName,
                                BlockId = blockNumber,
                                Signed = "1",
                                Unsigned = "0",
                                ExtrinsicHash = block,
                                Success = "1",
                                ExtrinsicIdx = transactionIndex,
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0",
                                Nonce = nonce,
                                Signature = sig,
                                Documentation = doc
                            }
                        }
                    );
                    inhInd++;
                    c++;
                    index += size;
                }
            }

            return result.OrderByDescending(i => {
                int num = 0;
                int.TryParse(i.Attributes.BlockId, out num);
                return num;
            });
        }

        public static BlockData BlockData(Dictionary<TableSchema, IEnumerable<string>> data)
        {
            return new BlockData {
                Attributes = new BlockDataAttribute(),
                Type = "block"
            };

        }

        public static IEnumerable<ExtrinsicData> Block(Dictionary<TableSchema, IEnumerable<string>> data)
        {
            var result = new List<ExtrinsicData>();
            var num = 1;

            foreach (var i in data)
            {
                var c = 1;
                int size = i.Key.Rows.Count();
                int index = 0;
                while (index < i.Value.Count())
                {
                    var rlist = i.Value.Skip((c - 1) * size).Take(size);

                    var rowIndex = i.Key.Rows.Count() - 2;
                    string transactionIndex = rlist.ElementAt(rowIndex);

                    string blockNumber;
                    if (i.Key.Rows.UseBlockNumber == true)
                    {
                        blockNumber = rlist.ElementAt(size - 1);
                    }
                    else
                    {
                        blockNumber = "0";
                    }

                    var block = "0";
                    rowIndex = i.Key.Rows.GetRowNumber("Block");
                    if (rowIndex != -1 && string.IsNullOrWhiteSpace(transactionIndex))
                    {
                        block = rlist.ElementAt(rowIndex);
                    }
                    else
                    {
                        block = $"{blockNumber}-{transactionIndex}";
                    }

                    string nonce = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Nonce");
                    if (rowIndex != -1)
                    {
                        nonce = rlist.ElementAt(rowIndex);
                    }

                    string sig = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Signature");
                    if (rowIndex != -1)
                    {
                        sig = rlist.ElementAt(rowIndex);
                    }

                    result.Add(
                        new ExtrinsicData
                        {
                            Id = $"{block}",
                            Type = "extrinsic",
                            Attributes = new IncludeExtrinsicAttribute
                            {
                                ModuleId = i.Key.ModuleName,
                                CallId = i.Key.MethodName,
                                BlockId = blockNumber,
                                Signed = "1",
                                Unsigned = "0",
                                ExtrinsicHash = block,
                                ExtrinsicIdx = transactionIndex,
                                Success = "1",
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0",
                                Nonce = nonce,
                                Signature = sig,
                                Documentation = string.Join(' ', i.Key.Rows.Documentation)
                            }
                        }
                    );
                    c++;
                    index += size;
                }
                num++;
            }

            return result.OrderByDescending(i => Convert.ToInt32(i.Attributes.BlockId));
        }

        public static IEnumerable<IncludeExtrinsicAttribute> BlockIncluded(Dictionary<TableSchema, IEnumerable<string>> data)
        {
            var result = new List<IncludeExtrinsicAttribute>();
            var num = 1;

            foreach (var i in data)
            {
                var c = 1;
                int size = i.Key.Rows.Count();
                int index = 0;
                while (index < i.Value.Count())
                {
                    var rlist = i.Value.Skip((c - 1) * size).Take(size);

                    var rowIndex = i.Key.Rows.Count() - 2;
                    string transactionIndex = rlist.ElementAt(rowIndex);

                    string blockNumber = string.Empty;
                    if (i.Key.Rows.UseBlockNumber == true)
                    {
                        blockNumber = rlist.ElementAt(size - 1);
                    }

                    var block = "0";
                    rowIndex = i.Key.Rows.GetRowNumber("Block");
                    if (rowIndex != -1)
                    {
                        block = rlist.ElementAt(rowIndex);
                    }
                    else
                    {
                        block = $"{blockNumber}-{transactionIndex}";
                    }

                    string nonce = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Nonce");
                    if (rowIndex != -1)
                    {
                        nonce = rlist.ElementAt(rowIndex);
                    }

                    string sig = string.Empty;
                    rowIndex = i.Key.Rows.GetRowNumber("Signature");
                    if (rowIndex != -1)
                    {
                        sig = rlist.ElementAt(rowIndex);
                    }

                    result.Add(
                        new IncludeExtrinsicAttributeEx
                            {
                                ModuleId = i.Key.ModuleName,
                                CallId = i.Key.MethodName,
                                BlockId = blockNumber,
                                Signed = "1",
                                Unsigned = "0",
                                ExtrinsicHash = block,
                                ExtrinsicIdx = transactionIndex,
                                Success = "1",
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0",
                                Nonce = nonce,
                                Signature = sig,
                                Documentation = string.Join(' ', i.Key.Rows.Documentation)
                            }
                    );
                    c++;
                    index += size;
                }
                num++;
            }

            return result;
        }
    }
}
