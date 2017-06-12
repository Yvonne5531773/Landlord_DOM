
'use strict';

/**
 * Module dependencies
 */
var playerController = require('../controllers/player.server.controller.js');

module.exports = function (app) {

    app.post('/Init', playerController.onInit);

};
