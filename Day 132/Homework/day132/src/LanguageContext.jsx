import React, { createContext, useState } from "react";

export const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "english" ? "georgian" : "english"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};