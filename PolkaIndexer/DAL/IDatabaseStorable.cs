using Polkadot.Api;
using Polkadot.Data;
using System.Collections.Generic;

namespace PolkaIndexer.DAL
{
    public interface IDatabaseDataReader : IDatabaseAdapdable
    {
        Block GetBlockByHash(string hash);
        Block GetBlockByNumber(string number);
        Extrinsic GetTransactionByHash(string hash);
        IEnumerable<string> GetTransactionList(string[] tablesSql, string filterSql);
    }

    public interface IDatabaseAdapdable
    {
        void Commit(MetadataSchema schema, SystemInfo systemInfo);
        bool CheckSystemInfo(SystemInfo systemInfo);
        bool CheckSystemInit();
        string MapRowSqlString(MapRowSchema rowSchema);
        string DoubleMapRowSqlString(DoubleMapRowSchema rowSchema);
        string TableSqlString(TableSchema rowSchema);
        string DatabaseSqlString(DatabaseSchema rowSchema);
        void InsertIntoStorage(TableName tableName, List<TableRow> values);
        void InsertIntoCall(TableName tableName, List<TableRow> values);
        void InsertIntoStorage(TableName tableName, TableRow values);
        void InsertIntoCall(TableName tableName, TableRow values);
        string GetLastStorageValue(TableName tableName, TableRow values);
        T GetSettingValue<T>(string v);
        void SetSettingValue(string name, string value);
    }

    public class TableName
    {
        public string ModuleName { get; set; }
        public string MethodName { get; set; }

        public override string ToString()
        {
            return $"{ModuleName}call{MethodName}".ToLower();
        }
    }

    public class TableRow
    {
        public string RowName { get; set; }
        public int RowIndex{ get; set; }
        public int BlockNumber{ get; set; }
        public List<string> Value { get; set; }
    }
}