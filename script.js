const quoteText = document.querySelector('.quote-text');
const author = document.querySelector('.author');
const newQuoteButton = document.querySelector('.new-quote-button');
const twitterButton = document.querySelector('.twitter-button');

// Function to fetch a random quote from the API
async function getQuote() {
    try {
        const response = await fetch('https://type.fit/api/quotes?ref=hackernoon.com');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        quoteText.textContent = randomQuote.text;
        author.textContent = randomQuote.author || 'Unknown';
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Function to tweet the current quote
function tweetQuote() {
    const text = quoteText.textContent;
    const authorName = author.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text="${text}" - ${authorName}`;
    window.open(tweetUrl, '_blank');
}

// Event listeners
newQuoteButton.addEventListener('click', getQuote);
twitterButton.addEventListener('click', tweetQuote);

// Initial load
getQuote();
