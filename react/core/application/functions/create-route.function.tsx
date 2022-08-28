import { Application } from '#/application';
import { Route } from 'react-router-dom';

namespace CreateRoute {
      export interface Params {
            path: string
            route: Application.Route
      }
}

function createRoute ({ path, route }: CreateRoute.Params) {
      const { component: Component } = route;
      return <Route key={path} path={path} element={<Component />} />;
};

export { createRoute };
