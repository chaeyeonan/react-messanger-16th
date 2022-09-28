import styled from "styled-components";
import ChatBody from "../components/ChatBody";
import SendMessage from "../components/SendMessage";

function ChatRoom() {
  return (
    <>
      <Header />
      <ChatBody />
      <SendMessage />
    </>
  );
}

const Header = styled.div`
  margin: 0 auto;
  background: #ffffff;
  height: 6rem;
  width: 26rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
`;

export default ChatRoom;
