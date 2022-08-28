import { Input } from '@react/ui';
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

      @media screen and (max-width: 1000px) {
            position: fixed;
            bottom: 0;
            width: 100%;

            ${Input} {
                  font-size: ${({ theme }) => theme.units[3]}rem;
            }
      }
`;

export { Wrapper };
