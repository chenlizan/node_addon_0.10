/**
 * Created by chenlizan on 16-2-2.
 */

var testRouter = require('express').Router(); //testRouter相当于app
var testNative = require('fjsmthlib');
var fjsmth = testNative.fjsmthClient();

module.exports = function () {

    var callback = function (devid, msgcode, data, datalen) {
        console.log(data);
    }

    fjsmth.on('GenCallbk', callback);

    fjsmth.AddUserDevice({DevId: "000700FF546CA98F"}, function (results) {
        console.log(results);
    });

    fjsmth.ReadDevSingleStateData({DevId: "000700FF546CA98F", DataCode: 0x0008}, function (results) {
        console.log(results);
    });

    setTimeout(function () {
        fjsmth.ReadDevStateData("002221A60E001177", [0x0021,0x0022], function (results) {
            console.log(results);
        });
    }, 3000);

    return testRouter;
}

