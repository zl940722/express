//  app.js 首页
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const index = require('./routes')
const user = require('./routes/user/user')
const report = require('./routes/report/report')


// app.use(bodyParser.urlencoded({
//     extends: true
// }));

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

//  使用路由 /index 是路由指向名称
// app.use(`/index`,router)
app.use('/index', index)
app.use('/user', user)
app.use('/report', report)

//配置服务端口
app.listen(3556, () => {
    const hostname = 'localhost';
    const port = 3556;
    console.log(`Server running at http://${hostname}:${port}/`);
})