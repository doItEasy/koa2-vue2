const api ={};
const url = require("url");
var urllib = require('urllib');


const remoteUrl = "http://news-at.zhihu.com";


api['get']  = async function (ctx){

    var urlOption = url.parse(ctx.req.url);
    var uri = remoteUrl + urlOption.pathname;
    console.log(urlOption);

    if(/^\/api/.test(urlOption.pathname)){
        var result=await urllib.request(uri,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        ctx.body= JSON.parse(result.data);
    }
}

api['post'] = async function (ctx){

}


module.exports = api;