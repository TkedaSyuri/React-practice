import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    inComeColor: PaletteColor;
    expenseColor: PaletteColor;
    balanceColor: PaletteColor;
  }
  interface PaletteOptions {
    inComeColor?: PaletteColorOptions;
    expenseColor?: PaletteColorOptions;
    balanceColor?: PaletteColorOptions;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, Robot,"Helvetica Neue"',
  },
  palette: {
    inComeColor: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
    },
    expenseColor: {
      main: red[500],
      light: red[100],
      dark: red[700],
    },
    balanceColor: {
      main: green[500],
      light: green[100],
      dark: green[700],
    },
  },
});
