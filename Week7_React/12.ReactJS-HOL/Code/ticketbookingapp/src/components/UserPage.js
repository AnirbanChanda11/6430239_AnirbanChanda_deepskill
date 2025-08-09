import React from "react";

function UserPage({ onLogout }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome Back!</h1>
      <p>You can now book tickets.</p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
