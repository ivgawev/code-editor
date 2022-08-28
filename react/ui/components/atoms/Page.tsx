import styled from 'styled-components';

const Page = styled.main`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      background-color: ${({ theme }) => theme.palette.background};
`;

export { Page };
