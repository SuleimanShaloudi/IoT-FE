import { createMuiTheme } from "@material-ui/core/styles";
import {
  MulishBoldWoff2Font,
  MulishRegularWoff2Font,
  MulishSemiBoldWoff2Font,
} from "../fonts/Fonts";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(0, 68, 125)",
    },
    secondary: {
      main: "#F14040",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    basicColors: {
      dodgerBlue: "#528CFC",
      white: "#fff",
      charade: "#252733",
      frenchGray: "#C5C7CD",
      santasGray: "#9FA2B4",
      santasGray2: "#A4A6B3",
      tuna: "#363740",
      alto: "#DDDDDD",
      fog: "#DDE2FF",
      osloGray: "#87888C",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      "MulishRegular",
      "MulishSemiBold",
      "MulishBold",
      "sans-serif",
    ].join(", "),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          MulishBoldWoff2Font,
          MulishRegularWoff2Font,
          MulishSemiBoldWoff2Font,
        ],
      },
    },
  },
});

export default theme;
