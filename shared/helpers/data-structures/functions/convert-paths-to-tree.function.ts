import { Tree } from '#/data-structures';

function convertPathsToTree (paths: string[]) {
      const tree: Record<'value', Tree.Node[]> = {
            value: []
      };

      for (const path of paths) {
            const parts = path.split('/');

            parts.reduce((tree, part, level, parts) => {
                  if (typeof tree[part] === 'undefined') {
                        tree[part] = {
                              value: []
                        };

                        tree.value.push({
                              id: parts.slice(0, level + 1).join('/'),
                              level: level + 1,
                              children: tree[part].value
                        });
                  }

                  return tree[part];
            }, tree);
      }

      return tree.value;
}

export { convertPathsToTree };
