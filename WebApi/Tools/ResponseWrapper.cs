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
        public static ExtrinsicData Transaction(Dictionary<TableSchema, IEnumerable<string>> data)
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
                    var rowIndex = i.Key.Rows.GetRowNumber("Block");
                    if (rowIndex != -1)
                    {
                        block = rlist.ElementAt(rowIndex);
                    }

                    var prms = new List<IncludeExtrinsicAttributeParams>();
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
                                Success = "1",
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0",
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

            foreach (var i in data)
            {
                var c = 1;
                int size = i.Key.Rows.Count();
                int index = 0;
                while (index < i.Value.Count())
                {
                    var rlist = i.Value.Skip((c - 1) * size).Take(size);
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
                    var rowIndex = i.Key.Rows.GetRowNumber("Block");
                    if (rowIndex != -1)
                    {
                        block = rlist.ElementAt(rowIndex).Substring(2);
                    }

                    result.Add(
                        new ExtrinsicData
                        {
                            Id = $"{blockNumber}-{c}",
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
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0"
                            }
                        }
                    );
                    c++;
                    index += size;
                }
            }

            return result.OrderByDescending(i => Convert.ToInt32(i.Attributes.BlockId));
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
                    var rowIndex = i.Key.Rows.GetRowNumber("Block");
                    if (rowIndex != -1)
                    {

                        block = rlist.ElementAt(rowIndex).Substring(2);
                    }

                    result.Add(
                        new ExtrinsicData
                        {
                            Id = $"{blockNumber}-{num}",
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
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0"
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
                    var rowIndex = i.Key.Rows.GetRowNumber("Block");
                    if (rowIndex != -1)
                    {
                        block = rlist.ElementAt(rowIndex);
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
                                Success = "1",
                                CodecError = "false",
                                SignedbyAddress = "1",
                                SignedbyIndex = "0",
                                //Params = new IncludeExtrinsicAttributeParams
                                //{
                                //    Name = i.Key.MethodName,
                                //    Type = "Type::T",
                                //    ValueRaw = "",
                                //    Value = "",
                                //}
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
