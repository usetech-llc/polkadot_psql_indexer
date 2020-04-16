# PSQL Indexer for Substrate Based Blockchain

*Note:* This project is work in progress, do not use in production.

## Summary

The PostgreSQL Database Indexer will mainly perform two functions:

- Read Metadata from Substrate based network and convert it to Database schema. (The Schema Adapter component)
- Decode blocks and write all state changes into Database accordingly to the schema. 

A Substrate Transaction can be seen as an insertion of a record into the database that triggers some Stored Procedures (that change the State). Every transaction is addressed to a certain Method in a certain Module. That Method accepts parameters, which can be seen as structured data or a database record. Metadata describes this data structure and can be converted to the schema.

In general, if we draw a parallel to relational databases, the one-to-one match is easy to see between Substrate and relational database terms.

## Running Indexer

### Requirements

* Ubuntu 18.04 or Windows 10
* Docker CE 19 or higher
* Running instance of PostgreSQL Database (can be deployed with provided container, see below)

If needed, configure database connection string and Substrate node URL in `PolkaIndexer/app.config` file. By default, no changes are needed. It is pre-configured to use local database deployed within the same docker-compose file. 

Execute the following commands in a new terminal window. Indexer will be built and executed in docker container in the background so that it starts indexing and saving blockchain data in PostgreSQL database:

```
$ git submodule init
$ git submodule update
$ docker-compose build
$ docker-compose up -d --build
```

### What's Next

After running Indexer and connecting it to the Database, the DB will be populated with tables matching the Substrate metadata, blocks will be analyzed and, as soon as transactions are found, they will be parsed and added to tables ready to be consumed by applications.

### UI

