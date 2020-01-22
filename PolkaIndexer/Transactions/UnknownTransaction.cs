using Polkadot.Data;

namespace PolkaIndexer
{
    internal class UnknownTransaction : ISpecificTransaction
    {
        public void Execute()
        {
            // Empty method. That is unknown specific transaction 
        }

        public bool Parse(SignedBlock sb, string extrinsic)
        {
            return true;
        }
    }
}