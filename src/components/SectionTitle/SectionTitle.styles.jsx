import styled from "styled-components";
import { media } from "../../theme/theme";

export const Title = styled.h1`
    font-size: ${({theme}) => theme.sizing.h1};
    font-weight: 700;
    letter-spacing: 1rem;
    text-transform: uppercase;

    ${media.desktop} {
        font-size: ${({theme}) => theme.sizing.h3};
    }
`;