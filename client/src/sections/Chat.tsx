import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import { useAppContext } from "../hooks/useAppContext";
import MessageDisplay from "../components/MessageDisplay";
import ChatInput from "../components/ChatInput";

function Chat() {
  const { roomId, messages, socket } = useAppContext();
  return (
    <Wrapper>
      <Card
        height="440px"
        width="480px"
        title={`Room Id: ${roomId ? roomId : ""}`}
      >
        <MessageDisplay messages={messages} />
        <ChatInput socket={socket} />
      </Card>
    </Wrapper>
  );
}

export default Chat;
