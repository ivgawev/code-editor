import { Application, setComponentName } from '#/application';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { createRoute } from '#/application/functions/create-route.function';

type Props = Pick<Application.Configuration, 'index' | 'routes' | 'error'>;

const Router: FC<Props> = ({ index, routes, error }) => {
      return (
            <BrowserRouter>
                  <Suspense>
                        <Routes>

                              {Object.entries(routes).map(([path, route]) => createRoute({ path, route }))}
                              <Route path="/" element={<Navigate to={index} />} />
                              <Route path="*" element={<Navigate to={error} />} />

                        </Routes>
                  </Suspense>
            </BrowserRouter>
      );
};

setComponentName({ component: Router, name: 'Router' });
export { Router };
