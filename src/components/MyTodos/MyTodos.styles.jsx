import styled from 'styled-components';
import { TodosContainer } from '../ApiTodos/ApiTodos.styles';
import { CustomTodoBox } from '../CustomTodo/CustomTodo.styles';

export const MyTodosContainer = styled(TodosContainer)`
  width: 70%;
`;

export const CustomLegend = styled(CustomTodoBox)`
  font-weight: bold;
  padding: 1.3rem 2rem;

  .completed, .delete-task {
    justify-self: center;
  }
`;
