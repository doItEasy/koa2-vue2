
const router = require('koa-router')();
const api = require('./controllers/api-access-zhihu.js');

router.get('/api/*', api.get);
router.post('/api/*', api.post);


module.exports = router;