using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.DTO
{
    public class FilteredTransactionRequest
    {
        public Filter Filter { get; set; }
        public Page Page { get; set; }
    }

    public class Page
    {
        public string Size { get; set; }
    }

    public class Filter
    {
        public string ModuleId { get; set; }
        public string CallId { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
    }
}
