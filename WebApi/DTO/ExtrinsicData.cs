using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.DTO
{
    public class IncludeExtrinsicAttributeEx : IncludeExtrinsicAttribute
    {
        public IEnumerable<IncludeExtrinsicAttributeParams> Params { get; set; }
    }

    public class IncludeExtrinsicAttributeParams
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Value { get; set; }
        public string ValueRaw { get; set; }
    }

    public class IncludeExtrinsicAttribute
    {
        public string BlockId { get; set; }
        public string ExtrinsicIdx { get; set; }
        public string ExtrinsicHash { get; set; }
        public string ExtrinsicLength { get; set; }
        public string ExtrinsicVersion { get; set; }
        public string Signed { get; set; }
        public string Unsigned { get; set; }
        public string SignedbyAddress { get; set; }
        public string SignedbyIndex { get; set; }
        public string AddressLength { get; set; }
        public string Address { get; set; }
        public string AccountIndex { get; set; }
        public string AccountIdx { get; set; }
        public string Signature { get; set; }
        public string Nonce { get; set; }
        public string Era { get; set; }
        public string Call { get; set; }
        public string ModuleId { get; set; }
        public string CallId { get; set; }
        public string Success { get; set; }
        public string Error { get; set; }
        public string SpecVersionId { get; set; }
        public string CodecError { get; set; }
        public string Documentation { get; set; }
    }

    public class ExtrinsicData
    {
        public string Type { get; set; }
        public string Id { get; set; }
        public IncludeExtrinsicAttribute Attributes { get; set; }
    }
}
