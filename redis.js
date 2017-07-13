const debug = require('debug')('koa2:ioredis');
const Redis = require('ioredis');
const config = require('config');

debug(config.redis);

module.exports = new Redis(config.redis);
