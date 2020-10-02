import React from 'react';
import './App.css';
import {theme, ThemeProvider, CSSReset} from '@chakra-ui/core'
import Routes from './components/Routes'
import Header from './components/Header';

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      <div className="App">
        <Routes/>
      </div>
    </ThemeProvider>
  
  );
}

export default App;
