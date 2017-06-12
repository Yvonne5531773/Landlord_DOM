'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var async = require('async');
var Player = mongoose.model('Player');

exports.onInit = onInit;

let player = {
    position: 0,
    mycards: [],
    myCardsOut: [],
    countNull: 0,
    // baseInfo: [],
    knowCards: [],
    prev: {},
    othersMayHaveCards: [],
    lordPosition: -1,
    cardsNeedToAi: [],
    //是否叫地主
    jdz: 0
}

function onInit(position, callback){
    player.position = position;
    console.log("我的位置是========" + position);
    callback(null, null)
}
