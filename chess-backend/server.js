const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
require('dotenv').config();
const gameLogic = require('./game-logic')
const port = process.env.PORT



const server = http.createServer(app);
const io = socketio(server);

io.on('connection', client => {
    gameLogic.initializeGame(io, client)
})

server.listen(port,() =>{
console.log(`server running at ${port}`);
})

