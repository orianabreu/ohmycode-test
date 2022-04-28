import styled from 'styled-components';
import { TodoBox, IconContainer } from '../Todo/Todo.styles';

export const CustomTodoBox = styled(TodoBox)`
    grid-template-columns: 15% auto 20% 20%;
    border-bottom: none;
`;

export const DeleteBtnContainer = styled(IconContainer)`
    background: none;
    border: 1px solid ${({ theme }) => theme.palette.blue};
    cursor: pointer;
`;



