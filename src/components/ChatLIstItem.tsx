import styled from "styled-components";
import { profile } from "../interface/chat";

const ChatListItem = ({
  userID,
  profileImg,
  name,
  PersonalMessage,
}: profile) => {
  return (
    <ProfileContainer>
      <>
        <ProfileImg src={`/img/${profileImg}.png`} />
        <NameWrap>
          <Name>{name}</Name>
          <PersonalMsg>{PersonalMessage}</PersonalMsg>
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
  font-size: 14px;
  padding-bottom: 3px;
`;
const PersonalMsg = styled.div`
  color: #7d7d7d;
  font-size: 11px;
`;

export default ChatListItem;
