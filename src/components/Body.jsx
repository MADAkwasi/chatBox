import styled from "styled-components";
import Logo from "./Logo";
import ChatArea from "./ChatArea";

const Main = styled.main`
  /* background-color: var(--color-primary-001); */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  /* border: 1px solid rgba(51, 51, 51, 0.5);
  margin: 2rem; */
`;

function Body() {
  return (
    <Main>
      <Logo />
      <ChatArea />
    </Main>
  );
}

export default Body;
