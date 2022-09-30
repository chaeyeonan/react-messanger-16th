import styled from "styled-components";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <Container>
      <ChatRoom />
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 1px 1px 2px 2px lightgrey;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 0.5rem;
  width: 24rem;
`;

export default App;
