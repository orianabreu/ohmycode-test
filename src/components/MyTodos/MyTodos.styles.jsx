import styled from 'styled-components';
import { TodosContainer } from '../ApiTodos/ApiTodos.styles';
import { CustomTodoBox } from '../CustomTodo/CustomTodo.styles';
import { media } from '../../theme/theme';

export const MyTodosContainer = styled(TodosContainer)`
  width: 70%;

  ${media.desktop} {
    width: 80%;
  }

  ${media.tablet} {
    width: 90%;
  }
`;

export const CustomLegend = styled(CustomTodoBox)`
  font-weight: bold;
  padding: 1.3rem 2rem;

  .completed,
  .delete-task {
    justify-self: center;
  }

  ${media.mobile} {
    grid-template-columns: 20% auto 25% 30%;
    padding: 1.3rem 1rem;
  }
`;
