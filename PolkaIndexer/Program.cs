using Polkadot.Api;
using Polkadot.Source.Utils;
using Polkadot.Utils;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text.RegularExpressions;
using System.Threading;

namespace PolkaIndexer
{
    class Program
    {
        static bool _exitRequested = false;
        const int _defaultParseDelay = 5000;

        static void Main(string[] args)
        {
            MetadataSchema sch = new MetadataSchema();

            using var app = PolkaApi.GetApplication();
            bool reconnect = true;
            AppDomain.CurrentDomain.ProcessExit += new EventHandler(CurrentDomain_ProcessExit);

            while (reconnect) {
                try {
                    string nodeUrl = ConfigurationManager.AppSettings["Substrate"];
                    var metadataBlockHash = ConfigurationManager.AppSettings["MetadataBlockHash"];
                    if (!int.TryParse(ConfigurationManager.AppSettings["ParseAttemptTimeoutMs"], out int parseDelay))
                        parseDelay = _defaultParseDelay;

                    _ = app.Connect(new ConnectionParameters(nodeUrl), metadataBlockHash);

                    // Connect to db and check metadata version
                    var postgres = new Postgres(ConfigurationManager.ConnectionStrings["Postgres"].ConnectionString);
                    var indexer = new Indexer(app, postgres, sch);

                    // Create or update current schema
                    _ = ulong.TryParse(ConfigurationManager.AppSettings["StartBlockNum"], out ulong startBlock);
                    var metadata = app.GetMetadata(null);

                    sch.ParseMetadata(metadata);
                    var si = app.GetSystemInfo();
                    sch.CommitToDb(postgres, si);

                    // Check current schema
                    indexer.CheckSystemInfo();

                    while(!_exitRequested)
                    {
                        // Parse blocks
                        if (!indexer.Scan(startBlock))
                        {
                            Thread.Sleep(parseDelay);
                        }
                    }

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
            

            Console.ReadLine();
        }

        static void CurrentDomain_ProcessExit(object sender, EventArgs e)
        {
            Console.WriteLine("Finishing...");
            _exitRequested = true;
        }
    }
}
