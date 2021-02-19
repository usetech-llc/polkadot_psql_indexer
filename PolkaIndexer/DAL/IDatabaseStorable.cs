using Polkadot.Api;
using Polkadot.Data;
using System;
using System.Collections.Generic;

namespace PolkaIndexer.DAL
{
    public interface IDatabaseDataReader : IDatabaseAdapdable
    {
        Dictionary<string, IEnumerable<string>> GetBlockByHash(TableSchema[] tablesSql,string hash);
        Dictionary<string, IEnumerable<string>> GetBlockByNumber(TableSchema[] tablesSql, string number);
        Dictionary<string, IEnumerable<string>> GetTransactionByHash(TableSchema[] tablesSql, string hash);
        Dictionary<string, IEnumerable<string>> GetTransactionList(TableSchema[] tablesSql, string filterSql);
    }

    public interface IDatabaseAdapdable
    {
        void Commit(MetadataSchema schema, SystemInfo systemInfo);
        void InsertIntoEvent(EventParser ep, List<string> args, string blockHash, string blockNumber);
        bool CheckSystemInfo(SystemInfo systemInfo);
        bool CheckSystemInit();
        string PlainRowSqlString(PlainRowSchema rowSchema);
        string MapRowSqlString(MapRowSchema rowSchema);
        void UpdateStorage(TableName tokensStorage, string collectionId, string tokenId, List<TableRow> lists);
        string DoubleMapRowSqlString(DoubleMapRowSchema rowSchema);
        string TableSqlString(TableSchema rowSchema);
        string DatabaseSqlString(DatabaseSchema rowSchema);
        void InsertIntoStorage(TableName tableName, List<TableRow> values);
        void InsertIntoCall(TableName tableName, List<TableRow> values);
        string GetLastStorageValueByKey(TableName tableName, string key);
        void InsertIntoStorage(TableName tableName, TableRow values);
        void InsertIntoCall(TableName tableName, TableRow values);
        void DeleteFromStorageByDoubleKey(TableName tokensStorage, string key1, string key2);
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
            return $"{ModuleName}{MethodName}".ToLower();
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