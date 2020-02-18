using Newtonsoft.Json.Linq;
using Polkadot.Data;
using Polkadot.DataFactory.Metadata;
using Polkadot.DataStructs.Metadata;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace PolkaIndexer
{
    class SchemaException : Exception
    {
        public SchemaException(string message) : base(message)
        {
        }
    }

    public abstract class RowSchema 
    {
        public RowSchema()
        {
            UseBlockNumber = true;
        }

        public int GetRowNumber(string rowName)
        {
            if (this is MapRowSchema mrs)
            {
                if (mrs.Key.Equals(rowName))
                {
                    return 0;
                }
            }

            if (this is DoubleMapRowSchema dmrs)
            {
                if (dmrs.Key1.Equals(rowName))
                    return 0;

                if (dmrs.Key2.Equals(rowName))
                    return 1;
            }

            if (this is CallRowSchema crs)
            {
                int i = 0;
                foreach(var item in crs.Args)
                {
                    if (item.Key.Equals(rowName))
                    {
                        return i;
                    }
                    i++;
                }
            }

            return -1;
        }

        public int Count()
        {
            int add = this.UseBlockNumber ? 1 : 0;

            if (this is MapRowSchema mrs)
            {   
                return 4 + add;
            }

            if (this is DoubleMapRowSchema dmrs)
            {
                return 5 + add;
            }

            if (this is CallRowSchema crs)
            {
                return crs.Args.Count() + 1 + add;
            }

            return 0;
        }

        public string[] Documentation { get; set; }
        public string BlockNumber { get; set; }
        public string TransactionIndex { get; set; }
        public bool UseBlockNumber { get; set; }
        public bool AutoIncrement { get; set; }
    }

    public class MapRowSchema : RowSchema
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public class DoubleMapRowSchema : RowSchema
    {
        public string Key1 { get; set; }
        public string Key2 { get; set; }
        public string Value { get; set; }
    }

    public class CallRowSchema : RowSchema
    {
        public List<MapRowSchema> Args { get; set; }

        public CallRowSchema()
        {
            Args = new List<MapRowSchema>();
            Args.Add(new MapRowSchema { Key = "Id", Value = "String", UseBlockNumber = false });
            Args.Add(new MapRowSchema { Key = "Hash", Value = "String", UseBlockNumber = false });
            Args.Add(new MapRowSchema { Key = "Sender", Value = "String", UseBlockNumber = false });
            Args.Add(new MapRowSchema { Key = "Status", Value = "String", UseBlockNumber = false });
            Args.Add(new MapRowSchema { Key = "Block", Value = "String", UseBlockNumber = false });
            Args.Add(new MapRowSchema { Key = "Timestamp", Value = "String", UseBlockNumber = false });
            Args.Add(new MapRowSchema { Key = "Nonce", Value = "String", UseBlockNumber = false });
            Args.Add(new MapRowSchema { Key = "Signature", Value = "String", UseBlockNumber = false });
        }

        public static int DefaultColumnsCount()
        {
            return 8;
        }
    }

    public class TableSchema
    {
        public string Title { get; set; }
        public string ModuleName { get; set; }
        public string MethodName { get; set; }
        public RowSchema Rows { get; set; }
    }

    public class DatabaseSchema
    {
        public string Title { get; set; }
        public List<TableSchema> TableList { get; set; }

        public static string GetStringFromTableName(TableName tableName)
        {
            return $"{tableName.ModuleName}_{tableName.MethodName}";
        }
    }

    public class MetadataSchema
    {
        public DatabaseSchema DatabaseSchema { get; private set; }

        public MetadataSchema()
        {
        }

        public static MetadataSchema GetDbg()
        {
            var md = string.Join(' ', File.ReadAllLines("md.txt"));
            var s = JObject.Parse(md);

            var p = new ParseMetadataV8();
            var mdDbg = p.Parse(s);

             var res = new MetadataSchema();
            res.ParseMetadata(mdDbg);

            return res;
        }

        public void ParseMetadata(MetadataBase metadata)
        {
            DatabaseSchema = new DatabaseSchema { Title = $"Schema_{metadata.Version}" };
            DatabaseSchema.TableList = new List<TableSchema>();

            if (metadata.Version == 8)
            {
                var mv8 = (MetadataV8)metadata;
               // _database = new DatabaseSchema { dbSchema };

                for (int i = 0; i < mv8.Module.Length; i++)
                {
                    string moduleName = mv8.Module[i].Name;

                    // Storage parse
                    if (null != mv8.Module[i].Storage)
                    {
                        for (int j = 0; j < mv8.Module[i].Storage.Items.Length; j++)
                        {
                            string tableName = $"{moduleName}{mv8.Module[i].Storage.Items[j].Name}";
                            var ts = new TableSchema {
                                Title = tableName,
                                ModuleName = moduleName,
                                MethodName = mv8.Module[i].Storage.Items[j].Name
                            };
                            DatabaseSchema.TableList.Add(ts);

                            if (mv8.Module[i].Storage.Items[j].Type.Type == 0) // Plain
                            { }
                            else if (mv8.Module[i].Storage.Items[j].Type.Type == 1) // Map - converts to a tabe with one column key
                            {
                                string keyType = mv8.Module[i].Storage.Items[j].Type.Key1;
                                string valueType = mv8.Module[i].Storage.Items[j].Type.Value;

                                ts.Rows = new MapRowSchema { Key = keyType, Value = valueType };
                                ts.Rows.Documentation = mv8.Module[i].Storage.Items[j].Documentation;
                            }
                            else if (mv8.Module[i].Storage.Items[j].Type.Type == 4) // Double Map - converts to a table with primary key consisting of two columns
                            {
                                var key1 = mv8.Module[i].Storage.Items[j].Type.Key1;
                                var key2 = mv8.Module[i].Storage.Items[j].Type.Key2;
                                var value = mv8.Module[i].Storage.Items[j].Type.Value;
                                ts.Rows = new DoubleMapRowSchema { Key1 = key1, Key2 = key2, Value = value };
                                ts.Rows.Documentation = mv8.Module[i].Storage.Items[j].Documentation;
                            }
                        }
                    }

                    // Calls parse
                    for (int j = 0; j < mv8.Module[i].Call?.Length; j++)
                    {
                        var item = mv8.Module[i].Call[j];

                        string tableName = $"{moduleName}Call{item.Name}";
                        var ts = new TableSchema
                        {
                            Title = tableName,
                            ModuleName = moduleName,
                            MethodName = item.Name
                        };
                        DatabaseSchema.TableList.Add(ts);

                        ts.Rows = new CallRowSchema();

                        if (item?.Args != null)
                        {
                            foreach (var arg in item.Args)
                            {
                                var rvs = (CallRowSchema)ts.Rows;
                                if (!arg.Name.Equals("id", StringComparison.OrdinalIgnoreCase))
                                {
                                    rvs.Args.Add(new MapRowSchema { Key = arg.Name, Value = arg.Type, UseBlockNumber = false });
                                    rvs.Documentation = item.Documentation;
                                }
                            }
                        }
                    }
                }
            }
            else
            {
                throw new SchemaException($"Metadata version {metadata.Version} is not supported");
            }
        }

        public void CommitToDb<T>(T databaseStorable, SystemInfo systemInfo) where T : IDatabaseAdapdable
        {
            databaseStorable.Commit(this, systemInfo);
        }
    }
}
