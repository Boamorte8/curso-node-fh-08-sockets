const express = require('express');
const socketIO = require('socket.io');

const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);

const bodyParser = require('body-parser');

const config = require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Allow public folder
app.use( express.static(path.resolve(__dirname, '../public')));

// IO = This is the communication of the backend
module.exports.io = socketIO(server);

require('./sockets/socket');


server.listen(config.port, (err) => {
    if (err) throw new Error(err);
    console.log(`Listening port: ${config.port} - ${config.version}`);
});
