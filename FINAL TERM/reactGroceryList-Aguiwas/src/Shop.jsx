import React, { useState } from "react";

export default function Shop({ items }) {

  const [cart, setCart] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0);  
  const [amountPaid, setAmountPaid] = useState(0);  
  const [receipt, setReceipt] = useState(null);  

  function addItemToCart(item) {
    setCart(prevCart => [...prevCart, item]);  
    setTotalPrice(prevTotal => prevTotal + item.price);  
  }

  function handleCheckout() {
    if (amountPaid >= totalPrice) {
      const change = amountPaid - totalPrice;

      setReceipt({ items: cart, totalPrice, amountPaid, change });
      setCart([]);  
      setTotalPrice(0);  
      setAmountPaid(0);  
    } else {
      alert("Kulang ang binayad");
    }
  }

  function renderShopItems() {
    return items.map((item) => (
      <div key={item.id}>
        <li 
          onClick={() => addItemToCart(item)} 
          style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}
        >
          {item.name}
        </li>
        <p>Presyo bawat piraso: ₱{item.price}</p>
      </div>
    ));
  }

  function renderCartItems() {
    return cart.map((item, index) => (
      <div key={index}>
        <li>{item.name}</li>
        <p>Presyo bawat piraso: ₱{item.price}</p>
      </div>
    ));
  }

  return (
    <div>
      <h4>Pindutin ang panagalan ng item na bibilhin:</h4>
      <ul>{renderShopItems()}</ul> 
      <h4>--------------------------------------------------</h4>
      
      <h4>Mga Item sa Cart:</h4>
      <div className="cart-container">
        {cart.length > 0 ? renderCartItems() : <p>Walang mga item sa cart!</p>} 
      </div>
      
      <h4>Total Price: ₱{totalPrice.toFixed(2)}</h4>

      <div>
        <label>Amount Paid: ₱</label>
        <input
          type="number"
          
          onChange={(e) => setAmountPaid(Number(e.target.value))}
        />
        <button onClick={handleCheckout}>Proceed</button>
      </div>

      {receipt && (
        <div className="receipt">
          <h4>Receipt</h4>
          <ul>
            {receipt.items.map((item, index) => (
              <li key={index}>{item.name} - ₱{item.price}</li>
            ))}
          </ul>
          <p>Total Price: ₱{receipt.totalPrice.toFixed(2)}</p>
          <p>Amount Paid: ₱{receipt.amountPaid.toFixed(2)}</p>
          <p>Change: ₱{receipt.change.toFixed(2)}</p>
          <p>------------------------------------------------------------------</p>
          <p>Maraming salamat sa Iyong pagbili!</p>
        </div>
      )}
    </div>
  );
}
