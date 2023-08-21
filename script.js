
// Quote Element
const blueQuoteElement = document.querySelector(
  '.container--nested__blue-quote'
);
// Author Element
const pinkAuthorElement = document.querySelector(
  '.container--nested__pink-autor'
);
// Generate Quote Button
const newQuoteBtn = document.querySelector('.btn');

newQuoteBtn.addEventListener('click', generateQuote);

// Created the function
async function generateQuote() {
const randomNumber = Math.floor(Math.random() * 100);
const response = await fetch(`https://dummyjson.com/quotes/${randomNumber}`);
const data = await response.json();

blueQuoteElement.textContent = data.quote;
pinkAuthorElement.textContent = data.author;
}

// Called the function
generateQuote();