// const quotes = [
//     {
//       "author": "Albert Einstein",
//       "quote": "Imagination is more important than knowledge."
//     },
//     {
//       "author": "Mark Twain",
//       "quote": "The secret of getting ahead is getting started."
//     },
//     {
//       "author": "Maya Angelou",
//       "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
//     },
//     {
//       "author": "Steve Jobs",
//       "quote": "Your time is limited, don't waste it living someone else's life."
//     },
//     {
//       "author": "Nelson Mandela",
//       "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall."
//     },
//     {
//       "author": "Oprah Winfrey",
//       "quote": "The biggest adventure you can take is to live the life of your dreams."
//     },
//     {
//       "author": "Walt Disney",
//       "quote": "The way to get started is to quit talking and begin doing."
//     },
//     {
//       "author": "Eleanor Roosevelt",
//       "quote": "No one can make you feel inferior without your consent."
//     },
//     {
//       "author": "Martin Luther King Jr.",
//       "quote": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."
//     },
//     {
//       "author": "Mahatma Gandhi",
//       "quote": "Be the change that you wish to see in the world."
//     }
//   ]

// const blueQuoteElement = document.querySelector(".container--nested__blue-quote");
// const pinkAuthorElement = document.querySelector(".container--nested__pink-autor");
// const newQuoteBtn = document.querySelector(".btn");

// newQuoteBtn.addEventListener("click", generateRandomQuote);

// function generateRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const randomQuote = quotes[randomIndex];

//   blueQuoteElement.textContent = randomQuote.quote;
//   pinkAuthorElement.textContent = `- ${randomQuote.author}`;
// }

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