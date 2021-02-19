using Newtonsoft.Json.Linq;
using Polkadot.Data;
using Polkadot.DataFactory.Metadata;
using Polkadot.DataStructs.Metadata;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

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
            if (this is PlainRowSchema prs)
            {
                 return 0;
            }

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

    public class PlainRowSchema : RowSchema
    {
        public string Value { get; set; }
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

    public class EventRowSchema : RowSchema
    {
        public string Name { get; set; }
        public List<PlainRowSchema> Args { get; set; }

        public EventRowSchema()
        {
            Args = new List<PlainRowSchema>
            {
                new PlainRowSchema { Value = "Block" }
            };
        }

        public static int DefaultColumnsCount()
        {
            return 1;
        }
    }

    public class CallRowSchema : RowSchema
    {
        public List<MapRowSchema> Args { get; set; }

        public CallRowSchema()
        {
            Args = new List<MapRowSchema>
            {
                new MapRowSchema { Key = "Id", Value = "String", UseBlockNumber = false },
                new MapRowSchema { Key = "Hash", Value = "String", UseBlockNumber = false },
                new MapRowSchema { Key = "Sender", Value = "String", UseBlockNumber = false },
                new MapRowSchema { Key = "Status", Value = "String", UseBlockNumber = false },
                new MapRowSchema { Key = "Block", Value = "String", UseBlockNumber = false },
                new MapRowSchema { Key = "Timestamp", Value = "String", UseBlockNumber = false },
                new MapRowSchema { Key = "Nonce", Value = "String", UseBlockNumber = false },
                new MapRowSchema { Key = "Signature", Value = "String", UseBlockNumber = false }
            };
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

    public class EventParser
    {
        public string ModuleName { get; set; }
        public string EventName { get; set; }
        public List<string> ArgsMasks { get; set; }

        public EventParser()
        {
            ArgsMasks = new List<string>();
        }
    }

    public class DatabaseSchema
    {
        public string Title { get; set; }
        public List<TableSchema> TableList { get; set; }

        public List<EventParser> Eparsers { get; set; }

        public DatabaseSchema()
        {
            Eparsers = new List<EventParser>();
        }

        public static string GetStringFromTableName(TableName tableName)
        {
            return $"{tableName.ModuleName}_{tableName.MethodName}";
        }
    }

    public class MetadataSchema
    {
        public DatabaseSchema _databaseSchema { get; private set; }
        public TypeResolver _resolver { get; private set; }

        public MetadataSchema()
        {
            var runtimeTypes = (JObject.Parse(File.ReadAllText(".//runtime_types.json")));
            var baseTypes = JArray.Parse(File.ReadAllText(".//base_types.json"));
            _resolver = new TypeResolver(baseTypes.ToObject<IList<PrimitiveType>>(), runtimeTypes.Children());
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
            _databaseSchema = new DatabaseSchema { Title = $"Schema_{metadata.Version}" };
            _databaseSchema.TableList = new List<TableSchema>();
            var modules = metadata.GetModules();
            var moduleIndex = 0;

            foreach (var module in modules)
            {
                var moduleName = module.GetName();
                var storage = module.GetStorages();

                // Storage parse
                foreach (var storageItem in storage)
                {
                    var storageName = storageItem.GetName();
                    string tableName = $"{moduleName}{storageName}";
                    var ts = new TableSchema
                    {
                        Title = tableName,
                        ModuleName = moduleName,
                        MethodName = storageName
                    };
                    _databaseSchema.TableList.Add(ts);

                    storageItem.GetStorageType().Switch(
                        (type => {
                            ts.Rows = new PlainRowSchema { Value = type.Value };
                        }),
                        (type =>
                        {
                            ts.Rows = new MapRowSchema { Key = type.Key, Value = type.Value };
                        }),
                        (type =>
                        {
                            ts.Rows = new DoubleMapRowSchema { Key1 = type.Key1, Key2 = type.Key2, Value = type.Value };
                        })
                    );
                }

                var calls = module.GetCalls();
                foreach (var call in calls)
                {
                    var callName = call.GetName();
                    string tableName = $"{moduleName}{callName}";
                    var ts = new TableSchema
                    {
                        Title = tableName,
                        ModuleName = moduleName,
                        MethodName = callName
                    };
                    _databaseSchema.TableList.Add(ts);

                    ts.Rows = new CallRowSchema();
                    foreach (var arg in call.GetArguments())
                    {
                        var rvs = (CallRowSchema)ts.Rows;
                        rvs.Args.Add(new MapRowSchema { Key = arg.Name, Value = arg.Type, UseBlockNumber = false });
                    }
                }

                var events = module.GetEvents();
                var eventIndex = 0;
                foreach (var ev in events)
                {
                    var evName = ev.GetName();
                    string tableName = $"{moduleName}{evName}_event";
                    var ts = new TableSchema
                    {
                        Title = tableName,
                        ModuleName = moduleName,
                        MethodName = evName
                    };
                    _databaseSchema.TableList.Add(ts);

                    // add regex parser 
                    var parser = new EventParser();
                    parser.ModuleName = moduleName;
                    parser.EventName = evName;

                    var rvs = new EventRowSchema();
                    rvs.Name = evName;
                    parser.ArgsMasks.Add(moduleIndex.ToString("X2"));
                    parser.ArgsMasks.Add(eventIndex.ToString("X2"));
                    foreach (var arg in ev.GetArguments())
                    {
                        var rt = _resolver.Resolve(arg);
                        if (!rt.Any(t => t.Item2.Equals("error")))
                        { 
                            foreach(var t in rt)
                            {
                                var size = _resolver.GetTypeSize(t.Item2);
                                var sizeInt = int.Parse(size) * 2;

                                parser.ArgsMasks.Add(".{" + sizeInt.ToString() + "}");
                            }

                            rvs.Args.Add(new PlainRowSchema { Value = arg });
                        }
                    }
                    ts.Rows = rvs;
                    _databaseSchema.Eparsers.Add(parser);

                    eventIndex++;
                }
                moduleIndex++;
            }
        }

        public void CommitToDb<T>(T databaseStorable, SystemInfo systemInfo) where T : IDatabaseAdapdable
        {
            databaseStorable.Commit(this, systemInfo);
        }
    }
}
