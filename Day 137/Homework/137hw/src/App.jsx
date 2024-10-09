import React, { useState, useContext, createContext } from 'react';

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme is: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// User Context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setUser({ name: 'John Doe' });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const UserComponent = () => {
  const { isLoggedIn, user, login, logout } = useContext(UserContext);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

// Language Context
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageComponent = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  const getMessage = () => {
    return language === 'en' ? 'Hello!' : '¡Hola!';
  };

  return (
    <div>
      <p>{getMessage()}</p>
      <button onClick={switchLanguage}>Switch Language</button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <div>
            <h1>My App</h1>
            <ThemeComponent />
            <UserComponent />
            <LanguageComponent />
          </div>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;