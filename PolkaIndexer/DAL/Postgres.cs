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

namespace PolkaIndexer.DAL
{
    public class Postgres : IDatabaseAdapdable
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

        public Postgres(string connectionString)
        {
           _connectionString = connectionString;
            _substrateUtils = new SubstrateUtils(TypeMapping);
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
                }
                catch(Exception e)
                {
                    var test1 = !e.Data["SqlState"].Equals("42P04");
                    if (!e.Data["SqlState"].Equals("42P04"))
                    {
                        throw e;
                    }
                }

                var dbText = DatabaseSqlString(schema.DatabaseSchema);

                com = db.CreateCommand();
                com.CommandText = dbText;
                var reader = com.ExecuteReader();

                WriteSystemInfo(systemInfo);

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
            return $"key {skeyType} PRIMARY KEY, {Environment.NewLine} value {svalueType}, {Environment.NewLine} blockNumber {blockNumberType}";
        }

        public string DoubleMapRowSqlString(DoubleMapRowSchema rowSchema)
        {
            var blockNumberType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.BlockNumber);
            var skeyType1 = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Key1);
            var skeyType2 = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Key2);
            var svalueType = _substrateUtils.SubstrateTypeToStringDBType(rowSchema.Value);
            return $"key {skeyType1} PRIMARY KEY {Environment.NewLine}, key2 {skeyType2}, {Environment.NewLine} value {svalueType}, {Environment.NewLine} blockNumber {blockNumberType}";
        }

        public string CallRowSchemaSqlString(CallRowSchema rowSchema)
        {
            var fi = rowSchema.Args.First();
            var svalueType = _substrateUtils.SubstrateTypeToStringDBType(fi.Value);

            var sqlString = $"{fi.Key} {svalueType} PRIMARY KEY {Environment.NewLine}";

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

                var com = db.CreateCommand();
                com.CommandText = "CREATE TABLE Config ( ChainId varchar(70), ChainName varchar(70), TokenDecimals varchar(70), TokenSymbol varchar(70), Version varchar(70) )";
                com.ExecuteNonQuery();

                com = db.CreateCommand();
                com.CommandText = $"INSERT INTO Config VALUES('{systemInfo.ChainId}', '{systemInfo.ChainName}', '{systemInfo.TokenDecimals}', '{systemInfo.TokenSymbol}', '{systemInfo.Version}')";
                var reader = com.ExecuteReader();

                db.Close();
            }
        }
    }
}
