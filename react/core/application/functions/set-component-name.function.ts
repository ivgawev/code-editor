import { Context, FC } from 'react';
import { isDevelopment } from '@shared/helpers';

namespace SetComponentName {
      export interface Params {
            name: string
            component: FC | Context<any>
      }
}

function setComponentName ({ name, component }: SetComponentName.Params) {
      if (isDevelopment) {
            component.displayName = name;
      }
};

export { setComponentName };
