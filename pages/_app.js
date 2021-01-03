import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, screenSizes } from "../theme";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const customTheme = {
    theme,
    ...screenSizes
  }

  return (
    <ThemeProvider theme={customTheme}>
      {isMounted && <Component {...pageProps} darkMode={darkMode} />}
    </ThemeProvider>
  );
}

export default MyApp;
