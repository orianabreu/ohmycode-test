import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  a {
    color: ${({ theme }) => theme.palette.lightGrey};
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      color: ${({ theme }) => theme.palette.blue};
    }
  }
`;
