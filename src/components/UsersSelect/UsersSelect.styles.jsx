import styled from 'styled-components';

export const Select = styled.select`
    border: none;
    border-radius: 10px;
    color: ${({theme}) => theme.palette.darkGrey};
    font-family: 'Josefin Sans', sans-serif;
    font-size: ${({theme}) => theme.sizing.paragraph};
    outline: none;
    opacity: 0.7;
    padding: 1rem;
`;