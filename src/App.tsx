import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import FriendsList from "./pages/FriendsList";
import ChatList from "./pages/ChatList";
import Setting from "./pages/Setting";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/*" element={<FriendsList />} />
        <Route path="/Chat" element={<ChatList />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 1px 1px 2px 2px lightgrey;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 0.5rem;
  width: 24rem;
  height: 43rem;
`;

export default App;
