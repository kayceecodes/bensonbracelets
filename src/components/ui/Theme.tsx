import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const slateTan = '#b9ac92';// 0 Background
const slateBrown = '#4a3f35'// 1 Seconde BG
const goldenRodOrange = '#ffa931';// Highlight
const antiqueWhite = '#fbe6d4';// Brighter Highlight

declare module "@material-ui/core/styles/createTypography" {
  interface TypographyOptions {
    tab: {
      fontFamily: string,
      textTransform: string,
      fontWeight: number,
      fontSize: string,
    },
    container: {
      fontFamily: string,
      textTransform: string,
      fontWeight: number
      fontSize: string,
      color: string
    }
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface CommonColors {
    blue: string,
    tan: string,
    brown: string,
    orange: string,
    antiqueWhite: string
  }
}

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      tan: `${slateTan}`,
      brown: `${slateBrown}`,
      orange: `${goldenRodOrange}`,
      antiqueWhite: `${antiqueWhite}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    container: {
      color: '#c1c1c1',
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "0.8rem",
    }
  },
});
