import React from 'react';
import Profile from './Profile';
import { ThemeContext } from './ThemeContext';
const App = () => {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <Profile
          name="Nikolozi"
          surname="Popkhadze"
          email="examplenika@example.com"
          password="1213123123"
        />
      </ThemeContext.Provider>

      <ThemeContext.Provider value="dark">
        <Profile
          name="Luka"
          surname="Tskhvaradze"
          email="exampleluka@example.com"
          password="asdasdwadsa"
        />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;