import styled from 'styled-components';

const Wrapper = styled.aside`
      flex: 1;
      height: 100vh;

      border-right-width: 1;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.GREY[700]};

      background: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.GREY[900]} 0%, ${theme.colors.GREY[800]} 50%)`};
`;

export { Wrapper };
