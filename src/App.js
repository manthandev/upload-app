import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import {theme, ThemeProvider} from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider theme={theme}>
     <div className="App">
    <RegistrationForm/>
     </div>
    </ThemeProvider>
  
  );
}

export default App;
