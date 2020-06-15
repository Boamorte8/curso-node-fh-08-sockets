const express = require('express');

const app = express();

const config = require('../../config/config');

app.get('/version', (req, res) => {
    res.json(`Hello World LOCAL! - API Working - ${new Date().toString()} - ${config.version}`);
});

module.exports = app;
