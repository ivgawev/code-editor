import { Context, useContext } from 'react';

namespace UseSafetyContext {
      export type Params<T> = Context<T>;
}

function useSafetyContext <T> (context: UseSafetyContext.Params<T>) {
      const data = useContext(context);

      if (!data) {
            const error = `${context.displayName ?? 'The Context'} should be wrapped by it's Provider`;
            throw new Error(error);
      }

      return data;
}

export { useSafetyContext };
