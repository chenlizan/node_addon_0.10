/**
 * Created by chenlizan on 16-1-14.
 */

var cluster = require('cluster');

if (cluster.isMaster) {
    require('os').cpus().forEach(function () {
        cluster.fork();
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
        cluster.fork();
    });
    cluster.on('listening', function (worker, address) {
        console.log("A worker with #" + worker.id + " is now connected to " +
        address.address +
        ":" + address.port);
    });
} else {
    require('./app.js')();
}