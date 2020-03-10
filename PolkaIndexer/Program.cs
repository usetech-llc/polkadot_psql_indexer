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
           var h =  Scale.EncodeCompactInteger(7479);
           var pk = AddressUtils.GetPublicKeyFromAddr("CoqysGbay3t3Q7hXgEmGJJquhYYpo8PqLwvW1WsUwR7KvXm");

            var t1 = "040b005039278c04";
            var v1 = Scale.DecodeCompactInteger(ref t1);
            var v2 = Scale.DecodeCompactInteger(ref t1);

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
                        var metadata = app.GetMetadata(null);
                        sch.ParseMetadata(metadata);
                        var si = app.GetSystemInfo();
                        sch.CommitToDb(postgres, si);

                        // Check current schema
                        indexer.CheckSystemInfo();

                        // Parse blocks
                        indexer.Scan();
                    } catch (System.ApplicationException appex) {
                        reconnect = appex.Message.Contains("Not connected");
                    } catch (Exception) {
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
