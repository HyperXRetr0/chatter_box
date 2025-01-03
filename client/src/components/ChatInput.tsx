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
    <div className="bg-white rounded-full shadow-xl relative pr-10">
      <input
        ref={chatRef}
        type="text"
        className="rounded-full focus:outline-none h-8 pl-4"
      />
      <Button
        override={true}
        className="text-white bg-slate-900 rounded-full h-8 w-8 flex justify-center items-center absolute right-0 top-0"
        onClick={handleClick}
      >
        <BsSend />
      </Button>
    </div>
  );
}

export default ChatInput;
