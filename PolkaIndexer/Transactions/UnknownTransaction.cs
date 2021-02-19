using Polkadot.Data;

namespace PolkaIndexer
{
    internal class UnknownTransaction : SpecificTransaction
    {
        public UnknownTransaction(string module, string method): base(module, method)
        {
        }
    }
}