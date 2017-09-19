/**
 * Created by Matt's Beast PC on 9/19/2017.
 */
const express       = require('express');
const router        = express.Router();

router.get('/register', (request, response, next) => {
    response.send('Register');
});

router.post('/authenticate', (request, response, next) => {
    response.send('Authenticate');
})

router.get('/profile', (request, response, next) => {
    response.send('Profile');
});

router.get('/validate', (request, response, next) => {
    response.send('Validate');
});

module.exports  = router;