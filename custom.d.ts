import { Color } from "@mui/material";
import { ThemeProvider } from "@mui/system";

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeProvider {
    colors: {
      yellow?: Color;
      red?: Color;
    };
    borderRadius: {
      small: number;
      medium: number;
    };
    sizing: {
      scale0: string;
      scale100: string;
      scale200: string;
      scale250: string;
      scale300: string;
      scale400: string;
      scale500: string;
      scale550: string;
      scale600: string;
      scale650: string;
      scale700: string;
      scale750: string;
      scale800: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      yellow?: Color;
      red?: Color;
    };
    borderRadius: {
      small: number;
      medium: number;
    };
    sizing: {
      scale0: string;
      scale100: string;
      scale200: string;
      scale250: string;
      scale300: string;
      scale400: string;
      scale500: string;
      scale550: string;
      scale600: string;
      scale650: string;
      scale700: string;
      scale750: string;
      scale800: string;
    };
  }
}
