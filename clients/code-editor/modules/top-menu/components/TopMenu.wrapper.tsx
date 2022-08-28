import { Text } from '@react/ui';
import styled from 'styled-components';

const Wrapper = styled.header`
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.units[2]}rem;

      padding-top: ${({ theme }) => theme.units[2]}rem;
      padding-bottom: ${({ theme }) => theme.units[2]}rem;
      padding-left: ${({ theme }) => theme.units[3]}rem;
      padding-right: ${({ theme }) => theme.units[3]}rem;

      border-bottom-width: 1;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.GREY[700]};

      background-color: ${({ theme }) => theme.colors.GREY[900]};

      ${Text} {
            font-size: ${({ theme }) => theme.units[3.5]}rem;
      }

      img {
            height: 20;
            opacity: 0.7;
      }
`;

export { Wrapper };
