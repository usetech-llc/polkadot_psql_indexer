using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.DTO
{
    public class Meta
    {
        public string[] Authors { get; set; }
    }

    public class Response
    {
        public Meta Meta { get; set; }
        public string[] Errors { get; set; }
        public ExtrinsicData Data { get; set; }
        public string Links { get; set; }
    }
}
