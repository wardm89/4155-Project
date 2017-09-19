/**
 * Created by Matt's Beast PC on 9/19/2017.
 */


const express       = require('express');
const router        = express.Router();
const User          = require('../models/user');
const jwt           = require('jsonwebtoken');

router.post('/register', (request, response, next) => {
    let newUser = new User({
        name:       request.body.name,
        email:      request.body.email,
        username:   request.body.username,
        password:   request.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err)
        {
            response.json({success: false, msg: 'Failed to register User'});
        }
        else
        {
            response.json({success: true, msg: 'User registered'});
        }
    });

});

router.post('/authenticate', (request, response, next) => {
    response.send('Authenticate');
});

router.get('/profile', (request, response, next) => {
    response.send('Profile');
});

module.exports  = router;