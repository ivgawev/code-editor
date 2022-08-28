import { FileExplorer } from '#/modules/file-explorer/definitions';
import { FC, memo } from 'react';
import { Wrapper } from '#/modules/file-explorer/components/FileExplorer.item.wrapper';
import { Text } from '@react/ui';

type Props = FileExplorer.Item & {
      icon: JSX.Element
      onClick: () => void
};

const FileExplorerItem: FC<Props> = ({ icon, name, showChildren, ...rest }) => {
      return (
            <Wrapper showChildren={showChildren} {...rest}>
                  {icon}
                  <Text>{name}</Text>
            </Wrapper>
      );
};

const MemoizedItem = memo(FileExplorerItem);
export { MemoizedItem as FileExplorerItem, Props as FileExplorerItemProps };
