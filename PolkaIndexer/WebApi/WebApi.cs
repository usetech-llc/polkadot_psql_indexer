using System;
using System.Collections.Generic;
using System.Text;

namespace PolkaIndexer.WebApi
{
    public class TransactionFilter
    {
        public string AddressTo { get; set; }
        public string AddressFrom { get; set; }
        public string Module { get; set; }
        public string Method { get; set; }
    }
}
