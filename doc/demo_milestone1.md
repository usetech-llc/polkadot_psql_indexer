# Manual Demos

Milestone 1 deliverables are marked by tag [milestone1](https://github.com/usetech-llc/polkadot_ent_dotnet/tree/milestone1)

## Milestone 1

### Schema Adapter (Implemented in C#)

For convenience the docker-compose file is provided that brings up all needed components. It is possible to use `docker-compose up` command to deploy all components at once, but for deliverable clarity instructions below will bring up single components one by one.

#### Database container can be deployed

Open a teminal window for DB interaction and run commands to bring database up and connect to it. The `\d` command will display `Did not find any relations.` because the Indexer has not run yet, this is expected.
```
$ docker-compose up -d database
$ docker-compose run database bash
# psql --host=database --username=postgres dbname=postgres

...

postgres=# \d
Did not find any relations.
```

#### Run Indexer

```
$ git submodule init
$ git submodule update

```