import { createTheme } from "@mui/material/styles";
import { sizing } from "./sizing";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#303030",
      paper: "#373636",
    },
    primary: {
      main: "#60e8d0",
    },
    warning: {
      light: "rgb(299 155 40)",
      main: "#fa7910",
      dark: "#da5910",
    },
  },
  colors: {
    // yellow: "#faf910",
    // red: "#fa3040",
  },
  sizing: { ...sizing },
  borderRadius: {
    small: 4,
    medium: 8,
  },
  typography: {
    fontFamily: [
      "Quicksand",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 15,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export { theme };
