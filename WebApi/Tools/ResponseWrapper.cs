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
        public static IEnumerable<ExtrinsicData> TransactionList(Dictionary<TableSchema, IEnumerable<string>> data)
        {
            var result = new List<ExtrinsicData>();
            var c = 1;

            foreach (var i in data)
            {
                string blockNumber;
                if (i.Key.Rows.UseBlockNumber == true)
                {
                    blockNumber = i.Value.ElementAt(i.Value.Count() - 1);
                }
                else
                {
                    blockNumber = "0";
                }

                //var rowIndex = i.Key.Rows.GetRowNumber("blocknumber");
                //if (rowIndex == -1)
                //    continue;

                result.Add(
                    new ExtrinsicData
                    {
                        Id = $"{blockNumber}-{i.Value.Count()}",
                        Type = "",
                        Attributes = new ExtrinsicDataAttribute
                        {
                            ModuleId = i.Key.ModuleName,
                            CallId = i.Key.MethodName,
                            BlockId = blockNumber,
                            Signed = "1",
                            Unsigned = "0",
                            ExtrinsicHash = ""
                        }
                    }
                );
                c++;
            }

            return result;
        }
    }
}
