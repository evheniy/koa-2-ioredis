Koa.js 2 ioredis middleware
===========================

ioredis midleware for koa 2 application


[![npm version](https://badge.fury.io/js/koa-2-ioredis.svg)](https://badge.fury.io/js/koa-2-ioredis)
[![Build Status](https://travis-ci.org/evheniy/koa-2-ioredis.svg?branch=master)](https://travis-ci.org/evheniy/koa-2-ioredis)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/koa-2-ioredis/badge.svg?branch=master)](https://coveralls.io/github/evheniy/koa-2-ioredis?branch=master)


Installation
------------

    npm i -S koa-2-ioredis
    
Documentation
-------------

app.js:

    const Koa = require('koa');
    const app = new Koa();
    const ioredis = require('koa-2-ioredis');
    app.use(ioredis());
    
    app.use(async (ctx, next) => {
        await ctx.redis.set(key, value);
        const data = await ctx.redis.get(key);
    });
 
config/default.json:

    {
      "redis": {
        "port": 6379,
        "host": "127.0.0.1"
      }
    }

debug:

    DEBUG=koa2ioredis:* npm start

### Modules:
* [ioredis](https://github.com/luin/ioredis)
* [config](https://www.npmjs.com/package/config)

### Testing:
* [debug](https://www.npmjs.com/package/debug)
* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [chai-http](https://www.npmjs.com/package/chai-http)
* [sinon](http://sinonjs.org/)
* [eslint](http://eslint.org/)
* [istanbul](https://www.npmjs.com/package/istanbul)
* [nsp](https://www.npmjs.com/package/nsp)
