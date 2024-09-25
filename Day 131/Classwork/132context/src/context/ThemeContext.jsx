import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    themeName: 'light',
    backgroundColor: '#000000',
    textColor: '#ffffff'
  });

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };