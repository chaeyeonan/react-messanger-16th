import { useRecoilState } from "recoil";
import styled from "styled-components";
import chat from "../../interface/chat";
import { currentId } from "../../store/recoil/recoil";

interface bubbleStyle {
  color?: string;
  flexDirection?: string;
}

function ChatBubble({ chatId, senderId, receiverId, text }: chat) {
  const currentUser = useRecoilState(currentId);

  return (
    <>
      {currentUser[0] === senderId ? (
        <BubbleBox justifyContent="flex-end">
          <Bubble>{text}</Bubble>
        </BubbleBox>
      ) : (
        <BubbleBox>
          <Bubble color="#ddd" flexDirection="row">
            {text}
          </Bubble>
        </BubbleBox>
      )}
    </>
  );
}

const BubbleBox = styled.div<{ justifyContent?: string }>`
  display: flex;
  width: 25rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

const Bubble = styled.div<bubbleStyle>`
  display: flex;
  width: auto;
  height: 1.2rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.color || "#f9eb54"};
  font-size: 13px;
  flex-direction: ${(props) => props.flexDirection || "row-reverse"};
  padding: 10px;
  margin: 0.5rem;
`;

export { ChatBubble };
