/**
 * Created by Matt's Beast PC on 9/19/2017.
 */
const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const passport      = require('passport');
const mongoose      = require('mongoose');

const app           = express();

const port          = 3000;

app.get('/', (request, response) => {
    response.send('Invalid Endpoint');
});

app.listen(port);