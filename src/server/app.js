import Koa from 'koa'
import http from 'http'
import convert from 'koa-convert'
import logger from 'koa-logger'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser' //请求体JSON解析
import onerror from 'koa-onerror' //错误处理
import resource from 'koa-static' //静态资源托管
import json from 'koa-json'
import historyApiFallback from 'koa2-history-api-fallback'
import path from 'path'


import routes from './router.js'
import config from './config/config';


const app = new Koa();

onerror(app)

app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.use(convert(logger()));
app.use(bodyParser());
app.use(json());
app.use(resource(path.resolve('dist')));// 将webpack打包好的项目目录作为Koa静态文件服务的目录
app.use(cors());


// routes
app.use(routes.routes(), routes.allowedMethods());
app.use(historyApiFallback());
app.on('error', (error, ctx) => {
    console.log('服务端错误' + JSON.stringify(ctx.onerror))
    console.log('server error:' + error)
})

// app.listen(config.port,() => {
//     console.log('KoaServer is listening on 8888');
// });


http.createServer(app.callback()).listen(config.port).on('listening', function () {
    console.log('listening port:' + config.port)
})

export default app;







