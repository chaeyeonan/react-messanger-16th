import styled from "styled-components";
import useInput from "../../hooks/useInput";

function SendMessage() {
  const { text, handleChange, resetText } = useInput("");

  function AddText(text: string) {
    console.log(text);
  }

  function onSend(e: any) {
    e.preventDefault();
    AddText(text);
    resetText();
  }

  return (
    <InputContainer onSubmit={onSend}>
      <Input onChange={handleChange} value={text} />
      <SendButton type="submit">전송</SendButton>
    </InputContainer>
  );
}

const InputContainer = styled.form`
  margin: 0 auto;
  background: #ffffff;
  height: 5rem;
  width: 26rem;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: "row";
`;

const Input = styled.input`
  width: 18.8rem;
  margin: 0.5rem;
  height: 3.5rem;
  border: none;
`;

const SendButton = styled.button`
  width: 5rem;
  height: 3.7rem;
  margin-top: 0.5rem;
  background-color: #f9eb54;
  border-width: 0.01rem;
`;

export { SendMessage };
