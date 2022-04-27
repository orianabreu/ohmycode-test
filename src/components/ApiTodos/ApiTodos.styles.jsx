import styled from "styled-components";
import { TodoBox } from "../Todo/Todo.styles";

export const TodosContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.darkGreyDesaturated};
  border-radius: 10px;
  margin: 0 auto;
  width: 60%;
`;

export const Legend = styled(TodoBox)`
  font-weight: bold;
  padding: 1.3rem 2rem;

  .completed {
      justify-self: center;
  }
`;

export const GridFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.sizing.paragraph};
    font-weight: bold;
    padding: 1rem 2rem;
`;
