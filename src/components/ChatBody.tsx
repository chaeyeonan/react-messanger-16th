import styled from "styled-components";
import ChatText from "../interface/ChatText";
import { ReceiverBubble, SenderBubble } from "./ChatBubble";

function ChatBody() {
  return (
    <ChatBodyContainer>
      <ReceiverBubble />
      <SenderBubble />
    </ChatBodyContainer>
  );
}

const ChatBodyContainer = styled.div`
  overflow: auto;
  background: #a8c0d6;
  height: 30rem;
  width: 26rem;
  justify-content: flex-start;
`;

export default ChatBody;
