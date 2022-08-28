import { usePathsContext } from '#/hooks';
import { useRenderFileExplorer } from '#/modules/file-explorer/hooks';
import { useMemo, useState } from 'react';
import { SelectedFileExplorerItemContext } from '#/modules/file-explorer/contexts';
import { Wrapper } from '#/modules/file-explorer/components';
import { Tree } from '@react/core';

const FileExplorer = () => {
      const { pathsTree } = usePathsContext();
      const { render } = useRenderFileExplorer();
      const [selected, setSelected] = useState('');

      const contextValue = useMemo(() => ({
            selected,
            setSelected
      }), [selected]);

      return (
            <Wrapper>
                  <SelectedFileExplorerItemContext.Provider value={contextValue}>
                        <Tree<any> tree={pathsTree} render={render} />
                  </SelectedFileExplorerItemContext.Provider>
            </Wrapper>
      );
};

export { FileExplorer };
