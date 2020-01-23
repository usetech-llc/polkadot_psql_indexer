# Manual Demos

Milestone 1 deliverables are marked by tag [milestone1](https://github.com/usetech-llc/polkadot_psql_indexer/tree/milestone1)

## Milestone 1

### Schema Adapter (Implemented in C#)

For convenience the docker-compose file is provided that brings up all needed components. It is possible to use `docker-compose up` command to deploy all components at once, but for deliverable clarity instructions below will bring up single components one by one.

#### Database container can be deployed

Open a teminal window for DB interaction and run commands to bring database up and connect to it. The `\d` command will display `Did not find any relations.` because the Indexer has not run yet, this is expected.

```
$ docker-compose build database
$ docker-compose up -d database
$ docker-compose run database bash
# psql --host=database --username=postgres dbname=postgres

...

postgres=# \d
Did not find any relations.
```

#### Run Indexer

If needed, configure database connection string and Substrate node URL in `PolkaIndexer/app.config` file. By default, no changes are needed. It is pre-configured to use local database deployed in previous step and Kusama network. 

Execute the following commands in a new terminal window. Indexer will be built and executed in docker container in the background so that it starts indexing and saving blockchain data in PostgreSQL database:

```
$ git submodule init
$ git submodule update
$ docker-compose build indexer
$ docker-compose up -d indexer
```

#### Database Tables are created for simple values...

Database Tables are created for simple values (non-vectors) in metadata and named after modules and storage fields with storage parameter being the primary key.

Switch to the terminal window that is connected to database docker image. Execute following:

```
postgres=# \d
```

In the output expect to see the tables that match metadata schema of the connected node. For exmaple, for the Kusama network:

```
                                List of relations
 Schema |                       Name                       |   Type   |  Owner   
--------+--------------------------------------------------+----------+----------
 public | attestationscallmore_attestations                | table    | postgres
 public | attestationscallmore_attestations_id_seq         | sequence | postgres
 public | attestationsdidupdate                            | table    | postgres
 public | attestationsparablockattestations                | table    | postgres
 public | attestationsparablockattestations_key_seq        | sequence | postgres
 public | attestationsrecentparablocks                     | table    | postgres
 public | attestationsrecentparablocks_key_seq             | sequence | postgres
 public | authoritydiscoverycall                           | table    | postgres
 public | authoritydiscoverycall_id_seq                    | sequence | postgres
 public | authorshipauthor                                 | table    | postgres
 public | authorshipcallset_uncles                         | table    | postgres
 public | authorshipcallset_uncles_id_seq                  | sequence | postgres
 public | authorshipdidsetuncles                           | table    | postgres
 public | authorshipuncles                                 | table    | postgres
 public | babeauthorities                                  | table    | postgres
 public | babecall                                         | table    | postgres
...
```

Example of a simple value is `balancesfreebalance` table. In order to see the schema of this table type:

```
postgres=# \d balancesfreebalance;
                                      Table "public.balancesfreebalance"
   Column    |         Type          | Collation | Nullable |                     Default                     
-------------+-----------------------+-----------+----------+-------------------------------------------------
 id          | integer               |           | not null | nextval('balancesfreebalance_id_seq'::regclass)
 key         | character varying(50) |           |          | 
 value       | character varying(40) |           |          | 
 blocknumber | character varying[]   |           |          | 
Indexes:
    "balancesfreebalance_pkey" PRIMARY KEY, btree (id)
```

#### Database Tables are created for vector values...

`balanceslocks` is an example of a vector value. Read the schema of this table:

```
postgres=# \d balanceslocks;
                                      Table "public.balanceslocks"
   Column    |         Type          | Collation | Nullable |                  Default                  
-------------+-----------------------+-----------+----------+-------------------------------------------
 id          | integer               |           | not null | nextval('balanceslocks_id_seq'::regclass)
 key         | character varying(50) |           |          | 
 value       | character varying[]   |           |          | 
 blocknumber | character varying[]   |           |          | 
Indexes:
    "balanceslocks_pkey" PRIMARY KEY, btree (id)
```

Note that schemas of simple and vector values are very similar. This is achieved by introducing an id field for each table, which allowed to avoid relying on `key` field as the record unique identifier.


#### Database tables are created for transactions for all calls in metadata

Transaction tables are named as <Module Name><"call"><Call Name>.

`balancescalltransfers` is an example of a transaction table. Read the schema of this table:

```
postgres=# \d balancescalltransfer;
                                     Table "public.balancescalltransfer"
   Column    |        Type         | Collation | Nullable |                     Default                      
-------------+---------------------+-----------+----------+--------------------------------------------------
 id          | integer             |           | not null | nextval('balancescalltransfer_id_seq'::regclass)
 Hash        | character varying[] |           |          | 
 Sender      | character varying[] |           |          | 
 Status      | character varying[] |           |          | 
 Block       | character varying[] |           |          | 
 Timestamp   | character varying[] |           |          | 
 Nonce       | character varying[] |           |          | 
 Signature   | character varying[] |           |          | 
 dest        | character varying[] |           |          | 
 value       | character varying[] |           |          | 
 blocknumber | character varying[] |           |          | 
Indexes:
    "balancescalltransfer_pkey" PRIMARY KEY, btree (id)
```

### Indexer

#### Block scanner monitors blocks and parses for subset of well-known transactions

All of the following tables are populated and can be checked with `SELECT * FROM ...;` command (replace `...` with table name). For convenience, we left a dot in the middle of the table name, which should be replaced with "call" when talbe is queries in the DB. For example, `balancescalltransfer` or `stakingcallbond`:

* Balances.transfer
* Balances.set_balance
* Balances.force_transfer
* Balances.transfer_keep_alive
* Staking.bond
* Staking.bond_extra
* Staking.unbond
* Staking.withdraw_unbonded
* Staking.validate
* Staking.nominate
* Staking.chill
* Staking.set_payee
* Staking.set_controller
* Staking.set_validator_count
* Staking.force_unstake
* Staking.cancel_deferred_slash
* Session.set_keys
* Democracy.propose
* Democracy.second
* Democracy.vote
* Democracy.cancel_referendum

To speed the process up, stop indexer, manually update lastParsedBlock in settings table to 700,000 and restart indexer:

In teminal window 2:
```
docker stop polkadot_ent_dotnet_indexer_1
```

In terminal window connected to DB:
```
postgres=# update settings set value=700000;
```

In teminal window 2:
```
docker start polkadot_ent_dotnet_indexer_1
```

Now wait 1-2 minutes while indexer picks up again and check the DB:
```
postgres=# select * from settings;
      name       | value  
-----------------+--------
 lastParsedBlock | 700023
(1 row)

postgres=# select * from balancesfreebalance;
 id | key |         value          | blocknumber 
----+-----+------------------------+-------------
  1 |     | {18446414073709551616} | {700050}
  2 |     | {330000000000000}      | {700050}
(2 rows)

postgres=# select * from balancesfreebalance;
 id | key |         value          | blocknumber 
----+-----+------------------------+-------------
  1 |     | {18446414073709551616} | {700050}
  2 |     | {330000000000000}      | {700050}
(2 rows)

postgres=# select * from balancescalltransfer;
 id | Hash |                               Sender                               | Status | Block | Timestamp | Nonce | Signature |                                dest 
                               |       value       | blocknumber 
----+------+--------------------------------------------------------------------+--------+-------+-----------+-------+-----------+-------------------------------------
-------------------------------+-------------------+-------------
  1 |      | {66ca5dce73446df7a6fd773daf7b50afe77bee87fc0299616ef6c1f88291a73d} |        |       |           |       |           | {1f02163bc259cee1ec02da15d0c580f9876
4583276c19ee6192cd45220a5a19f} | {330000000000000} | 
(1 row)
```


##### Nicks Module

Nicks module was probably removed from Kusama because we were unable to see it in Metadata (or any other networks), so these tables are not created and not populated:

* Nicks.set_name
* Nicks.clear_name

#### Block scanner is capable of receiving new blocks as well as scanning old blocks

First, check the `settings` table. It contains the `lastParsedBlock` entry, which is constantly increasing (run several queries and see). When the `lastParsedBlock` reaches the current block, scanning will slow down and continue as new blocks are validated and published on-chain. 

```
postgres=# select * from settings;
      name       | value 
-----------------+-------
 lastParsedBlock | 52
(1 row)

```

#### Data is Parsed

* Block is parsed and transactions are extracted
* Transactions are parsed
* Simple values tables are populated based on new and scanned blocks
* Vector values tables are populated based on new and scanned blocks
* Transaction tables are populated based on new and scanned blocks

See the `balancesfreebalance`, `balancescalltransfer`, and `stakingcallnominate` table rows. Data in the rows is structured by human meaningful fields and is not binary data that comes from Substrate, which means it was parsed.

```
postgres=# select * from balancesfreebalance;
...
postgres=# select * from balancescalltransfer;
...
postgres=# select * from stakingcallnominate;
...
```

#### Documentation for adding new transaction types for existing or new modules to be parsed for state changes

See [adding_transactions.md](adding_transactions.md)

#### End user documentation (installation/deployment and usage instructions)

This file.

#### Docker images for running deliverables for acceptance and in production

See instructions in the beginning of this file.
