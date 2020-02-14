using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.DTO
{
    public class RuntimeCallResponse
    {
        public Meta Meta { get; set; }
        public string[] Errors { get; set; }
        public virtual IEnumerable<RuntimeCall> Data { get; set; }
        public string[] Links { get; set; }

        public static RuntimeCallResponse Default()
        {
            return new RuntimeCallResponse { Meta = Meta.Default(), Errors = new string[] { }, Links = new string[] { } };
        }
    }
}
