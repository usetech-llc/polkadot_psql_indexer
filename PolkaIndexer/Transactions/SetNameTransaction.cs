﻿using Polkadot.Data;
using PolkaIndexer.DAL;

namespace PolkaIndexer
{
    internal class SetNameTransaction : ISpecificTransaction
    {
        private IDatabaseAdapdable _dbAdapter;

        public SetNameTransaction(IDatabaseAdapdable dbAdapter)
        {
            _dbAdapter = dbAdapter;
        }

        public void Execute(int transactionId)
        {
            throw new System.NotImplementedException();
        }

        public void Execute()
        {
            throw new System.NotImplementedException();
        }

        public bool TryParse(string extrinsic)
        {
            throw new System.NotImplementedException();
        }

        public bool Parse(BlockHash bh, SignedBlock sb, string extrinsic)
        {
            throw new System.NotImplementedException();
        }
    }
}