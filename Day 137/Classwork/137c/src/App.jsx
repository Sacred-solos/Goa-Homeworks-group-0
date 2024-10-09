import React from 'react';
import { ThemeProvider, ThemedComponent } from './ThemeContext.jsx';

const App = () => {
  const lightTheme = { backgroundColor: 'lightgray' };
  const darkTheme = { backgroundColor: 'darkgray' };

  return (
    <div>
      <ThemeProvider initialTheme={lightTheme}>
        <ThemedComponent />
      </ThemeProvider>

      <ThemeProvider initialTheme={darkTheme}>
        <ThemedComponent />
      </ThemeProvider>
    </div>
  );
};

export default App;