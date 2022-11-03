import styled from "styled-components";
import Navigation from "../components/Navi";
import FriendsProfile from "../components/profile/FriendsProfile";
import UserData from "../store/UserData.json";

interface DivStyle {
  color?: string;
  padding?: number;
  border?: number;
  font?: number;
}

const FriendsList = () => {
  let userData = UserData.users;

  return (
    <Container>
      <Navigation />
      <FriendListWrap>
        <>
          <Div font={1}>친구</Div>

          <Div padding={0.8} border={1}>
            <FriendsProfile
              userID={userData[0].userId}
              profileImg={userData[0].profileImage}
              name={userData[0].userName}
              PersonalMessage={userData[0].personalMessage}
            />
          </Div>

          <Div padding={0.5} color="#7d7d7d">
            친구 {userData.length - 1}
          </Div>
          {userData.map((people) =>
            people.userId != 0 ? (
              <FriendsProfile
                userID={people.userId}
                profileImg={people.profileImage}
                name={people.userName}
                PersonalMessage={people.personalMessage}
              />
            ) : (
              <></>
            )
          )}
        </>
      </FriendListWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const FriendListWrap = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  width: 18.5rem;
`;

const Div = styled.div<DivStyle>`
  color: ${(props) => props.color || "#000"};
  font-weight: bold;
  padding: ${(props) => props.padding || 0}rem 0;
  border-bottom: ${(props) => props.border || 0}px solid lightgray;
  font-size: ${(props) => props.font || 0.5}rem;
`;

export default FriendsList;
