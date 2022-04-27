import styled from "styled-components";

export const TodoBox = styled.div`
  display: grid;
  grid-template-columns: 15% auto 10%;
  align-items: center;
  border-bottom: 0.3px solid ${({ theme }) => theme.palette.lightGrey};
  font-size: ${({ theme }) => theme.sizing.paragraph};
  padding: 1rem 2rem;
`;

export const IconContainer = styled.div`
  background: linear-gradient(
    90deg,
    hsl(192, 100%, 67%) 26%,
    hsl(280, 87%, 65%) 73%
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
`;
