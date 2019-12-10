using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using PolkaIndexer.DAL;
using System;

namespace PolkaIndexer
{
    class IndexerException : Exception
    {
        public IndexerException(string message) : base(message)
        {
        }
    }

    internal class Indexer
    {
        private SystemInfo _systemInfo;
        private IDatabaseAdapdable _databaseAdapdable;

        public Indexer(SystemInfo systemInfo, IDatabaseAdapdable databaseAdapdable)
        {
            this._systemInfo = systemInfo;
            this._databaseAdapdable = databaseAdapdable;
        }

        public void Initialize()
        {
            if (!_databaseAdapdable.CheckSystemInfo(_systemInfo))
            {
                throw new IndexerException("System info network and system info database are different");
            }
        }

        public void ParseBlock(BlockHash block)
        {
            
        }
    }
}