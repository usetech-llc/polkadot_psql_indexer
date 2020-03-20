using Polkadot.Api;
using Polkadot.Source.Utils;
using Polkadot.Utils;
using PolkaIndexer.DAL;
using System;
using System.Configuration;

namespace PolkaIndexer
{
    class Program
    {
        static void Main(string[] args)
        {
            MetadataSchema sch = new MetadataSchema();

            using (IApplication app = PolkaApi.GetAppication())
            {
                string nodeUrl = ConfigurationManager.AppSettings["Substrate"];
                app.Connect(nodeUrl);

                // Connect to db and check metadata version
                var postgres = new Postgres(ConfigurationManager.ConnectionStrings["Postgres"].ConnectionString);
                var indexer = new Indexer(app, postgres);

                // Create or update current schema
                var MetadataBlockHash = ConfigurationManager.AppSettings["MetadataBlockHash"];
                var metadata = app.GetMetadata(
                    MetadataBlockHash.Length > 0 && MetadataBlockHash.StartsWith("0x") ?
                        new Polkadot.Data.GetMetadataParams
                        {
                            BlockHash = MetadataBlockHash
                        } :
                        null);

                //var metadata = app.GetMetadata(null);
                sch.ParseMetadata(metadata);
                var si = app.GetSystemInfo();
                sch.CommitToDb(postgres, si);

                // Check current schema
                indexer.CheckSystemInfo();

                // Parse blocks
                indexer.Scan();

                app.Disconnect();
            }

            Console.ReadLine();
        }
    }
}
