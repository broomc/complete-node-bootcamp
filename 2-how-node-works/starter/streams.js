const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1
  /* fs.readFile("smallfile.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  }); */
  //solution 2: Stream
  /*  const readable = fs.createReadStream("test-file5381.txt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });
  readable.on("end", () => {
    res.end();
  });
  readable.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File Not Found!");
  }); */
  //Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeabledestination);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening....");
});
