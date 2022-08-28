import { useSafetyContext } from '@react/core';
import { SelectedFileExplorerItemContext } from '#/modules/file-explorer/contexts/selected-file-explorer-item.context';

function useSelectedFileExplorerItem () {
      return useSafetyContext(SelectedFileExplorerItemContext);
}

export { useSelectedFileExplorerItem };
