using System;
using System.Data.SqlClient;
using System.Configuration;
using System.Text;
using System.Data.Common;
using System.Collections.Generic;
using System.Reflection;
using System.Linq;
using System.ComponentModel;
using Polkadot.Data;
using System.Data;
using Polkadot.Api;
using PolkaIndexer.WebApi;

namespace PolkaIndexer.DAL
{
    public class Postgres : IDatabaseDataReader
    {
        private string _connectionString;
        private SubstrateUtils _substrateUtils;

        // db specific types
        enum DataType : byte
        {
            [Description("varchar(50)")]
            Address,

            [Description("int")]
            IntegerType,

            [Description("bigint")]
            BigInteger,

            [Description("varchar(25)")]
            WeightMultiplier,

            [Description("bigint")]
            BlockNumber,

            [Description("bigint")]
            Index,

            [Description("varchar(70)")]
            Hash,

            [Description("varchar(20)")]
            EventIndex,

            [Description("timestamp")]
            Moment,

            [Description("bit[1]")]
            BooleanType,

            [Description("int")]
            AccountIndex,

            [Description("varchar(40)")]
            Balance,

            [Description("int")]
            EraIndex,

            [Description("int")]
            SessionIndex,

            [Description("int")]
            EraPoints,

            [Description("varchar(40)")]
            SetId,

            [Description("int")]
            PropIndex,

            [Description("int")]
            ReferendumIndex,

            [Description("int")]
            ParaId,


            /*
            [Description("Forcing")]
            Forcing,

            [Description("Perbill")]
            Perbill,

            [Description("SetId")]
            SetId,

            [Description("PropIndex")]
            PropIndex,

            [Description("ReferendumIndex")]
            ReferendumIndex,

            [Description("VoteIndex")]
            VoteIndex,

            [Description("SetIndex")]
            SetIndex,

            [Description("ParaId")]
            ParaId,

            [Description("AuctionIndex")]
            AuctionIndex
            */
        }

        private Dictionary<SubstrateType, Enum> TypeMapping = new Dictionary<SubstrateType, Enum>()
        {
            { SubstrateType.Address, DataType.Address },
            { SubstrateType.U8, DataType.IntegerType },
            { SubstrateType.U32, DataType.IntegerType },
            { SubstrateType.U64, DataType.BigInteger },
            { SubstrateType.Index, DataType.Index },
            { SubstrateType.BlockNumber, DataType.BlockNumber },
            { SubstrateType.Hash, DataType.Hash },
            { SubstrateType.WeightMultiplier, DataType.WeightMultiplier },
            { SubstrateType.AccountIndex , DataType.AccountIndex },
            { SubstrateType.Balance , DataType.Balance },
            { SubstrateType.EraIndex , DataType.EraIndex },
            { SubstrateType.SetId , DataType.SetId },
            { SubstrateType.SessionIndex , DataType.SessionIndex },
            { SubstrateType.PropIndex , DataType.PropIndex },
            { SubstrateType.ReferendumIndex , DataType.ReferendumIndex },
            { SubstrateType.BooleanType , DataType.BooleanType },
            { SubstrateType.ParaId , DataType.ParaId },
        };

        public static string GetConnectionString()
        {
            //return ConfigurationManager.ConnectionStrings["Postgres"].ConnectionString;
            return "Host=localhost;Port=5432;Database=postgres;Username=postgres;Password=";
        }

        public Postgres(string connectionString)
        {
           _connectionString = connectionString;
            _substrateUtils = new SubstrateUtils(TypeMapping);
        }

        private List<List<object>> ExecuteReaderInsideConnection(string sqlText)
        {
            var result = new List<List<object>>();
            var con = new Npgsql.NpgsqlConnection(_connectionString);
            using (DbConnection db = con)
            {
                db.Open();

                var com = db.CreateCommand();

                com = db.CreateCommand();
                com.CommandText = sqlText;
                var reader = com.ExecuteReader();

                var dt = new DataTable();
                dt.Load(reader);
                var dataList = dt.Select().ToList();
                int index = 0;

                if (dataList.Count > 0)
                {
                    do
                    {
                        var row = new List<object>();

                        var itm = dataList.ElementAt(index).ItemArray;

                        for (var i = 0; i < itm.Count(); i++)
                        {
                            object rowValue;
                            rowValue = itm.ElementAt(i);
                            row.Add(rowValue);
                        }

                        result.Add(row);
                        index++;
                    }
                    while (index < dataList.Count);
                }

                db.Close();
            }

            return result;
        }

