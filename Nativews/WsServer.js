// 
const  http = require('http');

const  WebSocket = require('ws');

const  server = http.createServer((req, res) => {
    res.end('I am connected!');
});

const  wss = new WebSocket.Server({ server });

wss.on('headers', (headers, req) => {
    console.log(headers);
});

wss.on('connection', (ws, req) => {
    ws.send('Welcome to the websocket server!!!');
    ws.on('message', (msg) => {
        console.log("Message received: " + msg); 
    });
});

server.listen(8080,()=>{
    console.log('Listening on http://localhost:8080');  
});