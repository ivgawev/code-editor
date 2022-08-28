import { Iterators, Tree } from '#/iterators';
import { Fragment, useState } from 'react';

interface Props<T> {
      node: Iterators.Tree.Node<T>
      render: Iterators.Tree.Render<T>
}

const TreeItem = <T,>({ node, render }: Props<T>) => {
      const { children } = node;

      const [showChildren, setShowChildren] = useState(true);
      const hasChildren = children.length > 0;
      const renderchildren = hasChildren && showChildren;

      return (
            <Fragment>
                  {render({ node, showChildren, setShowChildren })}
                  {renderchildren && <Tree<any> tree={children} render={render} />}
            </Fragment>
      );
};

export { TreeItem };
