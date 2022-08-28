import { Colors, Fonts, Units } from '#/foundation';

export namespace DesignSystem {
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
