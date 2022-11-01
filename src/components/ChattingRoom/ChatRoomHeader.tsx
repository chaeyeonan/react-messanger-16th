import styled from "styled-components";
import UserData from "../../store/UserData.json";
import { UserProfile } from "../user/UserProfile";

function ChatRoomHeader() {
  let userData = UserData.users;

  return (
    <Header>
      {userData.map((user) => (
        <UserProfile
          userImage={user.profileImage}
          userName={user.userName}
          userId={user.userId}
        />
      ))}
    </Header>
  );
}

const Header = styled.div`
  margin: 0 auto;
  background: #ffffff;
  height: 6rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  display: flex;
  flex-direction: row;
`;

export default ChatRoomHeader;
