const dotenv = require('dotenv');
const uuid = require('uuid');

const version = 'V_' + uuid.v4();

const envFound = dotenv.config() ;// load the .env file
if (!envFound) {
    console.log('File .env does not exist');
}

// =================================================================
// Environment
// =================================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


module.exports = {
    port: process.env.PORT || 5588,
    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },
    version
}