const apiRouteHandlers = require("./routes");

const requestHandler = (req, res) => {
  if (req.url.includes("/api")) {
    apiRouteHandlers(req, res);
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to vanilla Node.js REST APIs!</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Requested page not found." }));
    res.end();
  }
};

module.exports = requestHandler;
