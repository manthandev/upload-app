import React from 'react';
import './App.css';
import {theme, ThemeProvider} from '@chakra-ui/core'
import Routes from './components/Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes/>
      </div>
    </ThemeProvider>
  
  );
}

export default App;
