# Manual Demos

Milestone 2 deliverables are marked by tag [milestone2](https://github.com/usetech-llc/polkadot_psql_indexer/tree/milestone2)

## Milestone 2

### UI (Implemented in JavaScript)

For convenience the docker-compose file is provided that brings up all needed components. It is possible to use `docker-compose up -d` command to deploy all components at once, but for deliverable clarity instructions below will bring up single components one by one.

#### Runs web application in a Docker container

See above

#### Search blocks by number and hash

Open this page in your browser: [https://localhost:4200](https://localhost:4200) and enter block number in the search field (make sure this block has been parsed by the indexer).

Also, blocks can be searched by hash. For example, here is the hash of block #100: 

```
0x46781d9a3350a0e02dbea4b5e7aee7c139331a65b2cd736bb45a824c2f3ffd1a
```

#### Search transactions by hash

Same field works for searching transactrions by ID. In the development process we figured that transaction hashes are not unique since they are calculated from an unsigned transaction. So, we implemented searching by transaction ID instead. Transaction ID is formed as `<block number>-<transaction index>`. For example:

```
100-0
```

#### Search transactions by address / module / method

Navigate to Chain > Transactions in the menu, enter/select address, module or method, and click "Filter". 

Addresses are stored in the DB SCALE-encoded, as we receive them from the Substrate node. In order to get a valid list of addresses to search by, please use the following DB query: 

```
select "Sender", "dest" from balancescalltransfer;
```

... or just use one of these examples (for block numbers shortly arfer 700,000):

```
postgres=# select "Sender", "dest" from balancescalltransfer;
                               Sender                               |                                dest                                
--------------------------------------------------------------------+--------------------------------------------------------------------
 {66ca5dce73446df7a6fd773daf7b50afe77bee87fc0299616ef6c1f88291a73d} | {1f02163bc259cee1ec02da15d0c580f98764583276c19ee6192cd45220a5a19f}
 {1dffe8e69261561da354b49f12f2c10a808aee14b5a2533902bae38c1cbb2cd1} | {56d15a35cf075ed48f31269e6431d2891da8c1305cb520bfbfb60493e9ef026e}
 {586cb27c291c813ce74e86a60dad270609abf2fc8bee107e44a80ac00225c409} | {40cd7f823cc2206c600876fefff737ae4926165d3e565b3dfb5f926f1b94956e}
 {9efbf480d958cdfcb501e7c573026da710fbc824f4fa05501fa36cfad8dfcd50} | {2e6643fd353db9aaa037ed4fcf1a5e173722375bdb70e400187b26722482ca23}
 {9cb0d4ddd32f9332dac7059de238b8e489afb55502d1756d7f50b78b58e20c70} | {4ae9eeacbc9d25e40b892b824dd9bb352841374d6f022479a5b507e79eae9e1f}
 {9cb0d4ddd32f9332dac7059de238b8e489afb55502d1756d7f50b78b58e20c70} | {4ae9eeacbc9d25e40b892b824dd9bb352841374d6f022479a5b507e79eae9e1f}
 {92042edb03c841c0d0d09f1dc08d5013d394ec15fa07939124be357be5f570d3} | {d7eb218814ce2a71016578ed55f623ae4ef884295b2bf216432425ff7f363702}
 {92042edb03c841c0d0d09f1dc08d5013d394ec15fa07939124be357be5f570d3} | {4d58a9fc7c2894b0f065cc6403246fb7970c2448ecd0e385e0e172c6f3d3eb44}
 {92042edb03c841c0d0d09f1dc08d5013d394ec15fa07939124be357be5f570d3} | {e64051709e527115263ecaa5e177000da62e8dfb88314fd9d3bcf0bb9bb1cfd7}
 {92042edb03c841c0d0d09f1dc08d5013d394ec15fa07939124be357be5f570d3} | {d2ea03d13a7978bc590bb7f6ccb6489c11b70e97cc1718f2dc7d405b3e2f5bcd}
 {92042edb03c841c0d0d09f1dc08d5013d394ec15fa07939124be357be5f570d3} | {374f9e25c759cad22b2e4ab1607145a2c0eb111b23d82568986e4167a16f5ae8}
 {92042edb03c841c0d0d09f1dc08d5013d394ec15fa07939124be357be5f570d3} | {ed985cc278af131ba0b4268365a4d003495d096194e95a76bb5b767856b9287a}
 {586cb27c291c813ce74e86a60dad270609abf2fc8bee107e44a80ac00225c409} | {2f9d20a310d47f44f6732252f5bfaab4ee8810fdc592516ce9f689448b045e5e}
```

