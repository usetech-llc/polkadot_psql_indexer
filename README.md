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

The UI application is also included and will run on port 4200. For a demo, open this page in your browser: [http://localhost:4200](http://localhost:4200) and enter block number #700626 in the search field after the indexer runs for approximately 10 minutes. This UI is copied from Polkascan and pointed to indexer DB instead of Polkascan APIs.

## Consensus Ensurer

Consensus Ensurer was developed as a part of this project, but in different repository. Currently the code exists in UseTech JS API fork here: https://github.com/usetech-llc/api/tree/master/consensus
