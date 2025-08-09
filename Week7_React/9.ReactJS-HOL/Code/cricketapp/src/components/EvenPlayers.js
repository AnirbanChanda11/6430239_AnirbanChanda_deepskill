import React from "react";

const EvenPlayers = ({ IndianTeam }) => {
  const evenPlayers = IndianTeam.filter((_, index) => index % 2 !== 0);
  return (
    <ul>
      {evenPlayers.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
