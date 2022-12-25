const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname));
app.get("/", (req, res) => {
  //res.json({ ключ: "значение" });
  res.sendFile("./index.html");
});

http.listen(1000, "127.0.0.1", () => {
  console.log("asddsa");
});
