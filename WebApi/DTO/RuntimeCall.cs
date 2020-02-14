using System.Collections.Generic;

namespace WebApi.DTO
{
    public class RuntimeCall
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public CallAttribute Attributes { get; set; }

    public class CallAttribute
    {
            public string Id { get; set; }
            public string SpecVersion { get; set; }
            public string ModuleId { get; set; }
            public string CallId { get; set; }
            public string Index { get; set; }
            public string Prefix { get; set; }
            public string Name { get; set; }
            public string Lookup { get; set; }
            public string Documentation { get; set; }
            public string CountParams { get; set; }
        }
    }
}