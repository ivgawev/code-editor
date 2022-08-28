import { Application, createApplication } from '@react/core';
import { Routes, ROUTES_CONFIGURATION } from '#/routes';
import { DARK_THEME } from '@shared/design-system';
import { reportWebVitals } from '#/functions';

const APPLICATION_CONFIGURATION: Application.Configuration = {
      id: 'code-editor',
      normalize: true,
      index: Routes.INDEX,
      error: Routes.ERROR,
      routes: ROUTES_CONFIGURATION,
      themes: [DARK_THEME],
      defaultTheme: 'dark'
};

createApplication(APPLICATION_CONFIGURATION);
reportWebVitals(console.log);
