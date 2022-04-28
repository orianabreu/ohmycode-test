import styled from 'styled-components';
import { media } from '../../theme/theme';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4rem auto;
    width: 60%;

    ${media.desktop} {
        width: 70%;
    }

    ${media.tablet} {
        flex-direction: column;
        gap: 2rem;
        margin: 2rem auto;
        width: 85%;
    }
`;