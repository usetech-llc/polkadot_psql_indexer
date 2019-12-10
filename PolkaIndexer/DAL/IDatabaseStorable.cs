using Polkadot.Data;

namespace PolkaIndexer.DAL
{
    public interface IDatabaseAdapdable
    {
        void Commit(MetadataSchema schema, SystemInfo systemInfo);
        bool CheckSystemInfo(SystemInfo systemInfo);
        string MapRowSqlString(MapRowSchema rowSchema);
        string DoubleMapRowSqlString(DoubleMapRowSchema rowSchema);
        string TableSqlString(TableSchema rowSchema);
        string DatabaseSqlString(DatabaseSchema rowSchema);
    }
}