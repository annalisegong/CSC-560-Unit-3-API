//routes.js

let router = require('express').Router(); //initialize express router

router.get('/', function(req, res) //set default API response
{
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//errors occur once i add my playerController so i think it must be something i'm doing with mongoose

var playerController = require('./playerController'); //Import playerController

// Bio routes
router.route('/player')
    .get(playerController.index)
    .post(playerController.add);
router.route('/player/:player_id')
    .get(playerController.view)
    .patch(playerController.update)
    .put(playerController.update)
    .delete(playerController.delete);

module.exports = router; //Export API routes