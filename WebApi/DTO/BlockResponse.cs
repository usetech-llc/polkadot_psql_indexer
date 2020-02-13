
using System;
using System.Collections.Generic;

namespace WebApi.DTO
{
    public class BlockResponse
    {
        public Meta Meta { get; set; }
        public string[] Errors { get; set; }
        public BlockData Data { get; set; }
        public IEnumerable<ExtrinsicData> Includes { get; set; }
        public string Links { get; set; }

        public static BlockResponse Default()
        {
            return new BlockResponse { Meta = Meta.Default(), Errors = { }, Links = { } };
        }
    }
}
