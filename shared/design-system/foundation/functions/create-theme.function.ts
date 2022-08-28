import { COLORS, DesignSystem, FONTS, UNITS } from '#/foundation';

namespace CreateTheme {
      type Params = Pick<DesignSystem.Theme, 'name' | 'palette' | 'text'>;
      type Result = Readonly<DesignSystem.Theme>;
      export type Function = (params: Params) => Result;
}

const createTheme: CreateTheme.Function = ({ name, palette, text }) => {
      return {
            name,
            colors: COLORS,
            fonts: FONTS,
            palette,
            text,
            units: UNITS
      };
};

export { createTheme };
