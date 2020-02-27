using Microsoft.AspNetCore.Mvc;
using Polkadot.Api;
using PolkaIndexer;
using PolkaIndexer.DAL;
using PolkaIndexer.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.DTO;
using WebApi.Tools;

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ExtrinsicController : ControllerBase
    {
        private readonly IWebApiDataAdapter _dataAdapter;
        private readonly MetadataSchema _metadataSchema;

        public ExtrinsicController(IWebApiDataAdapter dataAdapter, MetadataSchema metadataSchema)
        {
            _dataAdapter = dataAdapter;
            _metadataSchema = metadataSchema;
        }

        // GET extrinsic/{id}
        [HttpGet("{id?}")]
        public ActionResult<ExtrinsicBase> Get(string id)
        {
            var targetTables = _metadataSchema.DatabaseSchema.TableList.Where(i => i.Title.Contains("Call")).ToArray();

            if (!string.IsNullOrWhiteSpace(id))
            {
                string addId = "";
                Dictionary<TableSchema, IEnumerable<string>> data2;

                if (id.Length > 30)
                {
                    var ids = id.Split('-');
                    if (ids.Count() > 1)
                    {
                        id = ids.ElementAt(0);
                        addId = ids.ElementAt(1);
                    }

                    data2 = _dataAdapter.GetBlockByHash(targetTables, id, addId);
                    if (data2.Count == 0)
                    {
                        data2 = _dataAdapter.GetTransactionByHash(targetTables, id, addId);
                    }
                }
                else
                {
                    var ids = id.Split('-');

                    if (ids.Count() > 1)
                    {
                        id = ids.ElementAt(0);
                        addId = ids.ElementAt(1);
                    }

                    var tables = 

                    data2 = _dataAdapter.GetBlockByNumber(targetTables, id);
                   
                }

                var resultData = ResponseWrapper.Transaction(data2, addId);

                if (resultData == null)
                    return NotFound();

                var result2 = DTO.ExtrinsicResponseSingle.Default();
                result2.Data = resultData;

                return result2;
            }

            var result = DTO.ExtrinsicResponse.Default();
            var uriParams = UriParse.PolkadotParseUri(Request.QueryString.Value);

            var tf = new TransactionFilter
            {
                Module = UriParse.TryGetValue(uriParams, "filter", "module_id"),
                Method = UriParse.TryGetValue(uriParams, "filter", "call_id"),
                AddressFrom = UriParse.TryGetValue(uriParams, "filter", "address_from"),
                AddressTo = UriParse.TryGetValue(uriParams, "filter", "address_to")
            };

            var limit = Convert.ToInt32(UriParse.TryGetValue(uriParams, "page", "size"));
            var pnum = Convert.ToInt32(UriParse.TryGetValue(uriParams, "page", "number"));
            var data = _dataAdapter.GetFilteredTransactionList(tf, 0, 0);
            var list = ResponseWrapper.TransactionList(data);

            if (pnum > 1)
            {
                list = list.Skip((pnum - 1) * limit);
            }

            result.Data = list.Take(limit);

            return result;
        }
    }
}
