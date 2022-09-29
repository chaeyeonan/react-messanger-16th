import { useState } from "react";
import styled from "styled-components";

function UserProfile({
  userImage,
  userName,
  userId,
}: {
  userImage: any;
  userName: string;
  userId: number;
}) {
  const [sender, setSender] = useState(1);

  function onClick() {
    setSender(userId);
  }

  return (
    <UserContainer>
      <UserProfileImage src={`img/${userImage}`} onClick={onClick} />
      <UserName>{userName}</UserName>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const UserProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border-width: 0.3rem;
`;

const UserName = styled.div`
  font-size: 0.7rem;
  padding-top: 0.2rem;
`;

export default UserProfile;
