import { BsShuffle } from "react-icons/bs";
import Button from "./Button";
import { useAppContext } from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

function RoomInput() {
  const navigate = useNavigate();
  const { socket, roomId, setRoomId } = useAppContext();
  const [showToast, setShowToast] = useState<boolean>(false);
  function handleJoin() {
    if (!socket || !roomId) {
      setShowToast(true);
      return;
    }
    socket.send(
      JSON.stringify({
        type: "join",
        payload: {
          roomId,
        },
      })
    );
    navigate("/chat");
  }
  const handleCopy = useCallback(
    function () {
      navigator.clipboard.writeText(roomId);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    },
    [roomId]
  );
  const randomRoomIdGen = useCallback(
    function () {
      let randomRoomId: string = "";
      const char: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < 6; i++) {
        const randomChar = Math.floor(Math.random() * char.length);
        randomRoomId += char.charAt(randomChar);
      }
      setRoomId(randomRoomId);
    },
    [setRoomId]
  );
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-3xl text-white font-thin">Room Code</h2>
      <div className="bg-white flex items-center justify-center px-2 rounded-lg gap-2 drop-shadow-xl">
        <input
          type="text"
          className="focus:outline-none py-1"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          maxLength={6}
        />
        <Button override={true} onClick={randomRoomIdGen}>
          <BsShuffle />
        </Button>
      </div>
      <div className="flex justify-center gap-16">
        <Button onClick={handleJoin}>Join</Button>
        <Button onClick={handleCopy}>Copy</Button>
      </div>
      {showToast && (
        <div
          className="absolute bottom-0 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm 
      animate-slide-up mb-4"
        >
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default RoomInput;
