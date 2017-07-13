Koa.js 2 ioredis middleware
===========================

ioredis midleware for koa 2 application


[![NPM](https://nodei.co/npm/koa-2-ioredis.png)](https://npmjs.org/package/koa-2-ioredis)

[![npm version](https://badge.fury.io/js/koa-2-ioredis.svg)](https://badge.fury.io/js/koa-2-ioredis)
[![Build Status](https://travis-ci.org/evheniy/koa-2-ioredis.svg?branch=master)](https://travis-ci.org/evheniy/koa-2-ioredis)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/koa-2-ioredis/badge.svg?branch=master)](https://coveralls.io/github/evheniy/koa-2-ioredis?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/koa-2-ioredis/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/koa-2-ioredis/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/koa-2-ioredis)

[![Dependency Status](https://david-dm.org/evheniy/koa-2-ioredis.svg)](https://david-dm.org/evheniy/koa-2-ioredis)
[![devDependency Status](https://david-dm.org/evheniy/koa-2-ioredis/dev-status.svg)](https://david-dm.org/evheniy/koa-2-ioredis#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/koa-2-ioredis)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/koa-2-ioredis/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/koa-2-ioredis.svg)](https://github.com/evheniy/koa-2-ioredis/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/koa-2-ioredis.svg)](https://github.com/evheniy/koa-2-ioredis/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/koa-2-ioredis.svg)](https://github.com/evheniy/koa-2-ioredis/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/koa-2-ioredis.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S koa-2-ioredis
    
## How to use

### Config

config/default.json

    {
      "redis": {
        "host": "127.0.0.1",
        "port": 6379
      }
    }
    
### Middleware

app.js:

    const Koa = require('koa');
    const app = new Koa();
    const ioredis = require('koa-2-ioredis');
    
    app.use(ioredis());
    
    app.use(async (ctx, next) => {
    
        await ctx.redis.set(key, value);
        const data = await ctx.redis.get(key);
        
    });
 
### In module

    const redis = require('koa-2-ioredis/redis');
    
    redis.set('test', 'test');

### Debug

    DEBUG=koa2:ioredis npm start

### Links

* [koa2]()
* [ioredis](https://github.com/luin/ioredis)
* [config](https://www.npmjs.com/package/config)
