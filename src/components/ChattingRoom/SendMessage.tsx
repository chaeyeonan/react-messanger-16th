import { useRecoilState } from "recoil";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { chat } from "../../interface/chat";
import { chatList, currentId } from "../../store/recoil/recoil";

function SendMessage() {
  const { text, handleChange, resetText } = useInput("");
  const [chatting, setChatting] = useRecoilState(chatList);
  const sender = useRecoilState(currentId)[0];

  const time = new Date();

  const newChat: chat = {
    chatId: Date.now(),
    senderId: sender,
    receiverId: sender === 1 ? 2 : 1,
    text: text,
    time: time.getHours() + ":" + time.getMinutes(),
  };

  function AddText(text: string) {
    if (text.trim()) {
      setChatting(chatting.concat(newChat));
    }
  }

  function onSend(e: any) {
    e.preventDefault();
    AddText(text);
    resetText();
  }

  return (
    <InputContainer onSubmit={onSend}>
      <Input onChange={handleChange} value={text} />
      <SendButton type="submit">전송</SendButton>
    </InputContainer>
  );
}

const InputContainer = styled.form`
  margin: 0 auto;
  background: #ffffff;
  height: 5rem;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: "row";
`;

const Input = styled.input`
  width: 18rem;
  margin: 0.5rem;
  height: 3.5rem;
  border: none;
`;

const SendButton = styled.button`
  width: 4rem;
  height: 3.7rem;
  margin-top: 0.5rem;
  background-color: #f9eb54;
  border: none;
`;

export { SendMessage };
