# sof_es6_pm

Code samples for Stackoverflow question about process managers for ES6 modules.


# Build app
```
$ npm install
```

# Environment
```
$ node --version
v11.15.0
$ pm2 --version
4.2.1
```


# CommonJS app

## Start app using nodejs
```
$ node ./src/app_cjs.js
CommonJS app listening on port 3000!
```

## Start app using process manager `pm2`
```
$ pm2 start ./src/app_cjs.js
[PM2] Starting /home/alex/work/sof_es6_pm/src/app_cjs.js in fork_mode (1 instance)
[PM2] Done.
┌─────┬────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name       │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ app_cjs    │ default     │ 0.1.0   │ fork    │ 20713    │ 0s     │ 0    │ online    │ 0%       │ 22.7mb   │ alex     │ disabled │
└─────┴────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```



# ES6 app

## Start app using nodejs
```
$ node --experimental-modules ./src/app_es6.mjs
(node:20886) ExperimentalWarning: The ESM module loader is experimental.
ES6 app listening on port 3000!
Hello World! ES6 module is here.
```

## Start app using process manager `pm2`

There are `--experimental-modules` related issues in [pm2](https://github.com/Unitech/pm2/issues?utf8=%E2%9C%93&q=is%3Aissue+experimental-modules+).

```
$ pm2 start ./src/app_es6.mjs --node-args="--experimental-modules"
[PM2] Starting /home/alex/work/sof_es6_pm/src/app_es6.mjs in fork_mode (1 instance)
[PM2] Done.
...
$ pm2 log
...
1|app_es6  |     at Function.Module._load (internal/modules/cjs/loader.js:620:12)
1|app_es6  |     at createDynamicModule (internal/modules/esm/translators.js:81:15)
1|app_es6  |     at Object.meta.done (internal/modules/esm/create_dynamic_module.js:40:9)
1|app_es6  | (node:21202) ExperimentalWarning: The ESM module loader is experimental.
1|app_es6  | Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /home/alex/work/sof_es6_pm/src/app_es6.mjs
1|app_es6  |     at Object.Module._extensions..mjs (internal/modules/cjs/loader.js:862:11)
1|app_es6  |     at Module.load (internal/modules/cjs/loader.js:685:32)
1|app_es6  |     at Proxy.Module._load (internal/modules/cjs/loader.js:620:12)
1|app_es6  |     at Object.<anonymous> (/usr/lib/node_modules/pm2/lib/ProcessContainerFork.js:27:21)
1|app_es6  |     at Module._compile (internal/modules/cjs/loader.js:816:30)
1|app_es6  |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:827:10)
1|app_es6  |     at Module.load (internal/modules/cjs/loader.js:685:32)
1|app_es6  |     at Function.Module._load (internal/modules/cjs/loader.js:620:12)
1|app_es6  |     at createDynamicModule (internal/modules/esm/translators.js:81:15)
1|app_es6  |     at Object.meta.done (internal/modules/esm/create_dynamic_module.js:40:9)
```

## Question

How can I start ES6 application using `pm2` process manager or using any other process manager?