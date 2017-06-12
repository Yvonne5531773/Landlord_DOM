'use strict';

var path = require('path');
var mongoose = require('mongoose');
var errorHandler = require(path.resolve('./server/core/controllers/errors.server.controller'));
var playerService = require('../services/player.server.service.js');
var util = require('util');
var qs = require('querystring');
var Player = mongoose.model('Player');

exports.onInit = onInit;


function onInit(req, res, next) {

    for(var i in req.body){
        if(i){
            playerService.onInit(JSON.parse(i).position, function(err, ret){
                if(err) res.status(400).send(err);
                else {
                    if(ret){
                        var json_data = JSON.stringify(ret);
                        res.write(json_data);
                        console.log('cccccccccccccccccccccc');
                        console.log(json_data);
                        console.log('cccccccccccccccccccccc');
                        res.end();
                    }else{
                        res.end('');
                    }
                }
            });
        }
    }
};

