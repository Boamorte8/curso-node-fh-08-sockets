const express = require('express');

const app = express();

app.use( require('./version') );


module.exports = app;