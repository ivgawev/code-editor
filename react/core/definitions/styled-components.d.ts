import 'styled-components';
import { DesignSystem } from '@shared/design-system';

declare module 'styled-components' {
      export interface DefaultTheme extends DesignSystem.Theme {}
}
