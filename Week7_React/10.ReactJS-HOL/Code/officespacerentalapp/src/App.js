import React from "react";
import "./App.css";

function App() {
  // Office object
  const office = {
    name: "Skyline Business Center",
    rent: 70000,
    address: "123 Corporate Avenue, Bangalore",
    image: "https://www.shutterstock.com/image-photo/modern-openplan-office-clean-organized-260nw-2475760993.jpg",
  };

  // List of office spaces
  const offices = [
    {
      name: "Skyline Business Center",
      rent: 68000,
      address: "123 Corporate Avenue, Bangalore",
      image: "https://via.placeholder.com/300x200?text=Office+1",
    },
    {
      name: "City View Workspace",
      rent: 55000,
      address: "45 MG Road, Pune",
      image: "https://via.placeholder.com/300x200?text=Office+2",
    },
    {
      name: "Downtown Plaza",
      rent: 62000,
      address: "88 Nehru Street, Delhi",
      image: "https://via.placeholder.com/300x200?text=Office+3",
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Heading */}
      <h1> Office Space, at Affordable Range</h1>

      {/* Display one office object */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px auto", width: "400px" }}>
        <img src={office.image} alt="Office" style={{ width: "100%" }} />
        <h2>{office.name}</h2>
        <p
          style={{
            color: office.rent < 60000 ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          Rent: ₹{office.rent}
        </p>
        <p>{office.address}</p>
      </div>

      <hr />

      {/* Loop through list of offices */}
      <h2>Available Office Spaces</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {offices.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              margin: "10px",
              width: "250px",
              textAlign: "center",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "5px" }} />
            <h3>{item.name}</h3>
            <p
              style={{
                color: item.rent < 60000 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              Rent: ₹{item.rent}
            </p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
