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
    [Route("runtime-module")]
    [ApiController]
    public class RuntimeModuleController : ControllerBase
    {
        private IRuntime _runtime;
        public RuntimeModuleController(IRuntime runtime)
        {
            _runtime = runtime;
        }

        // GET extrinsic/{id}
        [HttpGet("{id?}")]
        public ActionResult<string> Get()
        {
            return _runtime.Get();
        }
    }
}
