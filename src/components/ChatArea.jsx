import styled from "styled-components";
import MessageBubble from "./MessageBubble";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

const Section = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 3rem;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ebecf0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(51, 51, 51);
  }
`;

const Footer = styled.footer`
  position: relative;
  width: 100%;
  z-index: 3;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--color-secondary-001);
  padding: 5rem 0.5rem;
  outline: none;
  box-shadow: 3px 3px 3px rgba(51, 51, 51, 0.8);
  font-size: 1.8rem;
  transition: all 0.3s;

  &:focus,
  :active {
    border: none;
    border-bottom: 2px solid var(--color-secondary-001);
    box-shadow: 7px 7px 7px rgba(51, 51, 51, 0.8);
  }
`;

const TextArea = styled.div`
  background-color: var(--color-secondary-001);
  height: 100%;
  opacity: 0.6;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem 2rem;
  transition: all 0.3s;
  transform: translateY(0);
  overflow-y: scroll;
  box-shadow: 7px 7px 7px rgba(51, 51, 51, 0.8);
`;

const Button = styled.button`
  position: absolute;
  background-color: transparent;
  right: 2rem;
  top: 60%;
  border: none;
  font-size: 2.5rem;
  color: var(--color-secondary-001);
  cursor: pointer;
`;

// const slideIn = {
//   transform: "translateY(0)",
// };

const slideOut = {
  transform: "translateY(1000px)",
};

function ChatArea() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);

  function onSend(e) {
    e.preventDefault();

    if (msg.trim() === "") return;

    setMsgs((item) => [msg, ...item]);
    setMsg("");
  }

  return (
    <Section>
      <TextArea style={msgs.length > 0 || msg ? {} : slideOut}>
        {msgs.length > 0 &&
          msgs.map((msg, i) => <MessageBubble msg={msg} key={i} />)}
      </TextArea>

      <Footer>
        <Form>
          <Input
            placeholder="Type your message"
            type="text"
            onChange={(e) => setMsg(e.target.value)}
            value={msg ? msg[0]?.toUpperCase() + msg?.slice(1) : ""}
          />
          <Button onClick={onSend}>
            <IoSendSharp />
          </Button>
        </Form>
      </Footer>
    </Section>
  );
}

export default ChatArea;
