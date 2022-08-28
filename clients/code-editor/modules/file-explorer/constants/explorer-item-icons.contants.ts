import { COLORS } from '@shared/design-system';
import { AiFillFileText } from 'react-icons/ai';
import { ImFolder, ImFolderOpen, ImHtmlFive } from 'react-icons/im';
import { SiCss3, SiJavascript, SiTypescript } from 'react-icons/si';

const EXPLORER_ITEM_ICONS = {
      css: {
            icon: SiCss3
      },
      file: {
            icon: AiFillFileText
      },
      folder: {
            icon: ImFolder
      },
      folderOpen: {
            icon: ImFolderOpen
      },
      html: {
            icon: ImHtmlFive,
            color: COLORS.ORANGE[500]
      },
      js: {
            icon: SiJavascript,
            color: COLORS.YELLOW[500]
      },
      ts: {
            icon: SiTypescript,
            color: COLORS.BLUE[500]
      }
};

export { EXPLORER_ITEM_ICONS };
