import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  dark: {
    primary: '#000'
  },
  light: {
    primary: '#fff'
  }
};

const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  background: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.light.primary};
  font-size: 20px;
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton>버튼</StyledButton>
    </ThemeProvider>
  );
}

export default App;
