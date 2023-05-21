const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
const expressServer = app.listen(8000, () => { console.log("Server is running on port 8000") });
const io = socketio(expressServer);

io.on("connection", (socket) => {
    console.log(socket.id, "Has connected");
    socket.emit("messageFromServer", { data: "Welcome to the socketio server" });
});
