import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Tree as SharedTree } from '@shared/helpers';

export namespace Iterators {
      export namespace Tree {
            namespace Render {
                  export interface Params<T> {
                        node: Node<T>
                        showChildren: boolean
                        setShowChildren: Dispatch<SetStateAction<boolean>>
                  }
            }

            export type Render<T> = (params: Render.Params<T>) => ReactNode;
            export type Node<T> = SharedTree.Node & T;
      }
}
