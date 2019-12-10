using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

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

        public string BlockNumber { get; set; }
        public bool UseBlockNumber { get; set; }
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
    }

    public class TableSchema
    {
        public string Title { get; set; }
        public RowSchema Rows { get; set; }
    }

    public class DatabaseSchema
    {
        public string Title { get; set; }
        public List<TableSchema> TableList { get; set; }
    }

    public class MetadataSchema
    {
        public DatabaseSchema DatabaseSchema { get; private set; }

        public MetadataSchema()
        {
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
                            var ts = new TableSchema { Title = tableName };
                            DatabaseSchema.TableList.Add(ts);

                            if (mv8.Module[i].Storage.Items[j].Type.Type == 0) // Plain
                            { }
                            else if (mv8.Module[i].Storage.Items[j].Type.Type == 1) // Map - converts to a tabe with one column key
                            {
                                string keyType = mv8.Module[i].Storage.Items[j].Type.Key1;
                                string valueType = mv8.Module[i].Storage.Items[j].Type.Value;

                                ts.Rows = new MapRowSchema { Key = keyType, Value = valueType };// ( keyType, valueType);

                                //Console.WriteLine($"CREATE TABLE {tableName}\n    key {keyType} PRIMARY KEY,\n    val {valueType}\n);\n");
                            }
                            else if (mv8.Module[i].Storage.Items[j].Type.Type == 4) // Double Map - converts to a table with primary key consisting of two columns
                            {
                                var key1 = mv8.Module[i].Storage.Items[j].Type.Key1;
                                var key2 = mv8.Module[i].Storage.Items[j].Type.Key2;
                                var value = mv8.Module[i].Storage.Items[j].Type.Value;
                                ts.Rows = new DoubleMapRowSchema { Key1 = key1, Key2 = key2, Value = value };

                                //Console.WriteLine($"Map key1: {mv8.Module[i].Storage.Items[j].Type.Key1}, Map key2: {mv8.Module[i].Storage.Items[j].Type.Key2}, Map value: {mv8.Module[i].Storage.Items[j].Type.Value}");
                            }
                        }
                    }

                    // Calls parse
                    for (int j = 0; j < mv8.Module[i].Call?.Length; j++)
                    {
                        var item = mv8.Module[i].Call[j];

                        string tableName = $"{moduleName}Call{item.Name}";
                        var ts = new TableSchema { Title = tableName };
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
