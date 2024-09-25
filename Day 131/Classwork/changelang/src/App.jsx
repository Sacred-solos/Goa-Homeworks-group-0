import React from 'react';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import Component1 from './Component1';
import Component2 from './component2';

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSwitch />
        <Component1 />
        <Component2 />
      </div>
    </LanguageProvider>
  );
};

const LanguageSwitch = () => {
  const { isEnglish, setIsEnglish } = React.useContext(LanguageContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isEnglish}
          onChange={() => setIsEnglish(!isEnglish)}
        />
        {isEnglish ? 'English' : 'ქართული'}
      </label>
    </div>
  );
};

export default App;

