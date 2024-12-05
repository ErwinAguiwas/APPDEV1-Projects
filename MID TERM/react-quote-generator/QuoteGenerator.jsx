import React, { useState } from 'react';

function QuoteGenerator() {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Do not be embarrassed by your failures, learn from them and start again.",
    "Your time is limited, so don’t waste it living someone else’s life."
  ];

  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([0]); 
  const [historyIndex, setHistoryIndex] = useState(0);


  const randomIndex = () => {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * quotes.length);
    } while (randomNum === index);

    setIndex(randomNum);
    
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory.slice(0, historyIndex + 1), randomNum];
      setHistoryIndex(newHistory.length - 1);
      return newHistory;
    });
  };


  const decrementIndex = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prevIndex) => prevIndex - 1);
      setIndex(history[historyIndex - 1]);
    }
  };



  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p style={{ fontSize: '1.5rem', margin: '20px' }}>{quotes[index]}</p>
      <button onClick={decrementIndex} style={{ marginRight: '10px' }} disabled={historyIndex === 0}>Previous</button>
      <button onClick={randomIndex}>Random</button>
    </div>
  );
}

export default QuoteGenerator;
