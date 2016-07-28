/**
 * Created by chenlizan on 16-1-14.
 */

var allRouter = require('express').Router(); //allRouter相当于app
var addonstestRouter = require('./Addons_testRouter');    //only node 0.10

module.exports = function () {
    // 该路由使用的中间件
    allRouter.use(function timeLog(req, res, next) {
        console.log('Time: ', Date(Date.now()), Date.now());
        next();
    });

    // 测试路由
    allRouter.use(addonstestRouter());

    // 定义网站主页的路由
    allRouter.route('/')
        .get(function (req, res) {
            res.render('index', {title: 'chenlizan_nodejs'});
        })
        .post();
    // 定义 about 页面的路由
    allRouter.route('/about')
        .get(function (req, res) {
            res.send('About chenlizan');
        })
        .post();

    return allRouter; //返回路由句柄
}