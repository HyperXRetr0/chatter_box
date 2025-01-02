import Wrapper from "../components/Wrapper";

import Footer from "../components/Footer";
import Card from "../components/Card";
import RoomInput from "../components/RoomInput";

function Hero() {
  return (
    <Wrapper>
      <Card
        height="440px"
        width="480px"
        title={"Chatter.up"}
        tag={"Your goto place for random group chats..."}
      >
        <RoomInput />
        <Footer />
      </Card>
    </Wrapper>
  );
}

export default Hero;
