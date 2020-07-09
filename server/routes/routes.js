// routes.js
const index = require('./index')
const user = require('./user/user')
const report = require('./report/report')
// 引入路由模块

module.exports = function(app){
    app.use('/', index)
    app.use('/user', user)
    app.use('/report', report)
}