import styled from 'styled-components';
import { TodoBox } from '../Todo/Todo.styles';
import { media } from '../../theme/theme';

export const TodosContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.darkGreyDesaturated};
  border-radius: 10px;
  margin: 0 auto 2rem;
  width: 60%;

  ${media.desktop} {
    width: 70%;
  }

  ${media.tablet} {
    width: 85%;
  }
`;

export const Legend = styled(TodoBox)`
  font-weight: bold;
  padding: 1.3rem 2rem;

  .completed {
    justify-self: center;
  }

  ${media.mobile} {
    grid-template-columns: 20% auto 20%;
    padding: 1.3rem 1rem;
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
