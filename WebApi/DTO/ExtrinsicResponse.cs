
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

    public class ExtrinsicResponseSingle : ExtrinsicBase
    {
        public Meta Meta { get; set; }
        public string[] Errors { get; set; }
        public virtual ExtrinsicData Data { get; set; }
        public string Links { get; set; }

        public static ExtrinsicResponseSingle Default()
        {
            return new ExtrinsicResponseSingle { Meta = Meta.Default(), Errors = { }, Links = { } };
        }
    }

    public class ExtrinsicBase
    {
    }

    public class ExtrinsicResponse : ExtrinsicBase
    {
        public Meta Meta { get; set; }
        public string[] Errors { get; set; }
        public virtual IEnumerable<ExtrinsicData> Data { get; set; }
        public string Links { get; set; }

        public static ExtrinsicResponse Default()
        {
            return new ExtrinsicResponse { Meta = Meta.Default(), Errors = { }, Links = { } };
        }
    }
}
