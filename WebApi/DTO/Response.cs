
using System;
using System.Collections.Generic;

namespace WebApi.DTO
{
    public class Meta
    {
        public string[] Authors { get; set; }

        public static Meta Default()
        {
            return new Meta
            {
                Authors = new string[]
                {
                    "WEB3SCAN",
                    "POLKASCAN",
                    "openAware BV"
                }
            };
        }
    }

    public class Response
    {
        public Meta Meta { get; set; }
        public string[] Errors { get; set; }
        public IEnumerable<ExtrinsicData> Data { get; set; }
        public string Links { get; set; }

        public static Response Default()
        {
            return new Response { Meta = Meta.Default(), Errors = { }, Links = { } };
        }
    }
}