        private object ExecuteCommandInsideConnection(string sqlText)
        {
            object result;
            var con = new Npgsql.NpgsqlConnection(_connectionString);
            using (DbConnection db = con)
            {
                db.Open();

                try
                {
                    var com = db.CreateCommand();
                    com.CommandText = sqlText;
                    result = com.ExecuteScalar();
                }
                catch(Exception)
                {
                    result = null;
                }

                db.Close();
            }

            return result;
        }

        public void Commit(MetadataSchema schema, SystemInfo systemInfo)
        {
            var con = new Npgsql.NpgsqlConnection(_connectionString);
            using (DbConnection db = con)
            {
                db.Open();

                var dbName = schema.DatabaseSchema.Title;
                var com = db.CreateCommand();
                com.CommandText = $"CREATE DATABASE {dbName}";
                try
                {
                    var result = com.ExecuteNonQuery();
                    var dbText = DatabaseSqlString(schema.DatabaseSchema);

                    com = db.CreateCommand();
                    com.CommandText = dbText;
                    var reader = com.ExecuteReader();
                }
                catch(Exception e)
                {
                    // 42P04 - database already exist
                    if (!e.Data["SqlState"].Equals("42P04"))
                    {
                        throw e;
                    }
                }
                               
                WriteSystemInfo(systemInfo);

                //var tables = string.Join(",", schema.DatabaseSchema.TableList.Select(i => i.Title));

                db.Close();
            }
        }

        public string DatabaseSqlString(DatabaseSchema rowSchema)
        {
            var tableSqlString = string.Empty;
            foreach (var table in rowSchema.TableList)
            {
                tableSqlString += $"{TableSqlString(table)} {Environment.NewLine}";
            }

            return tableSqlString;
        }

        public string TableSqlString(TableSchema tableSchema)
        {
            string rowsString = string.Empty;
            if (tableSchema.Rows as MapRowSchema != null)
            {
                rowsString = MapRowSqlString((MapRowSchema)tableSchema.Rows);
            }
            else if (tableSchema.Rows as DoubleMapRowSchema != null)
            {
                rowsString = DoubleMapRowSqlString((DoubleMapRowSchema)tableSchema.Rows);
            }
            else if (tableSchema.Rows as CallRowSchema != null)
            {
                rowsString = CallRowSchemaSqlString((CallRowSchema)tableSchema.Rows);
            }

            return $"CREATE TABLE {tableSchema.Title} ( {Environment.NewLine} {rowsString} );";
        }

