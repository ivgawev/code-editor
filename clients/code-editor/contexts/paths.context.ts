import { Tree } from '@shared/helpers';
import { createContext } from 'react';

interface Props {
      pathsTree: Tree.Node[]
      addPath: (path: string) => void
}

const PathsContext = createContext({} as Props);
export { PathsContext };
