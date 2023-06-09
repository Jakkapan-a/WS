const express = require('express');
const app = express();
const socketio = require('socket.io');

const namespaces = require('./data/namespaces');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);
const io = socketio(expressServer,{
    cors:["http://localhost:5500"]
});

io.on('connection', (socket) => {
    socket.emit('welcome', "Welcome to the websocket server!!");
    
    socket.on('clientConnect', () => {
        console.log(socket.id, "has connected");
        
    });

    socket.emit('nsList', namespaces);
});