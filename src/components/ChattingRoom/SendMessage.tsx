import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { chat, chatRoom } from "../../interface/chat";
import {
  chatList,
  chattingRoom,
  currentId,
  roomId,
} from "../../store/recoil/recoil";

function SendMessage() {
  const { text, handleChange, resetText } = useInput("");
  const room = useRecoilValue(roomId);
  const [chatting, setChatting] = useRecoilState(chatList);
  const getChatting = useRecoilValue(chattingRoom);
  const sender = useRecoilValue(currentId);
  const time = new Date();

  const newChat: chat = {
    chatId: Date.now(),
    senderId: sender,
    receiverId: sender === 0 ? room : 0,
    text: "dvavd", //text,
    time: time.getHours() + ":" + time.getMinutes(),
  };

  const newChatting: chatRoom = { roomId: room, chat: [newChat] };

  let copy = [...getChatting];
  function AddText(text: string) {
    if (text.trim()) {
      copy[0].chat.concat(newChat);

      //setChatting(chatting[room - 1].chat.concat(newChat));
    }
  }
  console.log(copy[0].chat);

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
