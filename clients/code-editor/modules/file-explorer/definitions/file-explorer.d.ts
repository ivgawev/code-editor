import { Iterators } from '@react/core';
import { EXPLORER_ITEM_ICONS } from '#/modules/file-explorer/constants';

export namespace FileExplorer {
      export type Icons = keyof typeof EXPLORER_ITEM_ICONS;

      export interface Item {
            id: string
            name: string
            level: number
            file: Icons
            selected: boolean
            hasChildren: boolean
            showChildren: boolean
      }

      export type Render = Iterators.Tree.Render<Item>;
}
