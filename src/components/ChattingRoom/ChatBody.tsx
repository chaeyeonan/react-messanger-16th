import { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { chat } from "../../interface/chat";
import { chatList } from "../../store/recoil/recoil";
import ChatBubble from "./ChatBubble";

function ChatBody() {
  const chatting = useRecoilState(chatList);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollBottom();
  }, [chatting]);

  return (
    <ChatBodyContainer ref={scrollRef}>
      {chatting[0].map((chat: chat) => (
        <ChatBubble
          chatId={chat.chatId}
          senderId={chat.senderId}
          receiverId={chat.receiverId}
          text={chat.text}
          time={chat.time}
        />
      ))}
    </ChatBodyContainer>
  );
}

const ChatBodyContainer = styled.div`
  overflow-y: auto;
  background: pink;
  height: 30rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #7d7d7d;
  }
`;

export default ChatBody;