The UI application is also included and will run on port 4200. For a demo, open this page in your browser: [http://localhost:4200](http://localhost:4200) and enter block number #700626 in the search field after the indexer runs for approximately 10 minutes. This UI is copied from Polkascan and pointed to indexer DB instead of Polkascan APIs. It can be customized further for the application specifics.

#### UI Customization

UI is designed with Angular JS framework, version 9.0.1. You can check the version with this command:

```
ng version
```

To get started, first export following environment variables, mainly to point the UI to the WebAPI (which is also run with docker-compose in this repository):

```
env=docker
API_URL=//127.0.0.1:8080/api/v1/
NETWORK_NAME=Dev
NETWORK_TOKEN_SYMBOL=DOT
NETWORK_TOKEN_DECIMALS=15
```

Next, install dependencies and build:
```
cd polkascan-pre-explorer-gui
npm install
npm run ng build -- --configuration=${ENV_CONFIG} --output-path=dist
```

To run Angular application locally execute:
```
npm start
```

##### Adding custom modules

It is easy to add a new module to the indexer. The Indexer analyzes metadata that it receives from runtime and creates database schema that reflects this version of runtime, but it is impossible to guess what side effects happen when transactions are run, i.e. how the state changes. In order to inform the indexer about state changes that happen in your module when transactions are executed, follow this guide:

1. Create the class that implements interface ISpecificTransaction.

In Execute method write needed values using IDatabaseAdapdable interface.

In Parse method parse the given transaction and return true if this transaction is in fact the expected extrinsic. Return false, if the given transaction should not be handled by this parser (relates to another module or another method of your module).

Example: Parsing freeBalance transfer.

```csharp
internal class BalancesTransferTransaction : ISpecificTransaction
{
    private IDatabaseAdapdable _dbAdapter;
    private Metadata _metadata;
    private ExtrinsicInfo _pex;

    private string sk;
    private string rk;
    private string amount;

    public BalancesTransferTransaction(IDatabaseAdapdable databaseAdapdable, Metadata metadata)
    {
        _dbAdapter = databaseAdapdable;
        _metadata = metadata;
    }

    public void Execute()
    {
        // Set FREEBALANCE for participants
        // Add transfer value

        var freebal = new TableName
        {
            MethodName = "FreeBalance",
            ModuleName = "Balances"
        };

        var curValueRow = new TableRow
        {
            RowName = "value",
            BlockNumber = _pex.BlockNumber
        };

        ulong curValue = 0;
        var sval = _dbAdapter.GetLastStorageValue(freebal, curValueRow);
        if (!sval.Equals(""))
        {
            curValue = Convert.ToUInt64(sval);
        }

        // var curValue = Convert.ToUInt64(_dbAdapter.GetLastStorageValue(freebal, curValueRow));
        var intAmount = Convert.ToUInt64(amount);

        var part1 = new TableRow
        {
            RowName = "value",
            BlockNumber = _pex.BlockNumber,
            Value = new List<string> { (curValue - intAmount).ToString() }
        };

        var part2 = new TableRow
        {
            RowName = "value",
            BlockNumber = _pex.BlockNumber,
            Value = new List<string> { (curValue + intAmount).ToString() }
        };

        _dbAdapter.InsertIntoStorage(freebal, part1);
        _dbAdapter.InsertIntoStorage(freebal, part2);

        var transfer = new TableName
        {
            MethodName = "transfer",
            ModuleName = "Balances"
        };

        var transactionSenderKey = new TableRow
        {
            RowIndex = 0,
            RowName = "Sender",
            Value = new List<string> { sk }
        };

        var transactionDest = new TableRow
        {
            RowIndex = 0,
            RowName = "dest",
            Value = new List<string> { rk }
        };

        var transactionValue = new TableRow
        {
            RowIndex = 1,
            RowName = "value",
            Value = new List<string> { amount }
        };

        _dbAdapter.InsertIntoCall(transfer, new List<TableRow> { transactionDest, transactionValue, transactionSenderKey });
    }

    public bool Parse(SignedBlock sb, string extrinsic)
    {
        var parse = extrinsic;

        parse = parse.Substring(2);
        Scale.DecodeCompactInteger(ref parse);

        // nonce + delimiter
        var nonce = Scale.NextByte(ref parse);
        Scale.NextByte(ref parse);

        // 32 * 2
        var senderPublic = parse.Substring(0, 64);
        parse = parse.Substring(64);
        sk = senderPublic;

        parse = parse.Substring(68 * 2);
        Scale.NextByte(ref parse);

        bool result = false;
        string moduleName = string.Empty, methodName = string.Empty;

        //Scale.NextByte(ref parse);
        var moduleInd = Scale.NextByte(ref parse);
        var methodInd = Scale.NextByte(ref parse);
        Scale.NextByte(ref parse);

        FunctionCallArgV8[] paramsInfo = null;

        rk = parse.Substring(0, 64);
        parse = parse.Substring(64);
        amount = Scale.DecodeCompactInteger(ref parse).Value.ToString();

        // try parse transaction if catch exception that transaction is not supported
        try
        {
            paramsInfo = _metadata.GetModuleCallParamsByIds(moduleInd, methodInd);
            var r1 = _metadata.GetModuleCallNameByIds(moduleInd, methodInd);
            moduleName = r1.Item1;
            methodName = r1.Item2;
            if (moduleName.Equals("Balances", StringComparison.InvariantCultureIgnoreCase) &&
                methodName.Equals("transfer", StringComparison.InvariantCultureIgnoreCase))
                result = true;
        }
        catch (Exception e)
        {
            return false;
        }

        _pex = new ExtrinsicInfo
        {
            BlockNumber = (int)sb.Block.Header.Number,
            BlockHash = sb.Block.Header.ParentHash,
            Raw = extrinsic,
            ModuleIndex = moduleInd,
            ModuleName = moduleName,
            MethodIndex = methodInd,
            MethodName = methodName,
            Nonce = nonce,
            ExtrinsicEra = 0,
            Params = parse,
            Unknown = result,
            ParamsInfo = paramsInfo
        };

        return result;
    }
}
```

2. In TransactionFactory.cs file add the instance of new transaction in _specificTransactions list.

Example:

```csharp
    _specificTransactions = new List<ISpecificTransaction>
    {
...
        new BalancesTransferTransaction(_dbAdapter, _transactionSchema),
...
```

## Consensus Ensurer

Consensus Ensurer was developed as a part of this project, but in different repository. Currently the code exists in UseTech JS API fork here: https://github.com/usetech-llc/api/tree/master/consensus
