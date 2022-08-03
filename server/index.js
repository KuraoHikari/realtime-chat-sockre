const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const PORT = process.env.PORT || 5000;

const router = require('./router');
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});