        public string MapRowSqlString(MapRowSchema rowSchema)
        {
            var blockNumberType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.BlockNumber);
            var skeyType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Key);
            var svalueType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Value);
            return $"id SERIAL PRIMARY KEY, key { skeyType }, {Environment.NewLine} value {svalueType}, {Environment.NewLine} blockNumber {blockNumberType}";
        }

        public string DoubleMapRowSqlString(DoubleMapRowSchema rowSchema)
        {
            var blockNumberType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.BlockNumber);
            var skeyType1 = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Key1);
            var skeyType2 = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Key2);
            var svalueType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Value);
            return $"id SERIAL PRIMARY KEY, key {skeyType1} {Environment.NewLine}, key2 {skeyType2}, {Environment.NewLine} value {svalueType}, {Environment.NewLine} blockNumber {blockNumberType}";
        }

        public string CallRowSchemaSqlString(CallRowSchema rowSchema)
        {
            var fi = rowSchema.Args.First();
            var svalueType = _substrateUtils.SubstrateTypeToStringDBType(fi.Value);

            var sqlString = $"{fi.Key} SERIAL PRIMARY KEY {Environment.NewLine}";

            for (var i = 1; i < rowSchema.Args.Count(); i++)
            {
                sqlString += $", \"{rowSchema.Args[i].Key}\" " +
                    $"{_substrateUtils.SubstrateTypeToStringDBType(rowSchema.Args[i].Value)} " +
                    $"{Environment.NewLine}";
            }

            if (rowSchema.UseBlockNumber)
            {
                var blockNumberType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.BlockNumber);
                sqlString += $", {Environment.NewLine} blockNumber {blockNumberType}";
            }

            return sqlString;
        }

        public bool CheckSystemInfo(SystemInfo systemInfo)
        {
            var con = new Npgsql.NpgsqlConnection(_connectionString);
            bool result = false;
            using (DbConnection db = con)
            {
                db.Open();

                var com = db.CreateCommand();
                com.CommandText = "SELECT * FROM Config";
                
                var reader = com.ExecuteReader();

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        result = reader.GetString(0).Equals(systemInfo.ChainId, StringComparison.OrdinalIgnoreCase) && 
                        reader.GetString(1).Equals(systemInfo.ChainName, StringComparison.OrdinalIgnoreCase) &&
                        reader.GetString(2).Equals(Convert.ToString(systemInfo.TokenDecimals), StringComparison.OrdinalIgnoreCase) &&
                        reader.GetString(3).Equals(systemInfo.TokenSymbol, StringComparison.OrdinalIgnoreCase) &&
                        reader.GetString(4).Equals(systemInfo.Version, StringComparison.OrdinalIgnoreCase);
                    }
                }

                db.Close();
            }

            return true;
        }

        public void WriteSystemInfo(SystemInfo systemInfo)
        {
            var con = new Npgsql.NpgsqlConnection(_connectionString);
            using (DbConnection db = con)
            {
                db.Open();

                try
                {
                    var com = db.CreateCommand();
                    com.CommandText = "CREATE TABLE Config ( ChainId varchar(70), ChainName varchar(70), TokenDecimals varchar(70), TokenSymbol varchar(70), Version varchar(70) )";
                    com.ExecuteNonQuery();
                }
                catch(Exception e)
                {
                    // 42P07 - table already exist
                    if (!e.Data["SqlState"].Equals("42P07"))
                    {
                        throw e;
                    }
                }

                try
                {
                    var com2 = db.CreateCommand();
                    com2.CommandText = "CREATE TABLE Settings ( Name varchar(70), Value varchar(70))";
                    com2.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    // 42P07 - table already exist
                    if (!e.Data["SqlState"].Equals("42P07"))
                    {
                        throw e;
                    }
                }

                var com3 = db.CreateCommand();
                com3.CommandText = $"INSERT INTO Config VALUES('{systemInfo.ChainId}', '{systemInfo.ChainName}', '{systemInfo.TokenDecimals}', '{systemInfo.TokenSymbol}', '{systemInfo.Version}')";
                var reader = com3.ExecuteReader();

                db.Close();
            }
        }

        public void InsertIntoStorage(TableName tableName, List<TableRow> values)
        {
            string fieldsRaw = string.Empty;
            foreach (var v in values)
            {
                fieldsRaw += $"{v.RowName} ,";
            }
            var fields = fieldsRaw.Substring(0, fieldsRaw.Length - 2);

            var dbValues = string.Empty;
            foreach (var v in values)
            {
                dbValues += $"{v.Value} ,";
            }
            var valuesString = dbValues.Substring(0, fieldsRaw.Length - 2);

            var sql = $"INSERT INTO {tableName.ModuleName}_{tableName.MethodName} ({fields}) VALUES ({valuesString})";
            ExecuteCommandInsideConnection(sql);
        }

        public void InsertIntoCall(TableName tableName, List<TableRow> values)
        {
            var getColumnsNamesSql = $"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '{tableName.ToString()}'";
            var names = ExecuteReaderInsideConnection(getColumnsNamesSql);

            string fieldsRaw = string.Empty;
            foreach (var v in values)
            {
                if (v.RowName == null)
                {
                    v.RowName = names[v.RowIndex][0].ToString();
                }

                fieldsRaw += $"\"{v.RowName}\", ";
            }
            var fields = fieldsRaw.Substring(0, fieldsRaw.Length - 2);

            var dbValues = string.Empty;
            foreach (var v in values)
            {
                dbValues += $"'{{{v.Value[0]}}}' ,";
            }
            var valuesString = dbValues.Substring(0, dbValues.Length - 2);

            var sql = $"INSERT INTO {tableName.ToString()} ({fields}) VALUES ({valuesString})";
            ExecuteCommandInsideConnection(sql);
        }

        public void InsertIntoStorage(TableName tableName, TableRow value)
        {
            var getColumnsNamesSql = $"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '{tableName.ModuleName}{tableName.MethodName}'";
            var names = ExecuteReaderInsideConnection(getColumnsNamesSql);

            string fieldsRaw = string.Empty;

            if (value.RowName == null)
            {
                value.RowName = names[value.RowIndex][0].ToString();
            }

            fieldsRaw += $"{value.RowName} ,";
            var fields = fieldsRaw.Substring(0, fieldsRaw.Length - 2);
            var dbValues = string.Empty;
            dbValues += $"'{{{value.Value[0]}}}' ,";
            var valuesString = dbValues.Substring(0, dbValues.Length - 2);

            var sql = $"INSERT INTO {tableName.ModuleName}{tableName.MethodName} ({fields}, blocknumber) VALUES ({valuesString}, '{{{value.BlockNumber}}}')";
            ExecuteCommandInsideConnection(sql);
        }

        public void InsertIntoCall(TableName tableName, TableRow values)
        {
            throw new NotImplementedException();
        }

        public string GetLastStorageValue(TableName tableName, TableRow values)
        {
            var sql = $"SELECT {values.RowName} FROM {tableName.ModuleName}{tableName.MethodName} WHERE blocknumber = '{{{values.BlockNumber}}}'";
            var result = ExecuteReaderInsideConnection(sql);

            if (result.Count > 0)
            {
                var itm = result.Last();
                var value = (string)itm.FirstOrDefault();

                // cut off square brackets
                value = value.Substring(1);
                value = value.Substring(0, value.Length - 1);

                return value;
            }

            return string.Empty;
        }

        public T GetSettingValue<T>(string v)
        {
            T result = default(T);
            var sql = $"SELECT value FROM Settings WHERE name = '{v}'";
            try
            {
                result = (T)ExecuteReaderInsideConnection(sql).FirstOrDefault().FirstOrDefault();
            }
            catch(Exception e)
            {
                // valiable does not exist
                if (e.Data.Count != 0)
                {
                    throw e;
                }

                //// 42703 - column does not exist
                //if (!e.Data["SqlState"].Equals("42P04"))
            }
            return result;
        }

        public void SetSettingValue(string name, string value)
        {
            var sql = $"UPDATE Settings SET value = '{value}' WHERE name = '{name}' RETURNING value";
            var success = ExecuteCommandInsideConnection(sql);

            // variable is not set
            if (success == null)
            {
                var sql2 = $"INSERT INTO Settings(name, value) VALUES ('{name}', '{value}')";
                ExecuteCommandInsideConnection(sql2);
            }
        }

        public bool CheckSystemInit()
        {
            int result = 0;
            var sql = "SELECT count(*) FROM pg_catalog.pg_tables where tablename = 'config' or tablename = 'settings'";
            result = Convert.ToInt32(ExecuteReaderInsideConnection(sql).FirstOrDefault().FirstOrDefault());

            return result == 2;
        }

        #region WebApi

        public Dictionary<string, IEnumerable<string>> GetBlockByNumber(TableSchema[] tablesSql, string number)
        {
            throw new NotImplementedException();
        }

        public Dictionary<string, IEnumerable<string>> GetBlockByHash(TableSchema[] tablesSql, string hash)
        {
            var extrinsicList = new Dictionary<string, IEnumerable<string>>();

            foreach (var t in tablesSql)
            {
                var sql = $"SELECT * FROM {t.Title}";

                if (t.Rows.GetRowNumber("Block") != -1)
                {
                    sql += $" WHERE \"Block\" @> ARRAY['{hash}']::varchar[]";
                }

                var result = ExecuteReaderInsideConnection(sql);
                var row = new List<string>();

                foreach (var r in result)
                {
                    foreach (var i in r)
                    {
                        Type valueType = i.GetType();
                        if (valueType.IsArray)
                        {
                            row.Add(((string[])i)[0].ToString());
                        }
                        else
                        {
                            row.Add(i.ToString());
                        }
                    }
                }


                if (row.Count > 0)
                    extrinsicList.Add(t.Title, row);
            }

            return extrinsicList;
        }

        public Dictionary<string, IEnumerable<string>> GetTransactionByHash(TableSchema[] tablesSql, string hash)
        {
            var extrinsicList = new Dictionary<string, IEnumerable<string>>();

            foreach (var t in tablesSql)
            {
                var sql = $"SELECT * FROM {t.Title}";

                if (t.Rows.GetRowNumber("Block") != -1)
                {
                    sql += $" WHERE \"Block\" @> ARRAY['{hash}']::varchar[]";
                }

                var result = ExecuteReaderInsideConnection(sql);
                var row = new List<string>();

                foreach (var r in result)
                {
                    foreach (var i in r)
                    {
                        Type valueType = i.GetType();
                        if (valueType.IsArray)
                        {
                            row.Add(((string[])i)[0].ToString());
                        }
                        else
                        {
                            row.Add(i.ToString());
                        }
                    }
                }


                if (row.Count > 0)
                    extrinsicList.Add(t.Title, row);
            }

            return extrinsicList;
        }

        public Dictionary<string, IEnumerable<string>> GetTransactionList(TableSchema[] tablesSql, string filterSql)
        {
            var extrinsicList = new Dictionary<string, IEnumerable<string>>();

            foreach (var t in tablesSql)
            {
                var sql = $"SELECT * FROM {t.Title}";

                if (filterSql.Count() > 0)
                {
                    sql += $" WHERE {filterSql}";
                }

                var result = ExecuteReaderInsideConnection(sql);
                var row = new List<string>();

                foreach (var r in result)
                {
                    foreach (var i in r)
                    {
                        Type valueType = i.GetType();
                        if (valueType.IsArray)
                        {
                            row.Add(((string[])i)[0].ToString());
                        }
                        else
                        {
                            row.Add(i.ToString());
                        }
                    }
                }


                if (row.Count > 0)
                    extrinsicList.Add(t.Title, row);
            }

            return extrinsicList;
        }

        #endregion
    }
}
