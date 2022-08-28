import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
      selected: string
      setSelected: Dispatch<SetStateAction<string>>
}

const SelectedFileExplorerItemContext = createContext({} as Props);
export { SelectedFileExplorerItemContext };
