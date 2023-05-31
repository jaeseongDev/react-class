import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: "rgb(128,209,236)",
    secondary: "rgb(0,136,152)",
    tertiary: "rgb(1,84,96)",
  }
}

const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
