import styled from "styled-components";

function ReceiverBubble() {
  return (
    <>
      <LeftBubble>gg</LeftBubble>
    </>
  );
}

function SenderBubble() {
  return (
    <>
      <RightBubble>안녕</RightBubble>
    </>
  );
}

const LeftBubble = styled.div`
  position: relative;
  display: inline-block;
  max-width: calc(100% - 70px);
  background-color: #ddd;
  padding: 10px;
  margin: 7px;
  font-size: 13px;
  border-radius: 10px;
`;

const RightBubble = styled.div`
  position: relative;
  display: flex;
  max-width: calc(100% - 70px);
  background-color: #f9eb54;
  padding: 10px;
  margin: 7px;
  font-size: 13px;
  border-radius: 10px;
  flex-direction: row-reverse;
`;

export { ReceiverBubble, SenderBubble };
