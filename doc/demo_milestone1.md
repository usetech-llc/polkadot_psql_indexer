# Manual Demos

Milestone 1 deliverables are marked by tag [milestone1](https://github.com/usetech-llc/polkadot_ent_dotnet/tree/milestone1)

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

Example of a simple value is `balances.freeBalance` table. In order to see the schema of this table type:

```
postgres=# \d balancesfreebalance;
                                      Table "public.balancesfreebalance"
   Column    |         Type          | Collation | Nullable |                     Default                      
-------------+-----------------------+-----------+----------+--------------------------------------------------
 key         | integer               |           | not null | nextval('balancesfreebalance_key_seq'::regclass)
 value       | character varying(40) |           |          | 
 blocknumber | character varying[]   |           |          | 
Indexes:
    "balancesfreebalance_pkey" PRIMARY KEY, btree (key)
```

#### Database Tables are created for vector values...

`balances.locks` is an example of a vector value. Read the schema of this table:

```
TBD
```

#### Database tables are created for transactions for all calls in metadata

`balances.transfers` is an example of a transaction table. Read the schema of this table:

```
TBD
```

### Indexer

#### Block scanner monitors blocks and parses for subset of well-known transactions

All of the following tables are populated and can be checked with `SELECT * FROM ...;` command (replace `...` with table name):

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
* Nicks.set_name
* Nicks.clear_name

#### Block scanner is capable of receiving new blocks as well as scanning old blocks

Wait a few minutes while block scanner works. Then check the `Balances.transfer` table. You will see old blocks as well as newest blocks that were finalized after indexer was started.

```
TBD
```

#### Data is Parsed

* Block is parsed and transactions are extracted
* Transactions are parsed
* Simple values tables are populated based on new and scanned blocks
* Vector values tables are populated based on new and scanned blocks
* Transaction tables are populated based on new and scanned blocks

See the `Balances.freeBalance`, `Balances.locks`, `Balances.transfer`, and `Staking.nominate` table rows. Data in the rows is structured by human meaningful fields and is not binary data that comes from Substrate, which means it was parsed.

```
TBD
```

#### Documentation for adding new transaction types for existing or new modules to be parsed for state changes

See [adding_transactions.md](adding_transactions.md)

#### End user documentation (installation/deployment and usage instructions)

This file.

#### Docker images for running deliverables for acceptance and in production

See instructions in the beginning of this file.
