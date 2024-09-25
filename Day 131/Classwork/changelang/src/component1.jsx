import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Component1 = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div>
      <h2>{isEnglish ? 'Component 1' : 'კომპონენტი 1'}</h2>
      <p>
        {isEnglish
          ? 'This is the first component.'
          : 'ეს არის პირველი კომპონენტი.'}
      </p>
    </div>
  );
};

export default Component1;