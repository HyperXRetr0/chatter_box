import { createContext } from "react";

export type AppContextType = {
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
  socket: WebSocket | undefined;
  setSocket: React.Dispatch<React.SetStateAction<WebSocket | undefined>>;
  roomId: string;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
