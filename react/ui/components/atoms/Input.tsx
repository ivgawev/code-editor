import styled from 'styled-components';

const Input = styled.input`
      padding-top: ${({ theme }) => theme.units[2]}rem;
      padding-bottom: ${({ theme }) => theme.units[2]}rem;
      padding-left: ${({ theme }) => theme.units[5]}rem;
      padding-right: ${({ theme }) => theme.units[5]}rem;

      color: ${({ theme }) => theme.palette.primary};
      font-weight: 500;


      background-color:  transparent;

      border-width: 1;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.GREY[700]};
      outline: 0;


      ::placeholder {
            color: ${({ theme }) => theme.text.variants.secondary};
      }

      :focus {
            border-color: ${({ theme }) => theme.colors.BLUE[500]};
      }
`;

export { Input };
