import { usePaths } from '#/hooks';
import { useRenderFileExplorer } from '#/modules/file-explorer/hooks';
import { Wrapper } from '#/modules/file-explorer/components';
import { Tree } from '@react/core';
import { SelectedFileExplorerItemProvider } from '#/modules/file-explorer/providers';

const FileExplorer = () => {
      const { pathsTree } = usePaths();
      const { render } = useRenderFileExplorer();

      return (
            <Wrapper>
                  <SelectedFileExplorerItemProvider>
                        <Tree<any> tree={pathsTree} render={render} />
                  </SelectedFileExplorerItemProvider>
            </Wrapper>
      );
};

export { FileExplorer };
