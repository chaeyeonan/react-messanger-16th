import { useRecoilState } from "recoil";
import styled from "styled-components";
import chat from "../../interface/chat";
import { chatList } from "../../store/recoil/recoil";
import { ChatBubble } from "./ChatBubble";

function ChatBody() {
  const chatting = useRecoilState(chatList);

  return (
    <ChatBodyContainer>
      {chatting[0].map((chat: chat) => (
        <ChatBubble
          chatId={chat.chatId}
          senderId={chat.senderId}
          receiverId={chat.receiverId}
          text={chat.text}
        />
      ))}
    </ChatBodyContainer>
  );
}

const ChatBodyContainer = styled.div`
  overflow: auto;
  background: #a8c0d6;
  height: 30rem;
  width: 26rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`;

export default ChatBody;
