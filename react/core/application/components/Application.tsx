import { Application, setComponentName } from '#/application';
import { FC, StrictMode } from 'react';
import { ErrorBoundary } from '#/application/components/ErrorBoundary';
import { Router } from '#/application/components/Router';
import { Theme } from '#/application/components/Theme';

type Props = Omit<Application.Configuration, 'id'>;

const Component: FC<Props> = ({ themes, defaultTheme, normalize, ...rest }) => {
      const theme = themes.find((theme) => theme.name === defaultTheme) ?? themes[0];

      return (
            <StrictMode>
                  <ErrorBoundary>
                        <Theme theme={theme} normalize={normalize}>
                              <Router {...rest} />
                        </Theme>
                  </ErrorBoundary>
            </StrictMode>
      );
};

setComponentName({ component: Component, name: 'Application' });
export { Component as Application };
