import { useRecoilValue } from "recoil";
import ChatBody from "../components/ChattingRoom/ChatBody";
import ChatRoomHeader from "../components/ChattingRoom/ChatRoomHeader";
import { SendMessage } from "../components/ChattingRoom/SendMessage";
import { roomId } from "../store/recoil/recoil";

const ChatRoom = () => {
  return (
    <>
      <ChatRoomHeader />
      <ChatBody />
      <SendMessage />
    </>
  );
};

export default ChatRoom;
