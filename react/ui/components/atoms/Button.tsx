import styled from 'styled-components';

const Button = styled.button`
      padding-top: ${({ theme }) => theme.units[2]}rem;
      padding-bottom: ${({ theme }) => theme.units[2]}rem;
      padding-left: ${({ theme }) => theme.units[5]}rem;
      padding-right: ${({ theme }) => theme.units[5]}rem;

      color: ${({ theme }) => theme.palette.primary};
      font-weight: 500;
      background-color: ${({ theme }) => theme.colors.GREY[900]};

      border-width: 1;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.GREY[700]};
`;

export { Button };
