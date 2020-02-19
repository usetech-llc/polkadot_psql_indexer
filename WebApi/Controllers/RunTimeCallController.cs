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
    [Route("runtime-call")]
    [ApiController]
    public class RuntimeCallController : ControllerBase
    {
        private readonly MetadataSchema _sch;
        public RuntimeCallController(IRuntime runtime, MetadataSchema sch)
        {
            _sch = sch;
        }

        // GET runtime-call/{id}
        [HttpGet("{id?}")]
        public ActionResult<RuntimeCallResponse> Get()
        {
            //?&filter[latestRuntime]=true&filter[module_id]=system&page[size]=100
            var uriParams = UriParse.PolkadotParseUri(Request.QueryString.Value);

            var moduleId = UriParse.TryGetValue(uriParams, "filter", "module_id");

            var calls = _sch.DatabaseSchema.TableList
                .Where(t => t.ModuleName.Equals(moduleId, StringComparison.InvariantCultureIgnoreCase));

            var result = RuntimeCallResponse.Default();
            var lst = new List<RuntimeCall>();

            foreach (var call in calls)
            {
                // Detect if call method is callable
                if (call.MethodName != null && call.MethodName.Length > 0 && Char.IsUpper(call.MethodName[0]))
                    continue;

                var rc = new RuntimeCall
                {
                    Type = "runtimecall",
                    Id = $"1045-{call.ModuleName}-{call.MethodName}",
                    Attributes = new RuntimeCall.CallAttribute
                    {
                        SpecVersion = "1045",
                        CallId = call.MethodName,
                        ModuleId = call.ModuleName,
                        Name = call.MethodName
                    }
                };
                lst.Add(rc);
            }

            result.Data = lst;

            return result;
        }
    }
}
