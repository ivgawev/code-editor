import { FileExplorer } from '#/modules/file-explorer/definitions';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { useSelectedFileExplorerItem } from '#/modules/file-explorer/hooks';
import { getExplorerItemIcon } from '#/modules/file-explorer/functions';
import { FileExplorerItem } from '#/modules/file-explorer/components/FileExplorer.item';

type Props = Omit<FileExplorer.Item, 'selected'> & {
      setShowChildren: Dispatch<SetStateAction<boolean>>
};

const FileExplorerItemContainer = ({ id, name, file, showChildren, setShowChildren, ...rest }: Props) => {
      const { selected, setSelected } = useSelectedFileExplorerItem();

      const handleOnClick = useCallback(() => {
            setShowChildren((previous) => !previous);
            setSelected(id);
      }, []);

      const { icon: Icon, color } = getExplorerItemIcon(file ?? (showChildren ? 'folderOpen' : 'folder'));

      return (
            <FileExplorerItem
                  key={name}
                  id={id}
                  name={name}
                  file={file}
                  icon={<Icon color={color} />}
                  selected={selected === id}
                  showChildren={showChildren}
                  onClick={handleOnClick}
                  {...rest}
            />
      );
};

export { FileExplorerItemContainer };
