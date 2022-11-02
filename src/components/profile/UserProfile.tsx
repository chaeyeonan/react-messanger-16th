import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currentId } from "../../store/recoil/recoil";

interface imageStyle {
  brightness?: string;
  width?: number;
  height?: number;
}

function UserProfile({
  userImage,
  userName,
  userId,
}: {
  userImage: any;
  userName?: string;
  userId: number;
}) {
  const [sender, setSender] = useRecoilState(currentId);

  function onClick() {
    setSender(userId);
  }

  return (
    <UserContainer>
      {userId === sender ? (
        <>
          <UserProfileImage
            src={`img/${userImage}.png`}
            brightness="brightness(50%)"
          />
          <div
            style={{
              position: "absolute",
              top: "3.5rem",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: "700",
              margin: "0.5rem",
            }}
          >
            선택중
          </div>
        </>
      ) : (
        <UserProfileImage src={`img/${userImage}.png`} onClick={onClick} />
      )}
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

const UserProfileImage = styled.img<imageStyle>`
  width: ${(props) => props.width || 3}rem;
  height: ${(props) => props.height || 3}rem;
  border-radius: 1rem;
  border-width: 0.3rem;
  filter: ${(props) => props.brightness || "brightness(100%)"};
`;

const UserName = styled.div`
  font-size: 0.7rem;
  padding-top: 0.2rem;
`;

const SelectUser = styled.div`

position: absolute,
top: 3.5rem,
color: "#fff",
font-size: "0.7rem",
margin: "0.5rem",
`;

export { UserProfile, UserProfileImage };
