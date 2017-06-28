# koa2-vue2

> koa2 & vue2 project，一个vue2和koa2结合的nodejs web工程模板，提供跨域的RESTful API和前端静态资源处理，前后端分离开发，开发过程热更新， 全面替代spring mvc这样的java web工程

> clent端
- Vue2
- Vue-Router
- vuex
- axios
> server端
- koa2
- urllib
- koa-router
- koa-static
- koa-bodyparser
- koa-cors
- koa-json
- koa-logger
- koa2-history-api-fallback
- koa-onerror

* vue代码构建出来的目录作为Koa静态文件服务的目录
* 客户端和服务端走json形式的API
* 客户端http请求使用目前流行的axios
* 服务端使用urllib做http请求和转发
* 服务端代码热更新使用nodemon
* 使用cross-env解决跨平台设置NODE_ENV的问题
* pm2.json设置了生产环境产用的pm2做部署启动的脚本
* 客户端的界面参考https://github.com/walleeeee/daily-zhihu


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080。//Vue客户端调式模式，vue-cli生成
npm run dev

# build for production with minification。//Vue生产环境构建，vue-cli生成
npm run build

# 构建vue代码，并使用nodemon启动koa Server。vue代码构建出来的目录作为Koa静态文件服务的目录   nodemon用于修改文件热更新
npm run start

# 现网环境运行，使用pm2做集群
npm run prod

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test


```

``` bash
├── README.md
├── app.js      //Koa入口文件
├── build       //vue-cli生成，用于webpack监听、构建
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.test.conf.js
├── config      //vue-cli生成&自己加的一些配置文件
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── dist        //build后的文件夹
│   ├── index.html
│   └── static
│       ├── css
│       └── js
├── index.html   // vue-cli生成，用于容纳Vue组件的主html文件。单页应用就只有一个html
├── package.json
├── src
│   ├── client     //vue源码
│   │   ├── App.vue
│   │   ├── assets
│   │   ├── components
│   │   ├── main.js
│   │   └── router
│   └── server     //koa源码
│       ├── config
│       ├── controllers
│       └── routes
├── static
└── test
    └── unit

```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


