import { observer } from "mobx-react-lite";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import themeStore from "../stores/themeStore";

const MuiThemeProvider = observer(({ children }) => {
  const mode = themeStore.theme;
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

export default MuiThemeProvider;
