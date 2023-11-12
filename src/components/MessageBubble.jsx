import styled, { css } from "styled-components";

const TextBubble = styled.aside`
  padding: 1.5rem 1rem;
  border-radius: 15px;
  line-height: 2;
  letter-spacing: 0.15rem;
  width: fit-content;
  max-width: 70%;
  margin: 0.5rem 0;

  & p {
    word-wrap: break-word;
    text-transform: capitalize;
  }

  ${(props) =>
    props.type === "receivedMsg" &&
    css`
      background-color: #30638e;
      color: var(--color-secondary-001);
    `}
  ${(props) =>
    props.type === "sentMsg" &&
    css`
      align-self: flex-end;
      background-color: #eee;
      color: color: var(--color-secondary-001);
    `};
`;

function MessageBubble({ msg }) {
  return (
    <>
      <TextBubble style={{ opacity: 1 }} type="sentMsg">
        <p>{msg}</p>
      </TextBubble>
    </>
  );
}

export default MessageBubble;
