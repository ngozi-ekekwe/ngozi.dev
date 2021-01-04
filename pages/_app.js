import React, { useState, useEffect } from "react";
import CreateGlobalStyle from '../utils/globalStyles';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, screenSizes } from "../theme";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const [ currentTheme, setCurrentTheme ] = useState('light');
  const theme = (currentTheme === 'light') ? lightTheme : darkTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const customTheme = {
    ...theme,
    ...screenSizes
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CreateGlobalStyle />
      {isMounted && <Component {...pageProps} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />}
    </ThemeProvider>
  );
}

export default MyApp;
