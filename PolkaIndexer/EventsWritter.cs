using PolkaIndexer.DAL;
using System.Collections.Generic;

namespace PolkaIndexer
{
    internal class EventsWritter
    {
        private MetadataSchema _schema;
        private IDatabaseAdapdable _databaseAdapdable;

        public EventsWritter(MetadataSchema schema, IDatabaseAdapdable databaseAdapdable)
        {
            _schema = schema;
            _databaseAdapdable = databaseAdapdable;
        }

        public void Write(EventParser ep, List<string> args, string blockHash, string blockNumber)
        {
            _databaseAdapdable.InsertIntoEvent(ep, args, blockHash, blockNumber);

        }
    }
}