import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    const quotes = [
      "Believe you can and you're halfway there.",
      "Do what you can with all you have.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Keep going, everything you need will come to you at the perfect time."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <p>{quote}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteGenerator;