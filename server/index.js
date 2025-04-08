const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;



const http = require("http").createServer();

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

let lobbies = {};

io.on('connection', (socket) => {
  console.log("A new user has connected: ", socket.id);
  socket.on('message', (message) => {
    console.log(message);
  });

  socket.on('create-lobby', (obj, cb) => {
    const _lobbyCode = createLobbyCode();
    lobbies[_lobbyCode] = {
      lobbyCode: _lobbyCode,
      players: {
        [socket.id]: obj.playerName
      },
      active: false
    };
    cb(_lobbyCode);
  })
});

function createLobbyCode(){
  return Math.random().toString().substring(2,8).toUpperCase();
}

