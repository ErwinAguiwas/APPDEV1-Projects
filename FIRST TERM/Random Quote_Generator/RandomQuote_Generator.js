const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "The best way to predict the future is to invent it. – Alan Kay",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}