# Manual Demos

Milestone 2 deliverables are marked by tag [milestone2](https://github.com/usetech-llc/polkadot_psql_indexer/tree/milestone2)

## Milestone 2

### UI (Implemented in JavaScript)

For convenience the docker-compose file is provided that brings up all needed components. Please use the following commands to clean the previous state and deploy all components at once:

```
$ docker stop $(docker ps -a -q)
$ docker system prune -a --force
$ docker volume rm $(docker volume ls -q)
$ git submodule init && git submodule update --recursive --remote
$ docker-compose up -d --build
```

#### Runs web application in a Docker container

See above

#### Search blocks by number and hash

In order to skip blocks that don't contain balance transactions, we implemented app.config parameter `StartBlockNum` and set it to 700,000 in the app.config file that is used in docker images. So, if the indexer is run in docker container using our docker-compose.yml, it will start indexing from block #700,000.

Note that the purpose of indexer is parsing transactions, not empty blocks, so if there were no transactions in a block (e.g. block #700100), it will not be found in the UI.

After containers have started, wait approximately 10 minutes to make sure enough blocks have been parsed by the indexer:

```
$ docker ps
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                                      NAMES
d1565168c2ad        polkadot_psql_indexer_ui        "docker-entrypoint.s…"   10 minutes ago      Up 10 minutes       0.0.0.0:4200->4200/tcp                     polkadot_psql_indexer_ui_1
18469853ba9c        polkadot_psql_indexer_indexer   "dotnet run"             10 minutes ago      Up 10 minutes                                                  polkadot_psql_indexer_indexer_1
d11233e9cabc        polkadot_psql_indexer_api       "dotnet WebApi.dll"      10 minutes ago      Up 10 minutes       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   polkadot_psql_indexer_api_1
788223bac0b0        postgres                        "docker-entrypoint.s…"   10 minutes ago      Up 10 minutes       0.0.0.0:5432->5432/tcp                     polkadot_psql_indexer_database_1
```

Open this page in your browser: [http://localhost:4200](http://localhost:4200) and enter block number #700626 in the search field.

Also, blocks can be searched by hash. For example, here is the hash of block #700626: 

```
0xc8e3e2f26b29e15126aa5eaa9a02d0cfa5c01291a491af786bc789caf074a98f
```

#### Search transactions by hash

Same field works for searching transactrions by ID. In the development process we figured that transaction hashes are not unique since they are calculated from an unsigned transaction. So, we implemented searching by transaction ID instead. Transaction ID is formed as `<block number>-<transaction index>`. For example:

```
700626-3
```

#### Search transactions by address / module / method

Navigate to Chain > Transactions in the menu, enter/select address, module or method, and click "Filter". 

Addresses are stored in the DB SCALE-encoded, as we receive them from the Substrate node. In order to get a valid list of addresses to search by, please use the following DB query: 

```
select "Sender", "dest" from balancescalltransfer;
```

... or just use one of these examples (for block numbers shortly arfer 700,000. Block displayed in the example is #700626):

```
postgres=# select "Sender", "dest" from balancescalltransfer limit 1;
                               Sender                               |                                dest                                
--------------------------------------------------------------------+--------------------------------------------------------------------
 {1dffe8e69261561da354b49f12f2c10a808aee14b5a2533902bae38c1cbb2cd1} | {56d15a35cf075ed48f31269e6431d2891da8c1305cb520bfbfb60493e9ef026e}
```

### Consensus Ensurer

Please see deliverables description is the Concensus Ensurer repository:
https://github.com/usetech-llc/api/tree/master/consensus