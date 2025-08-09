import React from "react";

const ScoreBelow70 = ({ players }) => {
  const filtered = players.filter((p) => p.score < 70);
  return (
    <ul>
      {filtered.map((p, i) => (
        <li key={i}>
          {p.name} - {p.score}
        </li>
      ))}
    </ul>
  );
};

export default ScoreBelow70;

