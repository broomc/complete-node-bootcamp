const EventEmitter = require("events");
const http = require("http");
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a Sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer Name: Clive");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left`);
});

myEmitter.emit("newSale", 9);

////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received");
  res.end("Request Received");
});
server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waithing for requests");
});
