import React from "react";

function GuestPage({ onLogin }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome Guest</h1>
      <p>You can browse available flights, but you need to log in to book.</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default GuestPage;
