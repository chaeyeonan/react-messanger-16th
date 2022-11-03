import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { profile } from "../interface/chat";
import { chatList, chattingRoom, roomId } from "../store/recoil/recoil";

const ChatListItem = ({
  userID,
  profileImg,
  name,
  PersonalMessage,
}: profile) => {
  const chatting = useRecoilValue(chatList);
  const getChatting = useRecoilValue(chattingRoom);

  let lastChatIndex = getChatting[0].chat.length - 1;
  let lastChat = chatting[userID - 1].chat[lastChatIndex].text;
  let lastChatTime = chatting[userID - 1].chat[lastChatIndex].time;

  return (
    <ProfileContainer>
      <>
        <ProfileImg src={`/img/${profileImg}.png`} />
        <NameWrap>
          <Name>{name}</Name>
          <PersonalMsg>{lastChat}</PersonalMsg>
          <Time>{lastChatTime}</Time>
        </NameWrap>
      </>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  padding: 5px 0;
`;

const ProfileImg = styled.img<{ picSize?: number }>`
  width: ${(props) => props.picSize || 3}rem;
  height: ${(props) => props.picSize || 3}rem;
  border-radius: 1rem;
`;

const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 7px;
`;
const Name = styled.div`
  font-size: 13px;
  padding-bottom: 3px;
`;
const PersonalMsg = styled.div`
  color: gray;
  font-size: 10px;
`;
const Time = styled.div`
  color: lightgray;
  font-size: 7px;
  position: absolute;
  right: 5.5rem;
  padding-bottom: 1rem;
`;

export default ChatListItem;
