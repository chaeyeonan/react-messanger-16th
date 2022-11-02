import console from "console";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import ChatListItem from "../components/ChatLIstItem";
import Navigation from "../components/Navi";
import { roomId } from "../store/recoil/recoil";
import UserData from "../store/UserData.json";

const ChatList = () => {
  let userData = UserData.users;
  const [roomNum, setRoomNum] = useRecoilState(roomId);

  return (
    <Container>
      <Navigation />
      <ChatListWrap>
        <Div>채팅</Div>
        {userData.map((people) =>
          people.userId != 0 ? (
            <Link
              to="/ChatRoom"
              style={{ textDecoration: "none", color: "#000" }}
              state={{ room: people.userId }}
              onClick={() => {
                setRoomNum(people.userId);
              }}
            >
              <ChatListItem
                userID={people.userId}
                profileImg={people.profileImage}
                name={people.userName}
                PersonalMessage={people.personalMessage}
              />
            </Link>
          ) : (
            <></>
          )
        )}
      </ChatListWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ChatListWrap = styled.div`
  box-sizing: border-box;
  padding: 15px;
`;

const Div = styled.div`
  font-weight: bold;
  font-size: 1rem;
  padding-bottom: 1rem;
`;

export default ChatList;
