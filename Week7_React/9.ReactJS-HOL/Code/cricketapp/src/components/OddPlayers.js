import React from "react";

const OddPlayers = ({ IndianTeam }) => {
  const oddPlayers = IndianTeam.filter((_, index) => index % 2 === 0);
  return (
    <ul>
      {oddPlayers.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  );
};

export default OddPlayers;
