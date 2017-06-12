
'use strict';

/**
 * Module dependencies
 */
var playerController = require('../controllers/player.server.controller.js');

module.exports = function (app) {

    app.post('/Init', playerController.onInit);
    app.post('/NewGame', playerController.onNewGame);
    app.post('/ShuffleCards', playerController.onShuffleCards);
    app.post('/DealCards', playerController.onDealCards);
    app.post('/DealCardsToMe', playerController.onDealCardsToMe);
    app.post('/CoverHandCards', playerController.onCoverHandCards);
    app.post('/PrepareCallLandlord', playerController.onPrepareCallLandlord);
    app.post('/WaitPlayerCallLandlord', playerController.onWaitPlayerCallLandlord);
    app.post('/InquirePlayerCallLandlord', playerController.onInquirePlayerCallLandlord);
    app.post('/ResultOfCallLandlord', playerController.onResultOfCallLandlord);
    app.post('/TheLandlord', playerController.onTheLandlord);
    app.post('/TurnOverHandCards', playerController.onTurnOverHandCards);
    app.post('/WaitPlayCards', playerController.onWaitPlayCards);
    app.post('/InquirePlayCards', playerController.onInquirePlayCards);
    app.post('/ResultOfPlayCards', playerController.onResultOfPlayCards);
    app.post('/Bomb', playerController.onBomb);
    app.post('/BaseScoreAndMultiples', playerController.onBaseScoreAndMultiples);
    app.post('/GameOver', playerController.onGameOver);
    app.post('/GameScore', playerController.onGameScore);
    app.post('/TheEnd', playerController.TheEnd);
};
