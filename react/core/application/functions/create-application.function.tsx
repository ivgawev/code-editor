import { Application } from '#/application';
import { Application as Component } from '#/application/components/Application';
import { createRoot } from 'react-dom/client';

namespace CreateApplication {
      export type Params = Application.Configuration;
}

function createApplication ({ id, ...rest }: CreateApplication.Params) {
      const container = document.createElement('div');
      container.setAttribute('id', id);
      document.body.prepend(container);
      const root = createRoot(container);
      root.render(<Component {...rest} />);
};

export { createApplication };
