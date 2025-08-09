import React from "react";

const ListofPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((p, i) => (
        <li key={i}>
          {p.name} - {p.score}
        </li>
      ))}
    </ul>
  );
};

export default ListofPlayers;

