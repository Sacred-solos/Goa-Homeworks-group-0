import React from 'react';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = React.useState(false);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};