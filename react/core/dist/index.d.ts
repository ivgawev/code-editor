import { DesignSystem } from '@shared/design-system';
import { LazyExoticComponent, FC, Context, Dispatch, SetStateAction, ReactNode } from 'react';
import { Dictionary, Tree as Tree$1 } from '@shared/helpers';

declare namespace Application {
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

declare namespace CreateApplication {
    type Params = Application.Configuration;
}
declare function createApplication({ id, ...rest }: CreateApplication.Params): void;

declare namespace SetComponentName {
    interface Params {
        name: string;
        component: FC | Context<any>;
    }
}
declare function setComponentName({ name, component }: SetComponentName.Params): void;

declare namespace UseSafetyContext {
    type Params<T> = Context<T>;
}
declare function useSafetyContext<T>(context: UseSafetyContext.Params<T>): NonNullable<T>;

interface Props<T> {
    tree: Array<Iterators.Tree.Node<T>>;
    render: Iterators.Tree.Render<T>;
}
declare const Tree: <T>({ tree, ...rest }: Props<T>) => JSX.Element;

declare namespace Iterators {
      export namespace Tree {
            namespace Render {
                  export interface Params<T> {
                        node: Node<T>
                        showChildren: boolean
                        setShowChildren: Dispatch<SetStateAction<boolean>>
                  }
            }

            export type Render<T> = (params: Render.Params<T>) => ReactNode;
            export type Node<T> = Tree$1.Node & T;
      }
}

export { Application, Iterators, Tree, createApplication, setComponentName, useSafetyContext };
