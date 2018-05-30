const port = 3003;

const bodyParser = require("body-parser");
const express    = require("express");
const server     = express();
const allowCORS  = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCORS)

server.listen(port, function() {
  console.log(`BACKEND IS RUNNING ON PORT: ${port}`);
});

module.exports = server;