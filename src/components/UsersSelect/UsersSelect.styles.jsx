import styled from 'styled-components';

export const Select = styled.select`
    border: none;
    border-radius: 10px;
    color: ${({theme}) => theme.palette.darkGrey};
    outline: none;
    opacity: 0.7;
    padding: 1rem;
`;