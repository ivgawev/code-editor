import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { PathsContext } from '#/contexts/paths.context';
import { convertPathsToTree } from '@shared/helpers';

const PathsProvider: FC<PropsWithChildren> = ({ children }) => {
      const [paths, setPaths] = useState<string[]>([]);

      const addPath = useCallback((path: string) => {
            if (!paths.includes(path)) {
                  setPaths((previous) => [...previous, path]);
            }
      }, []);

      const pathsTree = useMemo(() => convertPathsToTree(paths), [paths]);

      const contextValue = useMemo(() => ({
            pathsTree,
            addPath
      }), [pathsTree]);

      return (
            <PathsContext.Provider value={contextValue}>
                  {children}
            </PathsContext.Provider>
      );
};

export { PathsProvider };
