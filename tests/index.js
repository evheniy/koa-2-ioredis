const chai = require('chai');
const chaiHttp = require('chai-http');
const Koa = require('koa');
const http = require('http');
const router = require('koa-router')();
const middleware = require('..');
const storage = require('../redis');

const expect = chai.expect;

chai.use(chaiHttp);
let app;

describe('Koa2 ioredis test', () => {
  beforeEach(() => {
    app = new Koa();
  });

  it('should test middleware', async () => {
    app.use(middleware());
    app.use(async (ctx, next) => {
      await ctx.redis.set('test', 'test');
      const data = await ctx.redis.get('test');
      expect(data).to.be.equal('test');
      await next();
    });
    router.get('/', (cnt) => {
      cnt.body = { message: 'Ok' };
    });
    app.use(router.routes());
    app.use(router.allowedMethods());

    return chai.request(http.createServer(app.callback()))
      .get('/')
      .send()
      .then(res => expect(res).to.have.status(200));
  });

  it('should test storage', async () => {
    await storage.set('test', 'test');

    const data = await storage.get('test');

    expect(data).to.be.equal('test');

    await storage.del('test');
  });
});
