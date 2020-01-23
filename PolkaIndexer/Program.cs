using Newtonsoft.Json.Linq;
using Polkadot.Api;
using Polkadot.Data;
using Polkadot.Utils;
using PolkaIndexer.DAL;
using System;
using System.Configuration;
using System.IO;
using System.Linq;
using Polkadot.DataFactory.Metadata;
using Polkadot.DataStructs;
using Polkadot.DataStructs.Metadata;
using Polkadot.src.DataStructs;
using System.Numerics;

namespace PolkaIndexer
{
    class DbgApp : IApplication
    {
        ProtocolParameters _protocolParams;
        MetadataBase _metadataCache;

        public int Connect(string node_url = "")
        {
            _protocolParams = new ProtocolParameters
            {
                Metadata = new Metadata(GetMetadata(null))
            };
            return 0;
        }

        public void Disconnect()
        {
        }

        public void Dispose()
        {
        }

        public BigInteger GetAccountNonce(Address address)
        {
            return 0;
        }

        public SignedBlock GetBlock(GetBlockParams param)
        {
            throw new NotImplementedException();
        }

        public BlockHash GetBlockHash(GetBlockHashParams param)
        {
            throw new NotImplementedException();
        }

        public BlockHeader GetBlockHeader(GetBlockParams param)
        {
            throw new NotImplementedException();
        }

        public string GetChildKeys(string childStorageKey, string storageKey)
        {
            throw new NotImplementedException();
        }

        public string GetChildStorage(string childStorageKey, string storageKey)
        {
            throw new NotImplementedException();
        }

        public string GetChildStorageHash(string childStorageKey, string storageKey)
        {
            throw new NotImplementedException();
        }

        public int GetChildStorageSize(string childStorageKey, string storageKey)
        {
            throw new NotImplementedException();
        }

        public FinalHead GetFinalizedHead()
        {
            throw new NotImplementedException();
        }

        public string GetKeys(string jsonPrm, string module, string variable)
        {
            throw new NotImplementedException();
        }

        public MetadataBase GetMetadata(GetMetadataParams param, bool force = false)
        {
            if (_metadataCache != null)
                return _metadataCache;

            var lines = File.ReadLines("metadataV8.txt").ToList();
            var MdString = string.Empty;
            foreach (var line in lines)
            {
                MdString += line;
            }
            var savedMd = JObject.Parse(MdString);
            var parser = new ParseMetadataV8();
            var metadata = parser.Parse(savedMd);

            _metadataCache = (MetadataBase)metadata;

            return _metadataCache;
        }

        public NetworkState GetNetworkState()
        {
            throw new NotImplementedException();
        }

        public RuntimeVersion GetRuntimeVersion(GetRuntimeVersionParams param)
        {
            throw new NotImplementedException();
        }

        public string GetStorage(string jsonPrm, string module, string variable)
        {
            throw new NotImplementedException();
        }

        public string GetStorageHash(string jsonPrm, string module, string variable)
        {
            throw new NotImplementedException();
        }

        public int GetStorageSize(string jsonPrm, string module, string variable)
        {
            throw new NotImplementedException();
        }

        public SystemHealth GetSystemHealth()
        {
            throw new NotImplementedException();
        }

        public SystemInfo GetSystemInfo()
        {
            return new SystemInfo
            {
                ChainId = "Kusama CC3",
                ChainName = "parity-polkadot",
                TokenDecimals = 12,
                TokenSymbol = "KSM",
                Version = "0.7.18"
            };
        }

        public PeersInfo GetSystemPeers()
        {
            throw new NotImplementedException();
        }

        public GenericExtrinsic[] PendingExtrinsics(int bufferSize)
        {
            throw new NotImplementedException();
        }

        public StorageItem[] QueryStorage(string key, string startHash, string stopHash, int itemCount)
        {
            throw new NotImplementedException();
        }

        public bool RemoveExtrinsic(string extrinsicHash)
        {
            throw new NotImplementedException();
        }

        public int SignAndSendTransfer(string sender, string privateKey, string recipient, BigInteger amount, Action<string> callback)
        {
            throw new NotImplementedException();
        }

        public int SubmitAndSubcribeExtrinsic(byte[] encodedMethodBytes, string module, string method, Address sender, string privateKey, Action<string> callback)
        {
            throw new NotImplementedException();
        }

        public string SubmitExtrinsic(byte[] encodedMethodBytes, string module, string method, Address sender, string privateKey)
        {
            throw new NotImplementedException();
        }

        public int SubscribeAccountNonce(Address address, Action<BigInteger> callback)
        {
            throw new NotImplementedException();
        }

        public int SubscribeBalance(string address, Action<BigInteger> callback)
        {
            throw new NotImplementedException();
        }

        public int SubscribeBlockNumber(Action<long> callback)
        {
            throw new NotImplementedException();
        }

        public int SubscribeEraAndSession(Action<Era, SessionOrEpoch> callback)
        {
            throw new NotImplementedException();
        }

        public int SubscribeRuntimeVersion(Action<RuntimeVersion> callback)
        {
            throw new NotImplementedException();
        }

        public int SubscribeStorage(string key, Action<string> callback)
        {
            throw new NotImplementedException();
        }

        public void UnsubscribeAccountNonce(int id)
        {
            throw new NotImplementedException();
        }

        public void UnsubscribeBalance(int id)
        {
            throw new NotImplementedException();
        }

        public void UnsubscribeBlockNumber(int id)
        {
            throw new NotImplementedException();
        }

        public void UnsubscribeEraAndSession(int id)
        {
            throw new NotImplementedException();
        }

        public void UnsubscribeRuntimeVersion(int id)
        {
            throw new NotImplementedException();
        }

        public void UnsubscribeStorage(int id)
        {
            throw new NotImplementedException();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            MetadataSchema sch = new MetadataSchema();

            using (IApplication app = PolkaApi.GetAppication())
            {
                string nodeUrl = ConfigurationManager.ConnectionStrings["Substrate"].NodeUrl;
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

                app.Disconnect();
            }

            Console.ReadLine();
        }
    }
}
