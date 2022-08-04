const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
// server.use(cors());
const Server = require('socket.io');
const io = new socketio.Server(server, { cors: { origin: '*' } });

const PORT = process.env.PORT || 5000;

const router = require('./router');
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });
app.use(cors());
app.use(router);
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('join', ({ name, room }) => {
    console.log(name, room);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});
