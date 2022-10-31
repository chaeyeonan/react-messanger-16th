import styled from "styled-components";
import Navigation from "../components/Navi";

const Setting = () => {
  return (
    <Container>
      <Navigation />
      <SettingWrap>
        <Div>Setting</Div>
      </SettingWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const SettingWrap = styled.div`
  box-sizing: border-box;
  padding: 15px;
`;

const Div = styled.div`
  color: #000;
`;

export default Setting;
