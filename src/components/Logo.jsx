import styled from "styled-components";

const Image = styled.img`
  height: 10rem;
`;

const LogoCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 15rem; */
  position: absolute;
  top: 20%;
`;

const Text = styled.h3`
  letter-spacing: 0.2rem;
  color: #2f8bf5;
  font-size: 3.8rem;
  font-weight: 900;
`;

function Logo() {
  return (
    <LogoCont>
      <div>
        <Image src="/UN-Logo.png" alt="logo" />
      </div>
      <Text>Start chatting</Text>
    </LogoCont>
  );
}

export default Logo;
