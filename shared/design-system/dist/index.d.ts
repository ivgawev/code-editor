import { UNITS as UNITS$1 } from '#/foundation/units.foundation';
import { SCALES as SCALES$1 } from '#/foundation/scales.foundation';

declare const COLORS: {
    readonly BLUE: {
        readonly 0: "#EFF6FF";
        readonly 500: "#3B82F6";
        readonly 700: "#1D4ED8";
        readonly 800: "#1E40AF";
        readonly 900: "#1E3A8A";
    };
    readonly GREY: {
        readonly 0: "#E1E4E8";
        readonly 500: "#6A737D";
        readonly 700: "#24292E";
        readonly 800: "#1F2428";
        readonly 900: "#1C2024";
    };
    readonly ORANGE: {
        readonly 0: "#FFF7ED";
        readonly 500: "#F97316";
        readonly 700: "#C2410C";
        readonly 800: "#9A3412";
        readonly 900: "#7C2D12";
    };
    readonly YELLOW: {
        readonly 0: "#E1E4E8";
        readonly 500: "#FACC15";
        readonly 700: "#CA8A04";
        readonly 800: "#854D0E";
        readonly 900: "#713F12";
    };
};

declare const FONTS: {
    readonly ROBOTO: readonly [400, 500, 700];
};

declare enum SCALES {
    XXS = 0,
    XS = 1,
    SM = 2,
    MD = 3,
    LG = 4,
    XL = 5,
    XXL = 6
}

declare const UNITS: {
    readonly 0: 0;
    readonly 0.5: 0.125;
    readonly 1: 0.25;
    readonly 1.5: 0.375;
    readonly 2: 0.5;
    readonly 2.5: 0.625;
    readonly 3: 0.75;
    readonly 3.5: 0.875;
    readonly 4: 1;
    readonly 5: 1.25;
    readonly 6: 1.5;
    readonly 7: 1.75;
    readonly 8: 2;
    readonly 9: 2.25;
    readonly 10: 2.5;
    readonly 11: 2.75;
    readonly 12: 3;
    readonly 14: 3.5;
    readonly 16: 4;
    readonly 20: 5;
    readonly 24: 6;
    readonly 28: 7;
    readonly 32: 8;
    readonly 36: 9;
    readonly 40: 10;
    readonly 44: 11;
    readonly 48: 12;
    readonly 52: 13;
    readonly 56: 14;
    readonly 60: 15;
    readonly 64: 16;
    readonly 72: 18;
    readonly 80: 20;
    readonly 96: 24;
};

type Colors = typeof COLORS;

declare namespace DesignSystem {
      namespace Color {
            type Name = keyof Colors;
            type Scale = keyof Colors[Name];
            export type Value = Colors[Name][Scale];
      }

      namespace Font {
            type Name = keyof Fonts;
            export type Family = Capitalize<Lowercase<Name>>;
            export type Weight = Fonts[Name][number];
      }

      interface Palette {
            primary: Color.Value
            secondary: Color.Value
            background: Color.Value
      }

      namespace Unit {
            type Key = keyof Units;
            export type Value = Units[Key];
      }

      export interface Theme {
            name: string
            colors: Colors
            fonts: Fonts
            palette: Palette
            units: Units
            text: {
                  types: Text.Type
                  variants: Text.Variants
                  defaultFont: Font.Family
            }
      }

      namespace Text {
            type Element = 'h1' | 'p';

            export type Type = Readonly<{
                  [element in Element]: {
                        family: Font.Family
                        size: Unit.Value
                        weight: Font.Weight
                        lineHeight: Unit.Value
                        letterSpacing: number
                  }
            }>;

            export interface Variants {
                  primary: Color.Value
                  secondary: Color.Value
                  disabled: Color.Value
            }
      }
}

type Fonts = typeof FONTS;

type Scales = keyof typeof SCALES$1;

type Units = typeof UNITS$1;

declare namespace CreateTheme {
    type Params = Pick<DesignSystem.Theme, 'name' | 'palette' | 'text'>;
    type Result = Readonly<DesignSystem.Theme>;
    export type Function = (params: Params) => Result;
    export {};
}
declare const createTheme: CreateTheme.Function;

declare const DARK_THEME: Readonly<DesignSystem.Theme>;

export { COLORS, Colors, DARK_THEME, DesignSystem, FONTS, Fonts, SCALES, Scales, UNITS, Units, createTheme };
