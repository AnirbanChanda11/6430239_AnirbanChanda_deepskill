import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  // Assume 1 INR = 0.011 EUR (sample rate)
  const conversionRate = 0.011;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rupees === "" || isNaN(rupees)) {
      alert("Please enter a valid amount in Rupees.");
      return;
    }
    const converted = (rupees * conversionRate).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees:
          <input
            type="text"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            style={{ margin: "5px" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {euro && (
        <p>
          {rupees} INR = <b>{euro} EUR</b>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
