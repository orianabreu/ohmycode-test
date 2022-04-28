import styled from 'styled-components';
import { Wrapper } from '../TodosList/TodosList.styles';
import { media } from '../../theme/theme';

export const CreateAreaWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 70%;

  ${media.desktop} {
    width: 80%;
  }

  ${media.tablet} {
    width: 90%;
  }
`;
