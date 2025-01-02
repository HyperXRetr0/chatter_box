import { useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<WebSocket | undefined>(undefined);
  const [messages, setMessages] = useState<string[]>([]);
  const [roomId, setRoomId] = useState<string>("");
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onopen = () =>
      console.log("Client connected to web socket successfully.");
    ws.onclose = () => console.log("Client disconnected from web socket.");
    ws.onerror = (error) =>
      console.error(
        "Error while attempting client connection to web socket. " + error
      );
    ws.onmessage = (ev) => {
      setMessages((prev) => [...prev, ev.data.toString()]);
    };
    setSocket(ws);
    return () => {
      if (ws) {
        ws.close();
        console.log("Client disconnected from web socket successfully.");
      }
    };
  }, []);

  return (
    <AppContext.Provider
      value={{ socket, setSocket, messages, setMessages, roomId, setRoomId }}
    >
      {children}
    </AppContext.Provider>
  );
}
