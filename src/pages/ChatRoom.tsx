import ChatBody from "../components/ChatBody";
import ChatRoomHeader from "../components/ChatRoomHeader";
import { SendMessage } from "../components/SendMessage";

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
