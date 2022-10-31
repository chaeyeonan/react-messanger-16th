import styled from "styled-components";
import Navigation from "../components/Navi";

const ChatList = () => {
  return (
    <Container>
      <Navigation />
      <ChatListWrap>
        <Div>ChatList</Div>
      </ChatListWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ChatListWrap = styled.div`
  box-sizing: border-box;
  padding: 15px;
`;

const Div = styled.div`
  color: #000;
`;

export default ChatList;
