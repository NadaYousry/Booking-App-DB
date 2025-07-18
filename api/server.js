const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(function (req, res, next) {
  if (req.method === "PATCH") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(middlewares);

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
