import React, { useState } from "react";
import Shop from "./Shop";
import './App.css';




function App() {
  const [items] = useState([
    { id: 1, name: "Grapes", price: 1 },
    { id: 2, name: "Oranges", price: 1 },
    { id: 3, name: "Kiwis", price: 1 },
    { id: 4, name: "Bananas", price: 1 },
    { id: 5, name: "Cucumbers", price: 1 },
  ]);

  return (
    <div className="App">
      <h1>Erwin's Piso Fruit Shop</h1>
      <Shop items={items} />
    </div>
  );
}

export default App;
