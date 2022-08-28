import { useCallback } from 'react';
import { FileExplorer } from '#/modules/file-explorer/definitions';
import { FileExplorerItemContainer } from '#/modules/file-explorer/components';

function useRenderFileExplorer () {
      const render: FileExplorer.Render = useCallback(({ node, ...rest }) => {
            const { id, level, children } = node;
            const paths = id.split('/');
            const name = paths.at(-1) ?? '';
            const file = name.split('.')[1] as FileExplorer.Icons;
            const hasChildren = children.length > 0;
            const props = { id, name, level, file, hasChildren, ...rest };
            return <FileExplorerItemContainer {...props} />;
      }, []);

      return { render };
};

export { useRenderFileExplorer };
