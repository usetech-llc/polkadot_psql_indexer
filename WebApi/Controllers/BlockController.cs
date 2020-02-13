using Microsoft.AspNetCore.Mvc;
using Polkadot.Api;
using Polkadot.Data;
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
    public class BlockController : ControllerBase
    {
        private readonly IWebApiDataAdapter _dataAdapter;
        private readonly MetadataSchema _metadataSchema;

        public BlockController(IWebApiDataAdapter dataAdapter, MetadataSchema metadataSchema)
        {
            _dataAdapter = dataAdapter;
            _metadataSchema = metadataSchema;
        }

        // GET extrinsic/{id}
        [HttpGet("{id?}")]
        public ActionResult<BlockResponse> Get(string id)
        {
            if (!UriParse.NotNullOrEmpty(id))
                return null;

            var data = (id.Length > 10 && id.Substring(0, 2).Equals("0x")) ? 
                _dataAdapter.GetBlockByHash(_metadataSchema.DatabaseSchema.TableList.ToArray(), id) : 
                _dataAdapter.GetBlockByNumber(_metadataSchema.DatabaseSchema.TableList.ToArray(), id);

            if (data == null)
                return null;

            var result = BlockResponse.Default();
            result.Data = ResponseWrapper.BlockData(data);
            result.Data.Id = id;
            result.Data.Attributes.Id = id;
            result.Includes = ResponseWrapper.Block(data);

            var inh = new Inherents();
            var lst = new List<InherentsItem>();

            //var g = ResponseWrapper.BlockIncluded(data);

            foreach (var item in result.Includes)
            {
                lst.Add(new InherentsItem {
                    Id = item.Id,
                    Type = "extrinsic",
                    Attributes = item.Attributes
                });
            }

            inh.Data = lst;

            result.Data.Relationships = new Relationship
            {
                Event = new string[] { },
                Logs = new string[] { },
                Inherents = inh,
                Transactions = new string[] { }
            };

            return result;
        }
    }
}
