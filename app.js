
require('dotenv').config();

const Serve = require('./model/server');

const Server = new Serve();

Server.listen();