import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children, initialTheme }) => {
  return (
    <ThemeContext.Provider value={initialTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, padding: '20px' }}>
      <p>The current theme background is: {theme.backgroundColor}</p>
    </div>
  );
};

export { ThemeProvider, ThemedComponent };