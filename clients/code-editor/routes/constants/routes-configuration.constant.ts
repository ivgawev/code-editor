import { Application } from '@react/core';
import { Routes } from '#/routes/constants/routes.constant';
import { lazy } from 'react';

const ROUTES_CONFIGURATION: Application.Configuration['routes'] = {
      [Routes.CODE_EDITOR]: {
            component: lazy(() => import('#/routes/components/CodeEditor.route'))
      }
};

export { ROUTES_CONFIGURATION };
