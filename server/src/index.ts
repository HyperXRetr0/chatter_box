import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}
const allSockets: User[] = [];

wss.on("connection", (socket) => {
  console.log("User connected to web socket server.");
  socket.on("message", (data) => {
    const parsedMessage = JSON.parse(data.toString());
    if (parsedMessage.type === "join") {
      allSockets.push({ socket, room: parsedMessage.payload.roomId });
      console.log("User joined room " + parsedMessage.payload.roomId);
    } else if (parsedMessage.type === "chat") {
      console.log("Message sent");
      const currentUserRoom = allSockets.find(
        (user) => user.socket === socket
      )?.room;
      allSockets.forEach(({ room, socket }) => {
        if (room === currentUserRoom)
          socket.send(parsedMessage.payload.message);
      });
    }
  });
});
