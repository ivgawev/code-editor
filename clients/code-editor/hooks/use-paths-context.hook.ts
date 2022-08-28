import { useSafetyContext } from '@react/core';
import { PathsContext } from '#/contexts';

function usePaths () {
      return useSafetyContext(PathsContext);
}

export { usePaths };
