import { DesignSystem } from '@shared/design-system';
import { LazyExoticComponent } from 'react';
import { Dictionary } from '@shared/helpers';

export namespace Application {
      export interface Configuration {
            id: string
            normalize?: boolean
            index: string
            error: string
            routes: Routes
            themes: DesignSystem.Theme[]
            defaultTheme: string
      }

      export type Component = Element | LazyComponent;
      type Element = () => JSX.Element;
      type LazyComponent = LazyExoticComponent<Element>;

      export interface Route {
            component: LazyComponent
      }

      type Routes = Dictionary<Route>;
}
