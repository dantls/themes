import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/themes'
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
     <Home />
    </ThemeProvider>
  );
}