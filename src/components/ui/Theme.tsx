import { createMuiTheme } from "@material-ui/core/styles";
import { white } from "material-ui/styles/colors";

const arcBlue = "#0B72B9";

const slateTan = "#b9ac92"; // 1 Background
const slateBrown = "#4a3f35"; // 2 Seconde BG
const goldenRodOrange = "#ffa931"; // 3 Highlight
const antiqueWhite = "#fbe6d4"; // 4 Brighter Highlight

// const antiquePeach = '#fbddd4';// Brighter Highlight
const dimegray = "#6e6656";
// const brightMudBrown = '#523906'; // Highlight

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
    p: {
      color: string;
      fontFamily: string;
      textTransform?: string;
      fontWeight?: number;
      fontSize: string;
      textAlign?: string;
      margin?: string;
    };
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface CommonColors {
    blue: string;
    slateTan: string;
    brown: string;
    orange: string;
    antiqueWhite: string;
    dimegray: string;
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
    },
    primary: {
      main: `${slateTan}`,
      // main: white,
    },
    secondary: {
      main: `${goldenRodOrange}`,
    },
  },
  typography: {
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
    p: {
      color: dimegray,
      fontFamily: 'Raleway',
      fontSize: '0.85rem',
      fontWeight: 400,
      textAlign: 'center',
      margin: '0px auto',
    },
  },
});
