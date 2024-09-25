import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Component2 = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div>
      <h2>{isEnglish ? 'Component 2' : 'კომპონენტი 2'}</h2>
      <p>
        {isEnglish
          ? 'This is the second component.'
          : 'ეს არის მეორე კომპონენტი.'}
      </p>
    </div>
  );
};

export default Component2;