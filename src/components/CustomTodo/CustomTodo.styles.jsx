import styled from 'styled-components';
import { TodoBox, IconContainer } from '../Todo/Todo.styles';
import { media } from '../../theme/theme';

export const CustomTodoBox = styled(TodoBox)`
  grid-template-columns: 15% auto 20% 20%;
  border-bottom: none;

  ${media.mobile} {
    grid-template-columns: 20% auto 25% 30%;
  }
`;

export const DeleteBtnContainer = styled(IconContainer)`
  background: none;
  border: 1px solid ${({ theme }) => theme.palette.blue};
  cursor: pointer;
`;
