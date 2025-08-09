import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Method 1: Increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Method 2: Say Hello with message
  const sayHello = () => {
    alert("Hello! Member1.");
  };

  // Method for Decrement
  const decrementCount = () => {
    setCount(count - 1);
  };

  // Method with parameter
  const sayMessage = (msg) => {
    alert(msg);
  };

  // Synthetic event example
  const handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  // Increase button that invokes multiple methods
  const handleIncreaseClick = () => {
    incrementCount();
    sayHello();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Event Examples App</h1>

      {/* Counter Display */}
      <h2>Counter: {count}</h2>

      {/* Increment button (multiple methods) */}
      <button onClick={handleIncreaseClick} style={{ margin: "5px" }}>
        Increment
      </button>

      {/* Decrement button */}
      <button onClick={decrementCount} style={{ margin: "5px" }}>
        Decrement
      </button>

      <hr />

      {/* Button with parameter */}
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>

      <hr />

      {/* Synthetic event */}
      <button onClick={handleClick}>OnPress</button>

      <hr />

      {/* Currency Convertor Component */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
