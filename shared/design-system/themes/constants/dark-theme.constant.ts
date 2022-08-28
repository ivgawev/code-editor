import { COLORS, createTheme, UNITS } from '#/foundation';

const DARK_THEME = createTheme({
      name: 'dark',
      palette: {
            primary: COLORS.GREY[500],
            secondary: COLORS.GREY[400],
            background: COLORS.GREY[800]
      },
      text: {
            types: {
                  h1: {
                        family: 'Roboto',
                        weight: 700,
                        size: UNITS[12],
                        lineHeight: UNITS[12],
                        letterSpacing: -1.5
                  },
                  p: {
                        family: 'Roboto',
                        weight: 500,
                        size: UNITS[4],
                        lineHeight: UNITS[4],
                        letterSpacing: -0.2
                  }
            },
            variants: {
                  primary: COLORS.GREY[0],
                  secondary: COLORS.GREY[500],
                  disabled: COLORS.GREY[700]
            },
            defaultFont: 'Roboto'
      }
});

export { DARK_THEME };
