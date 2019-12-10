using Polkadot.Api;
using PolkaIndexer.DAL;
using System;
using System.Configuration;

namespace PolkaIndexer
{
    class Program
    {
        static void Main(string[] args)
        {
            //var postgres1 = new Postgres(ConfigurationManager.ConnectionStrings["Postgres"].ConnectionString);
            //Schema sch1 = new Schema();
            //sch1.CommitToDb(postgres1);
            //return;


            MetadataSchema sch = new MetadataSchema();

            using (IApplication app = PolkaApi.GetAppication())
            {
                app.Connect("wss://kusama-rpc.polkadot.io/");

                var metadata = app.GetMetadata(null);

                sch.ParseMetadata(metadata);
                var si = app.GetSystemInfo();

                var postgres = new Postgres(ConfigurationManager.ConnectionStrings["Postgres"].ConnectionString);
                var indexer = new Indexer(si, postgres);

                sch.CommitToDb(postgres, si);

                indexer.Initialize();

                app.Disconnect();
            }


            Console.ReadLine();
        }
    }
}
