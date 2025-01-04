import { createTheme } from "@mui/material";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(163, 126, 44)",
    },
    secondary: {
      main: "#0b3e27",
      light: "#61BD93",
    },
  },
  typography: {
    fontFamily: bodoni.className,
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
