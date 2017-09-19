/**
 * Created by Matt's Beast PC on 9/19/2017.
 */
const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const passport      = require('passport');
const mongoose      = require('mongoose');
const config        = require('./config/database');


//Connect and test mongoose database connection is successfull
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
   console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
   console.log('Error: ' + err);
});

const app           = express();

const users         = require('./routes/users');

const port          = 3000;
//Cors Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users',users);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Index Route
app.get('/', (request, response) => {
    response.send('It works!!!');
});

//Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});