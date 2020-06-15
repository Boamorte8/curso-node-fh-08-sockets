const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const config = require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Allow public folder
app.use( express.static(path.resolve(__dirname, '../public')));


app.listen(config.port, (err) => {
    if (err) throw new Error(err);
    console.log(`Listening port: ${config.port} - ${config.version}`);
});
