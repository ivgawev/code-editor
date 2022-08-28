import { FileExplorer } from '#/modules/file-explorer/definitions';
import { EXPLORER_ITEM_ICONS } from '#/modules/file-explorer/constants';
import { IconType } from 'react-icons/lib';

namespace GetExplorerItemIcon {
      export interface Result {
            icon: IconType
            color?: string
      };
}

function getExplorerItemIcon (file: FileExplorer.Icons): GetExplorerItemIcon.Result {
      const icon = EXPLORER_ITEM_ICONS[file];
      if (icon) return icon;
      return EXPLORER_ITEM_ICONS.file;
}

export { getExplorerItemIcon };
