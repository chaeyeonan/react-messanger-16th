import styled from "styled-components";
import Navigation from "../components/Navi";

const Setting = () => {
  return (
    <Container>
      <Navigation />
      <SettingWrap>
        <Div>더보기</Div>
        <Div onClick={() => window.open("https://github.com/chaeyeonan")}>
          GitHub
        </Div>
        <Div onClick={() => window.open("https://12yeonii.tistory.com/")}>
          Tistory
        </Div>
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
  font-weight: bold;
  font-size: 1rem;
  padding-bottom: 1rem;
`;

export default Setting;
