const debug = require('debug')('koa2:ioredis');
const Redis = require('ioredis');
const config = require('config');

const redis = new Redis(config.redis);

module.exports = () => async (ctx, next) => {
  ctx.redis = redis;
  debug('ctx.redis');
  await next();
};
