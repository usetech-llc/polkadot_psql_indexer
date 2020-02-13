using System.Collections.Generic;

namespace WebApi.DTO
{
    public class Relationship
    {
        public string[] Transactions { get; set; }
        public Inherents Inherents { get; set; }
        public string[] Event { get; set; }
        public string[] Logs { get; set; }
    }

    public class Inherents
    {
        public IEnumerable<InherentsItem> Data { get; set; }
    }

    public class InherentsItem
    {
        public string Type { get; set; }
        public string Id { get; set; }
        public IncludeExtrinsicAttribute Attributes { get; set; }
    }
}