import styled from "styled-components";
import Navigation from "../components/Navi";

const FriendsList = () => {
  return (
    <Container>
      <Navigation />
      <FriendListWrap>
        <Div>FriendList</Div>
      </FriendListWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const FriendListWrap = styled.div`
  box-sizing: border-box;
  padding: 15px;
`;

const Div = styled.div`
  color: #000;
`;

export default FriendsList;
