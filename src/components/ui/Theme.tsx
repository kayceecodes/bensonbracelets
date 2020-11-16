import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const arcBlue = "#0B72B9";

const slateTan = "#b9ac92"; // 1 Background
const slateBrown = "#4a3f35"; // 2 Seconde BG
const goldenRodOrange = "#ffa225"; // 3 Highlight
const antiqueWhite = "#fbe6d4"; // 4 Brighter Highlight

// const antiquePeach = '#fbddd4';// Brighter Highlight
const dimegray = "#6e6656";
const dimGray = 'rgba(94,108,132, 0.95)'

const brightMudBrown = 'rgba(46,34,16, 1)'; // Highlight
// const cadetBlue = rgb(95,158,160)
const kitkatOrange = 'rgba(205,100,45, 1)'
const breakpoints = createBreakpoints({});

declare module "@material-ui/core/styles/createTypography" {
  interface TypographyOptions {
    tab: {
      fontFamily: string;
      textTransform: string;
      fontWeight: number;
      fontSize: string;
    };
    container: {
      fontFamily: string;
      textTransform: string;
      fontSize: string;
      color: string;
    };
    caption: {
      color: string;
      opacity?: string;
      fontFamily: string;
      fontWeight?: number;
      fontSize: string;
      textTransform?: string;
      textAlign?: string;
      margin?: string;
    };
    caption2: {
      color: string;
      opacity?: string;
      fontFamily: string;
      fontWeight?: number;
      fontSize: string;
      textTransform?: string;
      textAlign?: string;
      margin?: string;
    };
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface CommonColors {
    blue: string
    slateTan: string
    brown: string
    orange: string
    antiqueWhite: string
    dimegray: string
    brightMudBrown: string
    kitkatOrange: string,
    dimGray: string
  }
}

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      slateTan: `${slateTan}`,
      brown: `${slateBrown}`,
      orange: `${goldenRodOrange}`,
      antiqueWhite: `${antiqueWhite}`,
      dimegray: `${dimegray}`,
      brightMudBrown: `${brightMudBrown}`,
      kitkatOrange: `${kitkatOrange}`,
      dimGray: `${dimGray}`,
    },
    primary: {
      main: `${slateTan}`,
      // main: white,
    },
    secondary: {
      main: `${goldenRodOrange}`,
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
       
      },
    },
  },
  typography: { // Typography take priority over classes objects for the classNames.
    h2: {
      fontFamily: 'Raleway',
      color: dimegray,
      fontSize: "1.65rem",
      letterSpacing: '0.6px',
      wordSpacing: '3.5px',
    },
    h3: {
      fontFamily: 'Raleway',
      color: dimegray,
      fontSize: "1.15rem",
      letterSpacing: '0.5px',
      [breakpoints.up("sm")]: {
        fontSize: '1.45rem'
      },
    },
    h4: {
      fontFamily: 'Raleway',
      color: dimegray,
      fontSize: "0.9rem",
      letterSpacing: '0.2px',
      [breakpoints.up("sm")]: {
        fontSize: '1.05rem'
      },
    },
    tab: {
      fontFamily: "Lora",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    container: {
      color: "#c1c1c1",
      fontFamily: "Lora",
      textTransform: "none",
      fontSize: "0.8rem",
    },
    caption: {
      color: dimegray,
      opacity: '0.9',
      fontFamily: 'Roboto',
      fontSize: '0.85rem',
      fontWeight: 400,
      textAlign: 'center',
      margin: '0px auto',
      textTransform: 'none',
    },
    caption2: {
      color: dimegray,
      opacity: '0.9',
      fontFamily: 'Raleway',
      fontSize: '0.95rem',
      fontWeight: 400,
      textAlign: 'center',
      textTransform: 'none',
      // margin: '0px auto',
    },
    body1: {
      color: dimegray,
      fontSize: '0.8rem',
      fontFamily: 'Roboto',
      lineHeight: 1.6,
      [breakpoints.up("sm")]: {
        fontSize: '1rem'
      },
    },
    body2: {
      color: dimGray,
      fontSize: '0.75rem',
      fontFamily: 'Roboto',
      lineHeight: 1.55,
      [breakpoints.up("sm")]: {
        fontSize: '0.85rem'
      },
    },
  },
})
