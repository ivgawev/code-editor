import { Iterators } from '#/iterators';
import { TreeItem } from '#/iterators/components/Tree.item';
import { Fragment } from 'react';

interface Props<T> {
      tree: Array<Iterators.Tree.Node<T>>
      render: Iterators.Tree.Render<T>
}

const Tree = <T,>({ tree, ...rest }: Props<T>) => {
      const roots = tree.map((node) => (
            <TreeItem key={node.id} node={node} {...rest} />
      ));

      return (
            <Fragment>
                  {roots}
            </Fragment>
      );
};

export { Tree };
