
const quotes = [
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky"
];

function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerText = quotes[randomNumber];
}

document.getElementById('newQuoteBtn').addEventListener('click', generateQuote);

generateQuote();