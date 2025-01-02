import { BsSend } from "react-icons/bs";
import Button from "./Button";
import { useRef } from "react";

function ChatInput({ socket }: { socket: WebSocket | undefined }) {
  const chatRef = useRef<HTMLInputElement | null>(null);
  function handleClick() {
    if (!chatRef.current || !socket) return;
    const message = chatRef.current.value;
    socket.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message,
        },
      })
    );
    chatRef.current.value = "";
  }
  return (
    <div className="flex bg-white rounded-full sticky bottom-0 shadow-xl">
      <input
        ref={chatRef}
        type="text"
        className="rounded-full focus:outline-none px-4"
      />
      <Button
        override={true}
        className="text-white bg-slate-900 rounded-full p-2"
        onClick={handleClick}
      >
        <BsSend />
      </Button>
    </div>
  );
}

export default ChatInput;
