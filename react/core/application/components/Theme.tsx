import { FC, lazy, PropsWithChildren, Suspense } from 'react';
import { Application, setComponentName } from '#/application';
import { DesignSystem } from '@shared/design-system';
import { ThemeProvider, ThemeProps } from 'styled-components';

const Normalizer = lazy(() => import('#/application/components/Normalizer'));
type Props = PropsWithChildren< Pick<Application.Configuration, 'normalize'> & ThemeProps<DesignSystem.Theme> >;

const Theme: FC<Props> = ({ theme, normalize, children }) => {
      return (
            <ThemeProvider theme={theme}>
                  <Suspense>
                        {normalize && <Normalizer />}
                  </Suspense>

                  {children}
            </ThemeProvider>
      );
};

setComponentName({ component: Theme, name: 'Theme' });
export { Theme };
