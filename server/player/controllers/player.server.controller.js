'use strict';

var path = require('path');
var mongoose = require('mongoose');
var errorHandler = require(path.resolve('./server/core/controllers/errors.server.controller'));
var playerService = require('../services/player.server.service.js');
var util = require('util');
var qs = require('querystring');
var Player = mongoose.model('Player');

exports.onInit = onInit;
exports.onNewGame = onNewGame;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;
exports.onInit = onInit;

var retRes = (ret, res) => {
    let json_data = JSON.stringify(ret);
    res.write(json_data);
    console.log('in retRes', json_data);
    res.end();
}
function onInit(req, res, next) {
    if(!_.isEmpty(req.body)) {
        for (let i in req.body) {
            if (i) {
                playerService.onInit(JSON.parse(i).position, (err, ret) => {
                    if (err) res.status(400).send(err);
                    else {
                        ret? retRes(ret, res) : res.end('');
                    }
                });
            }
        }
    }
};

