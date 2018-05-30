const server = require("./config/server");
require("./config/database");

const routesConfig = require("./config/routes");
routesConfig(server);
