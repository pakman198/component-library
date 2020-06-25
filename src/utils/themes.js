import { primary, text, neutral, yellow, red, green } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
    primaryColor: primary[400],
    primaryColorHover: primary[100],
    primaryColorActive: primary[100],
    textColorOnPrimary:  text.inverted,
    textColor: text.normal,
    textColorInverted: text.inverted,
    disabled: primary[100],
    textOnDisabled: neutral[400],
    white: text.inverted,
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
}