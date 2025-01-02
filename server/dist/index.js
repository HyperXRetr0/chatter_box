"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const allSockets = [];
wss.on("connection", (socket) => {
    console.log("User connected to web socket server.");
    socket.on("message", (data) => {
        var _a;
        const parsedMessage = JSON.parse(data.toString());
        if (parsedMessage.type === "join") {
            allSockets.push({ socket, room: parsedMessage.payload.roomId });
            console.log("User joined room " + parsedMessage.payload.roomId);
        }
        else if (parsedMessage.type === "chat") {
            console.log("Message sent");
            const currentUserRoom = (_a = allSockets.find((user) => user.socket === socket)) === null || _a === void 0 ? void 0 : _a.room;
            allSockets.forEach(({ room, socket }) => {
                if (room === currentUserRoom)
                    socket.send(parsedMessage.payload.message);
            });
        }
    });
});
