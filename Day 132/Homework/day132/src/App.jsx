import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { LanguageProvider } from "./LanguageContext";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <div>
            <HomePage />
            <UserPage />
          </div>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;