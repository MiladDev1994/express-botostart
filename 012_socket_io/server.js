// const express = require("express");
// const cors = require("cors");
// const { createServer } = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, { 
//     cors: {
//         origin: "http://localhost:3001",
//         credentials: true,
//         methods: ["GET"]
//     }
//  });

// io.on("connection", (socket) => {
//     socket.on("message", (data) => {
//         console.log(data);
//     })

//     // ...
//     socket.emit("from_server", "hello from server!")
// });

// httpServer.listen(3000);









const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { 
    cors: {
        origin: "http://localhost:3001",
        credentials: true,
        methods: ["GET"]
    }
 });

io.of("/users").on("connection", (socket) => {
    console.log(socket.handshake.headers.authorization);
    socket.on("message", (data) => {
        socket.join("work")
        socket.to('work').emit('from_server', 'hello from server!');
    })
    // console.log(socket.rooms);
});

httpServer.listen(3000);