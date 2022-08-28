import styled from 'styled-components';

const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.units[2]}rem;
      flex: 3;

      padding-top: ${({ theme }) => theme.units[7]}rem;
      padding-bottom: ${({ theme }) => theme.units[7]}rem;
      padding-left: ${({ theme }) => theme.units[10]}rem;
      padding-right: ${({ theme }) => theme.units[10]}rem;
`;

export { Wrapper };
