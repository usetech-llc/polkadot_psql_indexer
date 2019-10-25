using Polkadot.Api;
using System;

namespace PolkaIndexer
{
    class Program
    {
        static void Main(string[] args)
        {
            Schema sch = new Schema();

            using (IApplication app = PolkaApi.GetAppication())
            {
                app.Connect("wss://kusama-rpc.polkadot.io/");

                var metadata = app.GetMetadata(null);
                
                sch.ParseMetadata(metadata);

                app.Disconnect();
            }


            Console.ReadLine();
        }
    }
}
