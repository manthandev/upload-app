import React from 'react';
import './App.css';
import {theme, ThemeProvider, CSSReset} from '@chakra-ui/core'
import Main from './components/Main'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className="App">
        <Main/>
      </div>
    </ThemeProvider>
  
  );
}

export default App;
