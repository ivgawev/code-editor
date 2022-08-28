import { FileExplorerItemProps } from '#/modules/file-explorer/components/FileExplorer.item';
import styled from 'styled-components';
import { Text } from '@react/ui';

type Props = Pick<FileExplorerItemProps, 'level' | 'showChildren' | 'hasChildren'> & {
      selected: boolean
};

const Wrapper = styled.div<Props>`
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: ${({ theme }) => theme.units[3]}rem;

      padding-top: ${({ theme }) => theme.units[3]}rem;
      padding-bottom: ${({ theme }) => theme.units[3]}rem;
      padding-right: ${({ theme }) => theme.units[5]}rem;
      padding-left: ${({ theme, level }) => (level * theme.units[5]) + theme.units[5]}rem;

      background-color: ${({ theme, selected }) => selected && theme.colors.GREY[900]};
      cursor: pointer;

      ${Text}, svg {
            color: ${({ selected, theme }) => selected ? theme.text.variants.primary : theme.text.variants.secondary};
      }

      &:hover {
            background-color: ${({ theme }) => theme.colors.GREY[900]};

            ${Text}, svg {
                  color: ${({ theme }) => theme.text.variants.primary};
            }
      }
`;

export { Wrapper };
