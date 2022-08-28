import { useSafetyContext } from '@react/core';
import { PathsContext } from '#/contexts';

function usePathsContext () {
      return useSafetyContext(PathsContext);
}

export { usePathsContext };
