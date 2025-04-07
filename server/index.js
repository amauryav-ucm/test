const http = require("http").createServer();

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("A new user has connected: ", socket.id);
  socket.on("message", (message) => {
    console.log(message);
  });
});
