const http = require("http");
const requestHandler = require("./requestHandler");

const PORT = process.env.PORT || 3000;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.info(`Node.js server is running on port ${PORT}`);
});
