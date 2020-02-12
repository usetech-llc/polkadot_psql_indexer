using Microsoft.AspNetCore.Mvc;
using Polkadot.Api;
using PolkaIndexer;
using PolkaIndexer.DAL;
using PolkaIndexer.WebApi;
using System;
using System.Collections.Generic;
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
        public ActionResult<Response> Get()
        {
            var uriParams = UriParse.PolkadotParseUri(Request.QueryString.Value);

            var tf = new TransactionFilter
            {
                Module = UriParse.TryGetValue(uriParams, "filter", "module_id"),
                Method = UriParse.TryGetValue(uriParams, "filter", "call_id"),
                AddressFrom = UriParse.TryGetValue(uriParams, "filter", "address_from"),
                AddressTo = UriParse.TryGetValue(uriParams, "filter", "address_to")
            };

            var data = _dataAdapter.GetFilteredTransactionList(tf, 10, 0);
            var result = DTO.Response.Default();
            result.Data = ResponseWrapper.TransactionList(data);

            return result;
        }
    }
}
