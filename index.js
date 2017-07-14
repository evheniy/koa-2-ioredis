const debug = require('debug')('koa2:ioredis');
const redis = require('./redis');

module.exports = () => async (ctx, next) => {
  ctx.redis = redis;
  debug('Redis created');
  await next();
};
