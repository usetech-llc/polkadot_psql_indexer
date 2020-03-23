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
                bool reconnect = true;

                while (reconnect) {
                    try {
                        string nodeUrl = ConfigurationManager.AppSettings["Substrate"];
                        app.Connect(nodeUrl);

                        // Connect to db and check metadata version
                        var postgres = new Postgres(ConfigurationManager.ConnectionStrings["Postgres"].ConnectionString);
                        var indexer = new Indexer(app, postgres);

                        // Create or update current schema
                        var metadataBlockHash = ConfigurationManager.AppSettings["MetadataBlockHash"];
                        var startBlock = 0;
                        int.TryParse(ConfigurationManager.AppSettings["StartBlockNum"], out startBlock);

                        var metadata = app.GetMetadata(
                            metadataBlockHash.Length > 0 && metadataBlockHash.StartsWith("0x") ?
                                new Polkadot.Data.GetMetadataParams
                                {
                                    BlockHash = metadataBlockHash
                                } :
                                null, true);

                        //var metadata = app.GetMetadata(null);
                        sch.ParseMetadata(metadata);
                        var si = app.GetSystemInfo();
                        sch.CommitToDb(postgres, si);

                        // Check current schema
                        indexer.CheckSystemInfo();

                        // Parse blocks
                        indexer.Scan(startBlock);
                    } catch (System.ApplicationException appex) {
                        Console.WriteLine("ApplicationException caught: " + appex.Message);
                        reconnect = appex.Message.Contains("Not connected");
                    } catch (Exception e) {
                        Console.WriteLine("Exception caught: " + e.ToString());
                        if (e.Message.Contains("The operation has timed out"))
                            reconnect = true;
                        else
                            reconnect = false;
                    } finally {
                        app.Disconnect();
                    }
                }
            }

            Console.ReadLine();
        }
    }
}
