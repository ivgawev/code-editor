import { PropsWithChildren, useMemo, useState } from 'react';
import { SelectedFileExplorerItemContext } from '#/modules/file-explorer/contexts';

const SelectedFileExplorerItemProvider = ({ children }: PropsWithChildren) => {
      const [selected, setSelected] = useState('');

      const contextValue = useMemo(() => ({
            selected,
            setSelected
      }), [selected]);

      return (
            <SelectedFileExplorerItemContext.Provider value={contextValue}>
                  {children}
            </SelectedFileExplorerItemContext.Provider>
      );
};

export { SelectedFileExplorerItemProvider };
