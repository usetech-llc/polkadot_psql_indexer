using Polkadot.DataStructs.Metadata;
using System;
using System.Collections.Generic;
using System.Text;

namespace PolkaIndexer
{
    public class ExtrinsicInfo
    {
        public int BlockNumber { get; set; }
        public string Raw { get; set; }
        public int ModuleIndex { get; set; }
        public int MethodIndex { get; set; }
        public long Nonce { get; set; }
        public int ExtrinsicEra { get; set; }
        public string MethodName { get; set; }
        public string ModuleName { get; set; }
        public string Description { get; set; }
        public string Params { get; set; }
        public bool Unknown { get; set; }
        public FunctionCallArgV8[] ParamsInfo { get; set; }
        public object BlockHash { get; set; }
    }
}
