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
    public class InherentController : ControllerBase
    {
        private readonly IWebApiDataAdapter _dataAdapter;
        private readonly MetadataSchema _metadataSchema;

        public InherentController(IWebApiDataAdapter dataAdapter, MetadataSchema metadataSchema)
        {
            _dataAdapter = dataAdapter;
            _metadataSchema = metadataSchema;
        }

        // GET extrinsic/{id}
        [HttpGet("{id?}")]
        public ActionResult<ExtrinsicResponse> Get(string id)
        {
            if (string.IsNullOrWhiteSpace(id))
                return null;

            var result = DTO.ExtrinsicResponse.Default();
            var data2 = _dataAdapter.GetTransactionByHash(_metadataSchema.DatabaseSchema.TableList.ToArray(), id);
            var list2 = ResponseWrapper.TransactionList(data2);

            result.Data = list2;

            return result;
        }
    }
}
