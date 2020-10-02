import React from 'react';
import './App.css';
import {theme, ThemeProvider, CSSReset} from '@chakra-ui/core'
import Routes from './components/Routes'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className="App">
        <Routes/>
      </div>
    </ThemeProvider>
  
  );
}

export default App;
