import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { roomId } from "../../store/recoil/recoil";
import UserData from "../../store/UserData.json";
import { UserProfile } from "../profile/UserProfile";

function ChatRoomHeader() {
  let userData = UserData.users;
  let room = useRecoilValue(roomId);
  // const newUserData = UserData.users.filter((user) => {
  //   user.userId === 0 || user.userId === room;
  // });

  return (
    <Header>
      {userData.map((user) =>
        user.userId === 0 || user.userId === room ? (
          <UserProfile
            userImage={user.profileImage}
            userName={user.userName}
            userId={user.userId}
          />
        ) : (
          <></>
        )
      )}
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
