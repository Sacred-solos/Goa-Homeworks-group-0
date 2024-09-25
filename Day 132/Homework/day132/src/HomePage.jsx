import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";
import { LanguageContext } from "./LanguageContext";

function HomePage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
      <h2>User: {user.name}</h2>
      <p>Email: {user.email}</p>
      <h3>Language: {language}</h3>
      <button onClick={toggleLanguage}>Switch Language</button>
    </div>
  );
}

export default HomePage;