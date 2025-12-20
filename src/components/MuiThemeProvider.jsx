import { observer } from "mobx-react-lite";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import themeStore from "../stores/themeStore";

const MuiThemeProvider = observer(({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeStore.theme, // "light" | "dark"
        },
      }),
    [themeStore.theme]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

export default MuiThemeProvider;
