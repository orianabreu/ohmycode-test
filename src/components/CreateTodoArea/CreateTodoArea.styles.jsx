import styled from "styled-components";
import { Select } from "../UsersSelect/UsersSelect.styles";
import { media } from "../../theme/theme";

export const Form = styled.form`
  background-color: ${({ theme }) => theme.palette.darkGreyDesaturated};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9rem;
  margin-top: 1rem;
  padding: 0 1rem;
  width: 100%;

  ${media.mobile} {
    flex-direction: column;
    height: 18rem;
    padding: 1rem;
  }

`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.palette.purple};
  font-family: "Josefin Sans", sans-serif;
  font-size: ${({ theme }) => theme.sizing.paragraph};
  outline: none;
  opacity: 0.7;
  padding: 1rem;
  width: 60%;
`;

export const CompletedTodoSelect = styled(Select)`
    color: ${({ theme }) => theme.palette.purple};
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    hsl(192, 100%, 67%) 26%,
    hsl(280, 87%, 65%) 73%
  );
  padding: 0.8rem 0.9rem;
`;
