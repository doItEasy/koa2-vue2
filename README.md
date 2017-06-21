# koa2-vue2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test

# 正式环境启动
npm run start

```


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



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
