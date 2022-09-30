import ChatBody from "../components/ChattingRoom/ChatBody";
import ChatRoomHeader from "../components/ChattingRoom/ChatRoomHeader";
import { SendMessage } from "../components/ChattingRoom/SendMessage";

function ChatRoom() {
  return (
    <>
      <ChatRoomHeader />
      <ChatBody />
      <SendMessage />
    </>
  );
}

export default ChatRoom;
