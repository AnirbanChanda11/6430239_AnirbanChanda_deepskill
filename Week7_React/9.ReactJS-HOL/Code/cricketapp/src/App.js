import React from "react";
import ListofPlayers from "./components/ListofPlayers";
import ScoreBelow70 from "./components/Scorebelow70";
import OddPlayers from "./components/OddPlayers";
import EvenPlayers from "./components/EvenPlayers";
import ListofIndianPlayers from "./components/ListofIndianPlayers";

function App() {
  var flag = true; // Change this to true or false to see both outputs

  // Players array
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 65 },
    { name: "KL Rahul", score: 78 },
    { name: "Shubman Gill", score: 45 },
    { name: "Shreyas Iyer", score: 90 },
    { name: "Rishabh Pant", score: 55 },
    { name: "Hardik Pandya", score: 88 },
    { name: "Ravindra Jadeja", score: 40 },
    { name: "Mohammed Shami", score: 72 },
    { name: "Jasprit Bumrah", score: 50 },
    { name: "Kuldeep Yadav", score: 82 },
  ];

  // Indian team array
  const IndianTeam = [
    "Virat Kohli",
    "Rohit Sharma",
    "KL Rahul",
    "Shubman Gill",
    "Shreyas Iyer",
    "Rishabh Pant",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Mohammed Shami",
    "Jasprit Bumrah",
    "Kuldeep Yadav",
  ];

  // T20 and Ranji Players
  var T20players = ["Suryakumar Yadav", "Ishan Kishan", "Axar Patel"];
  var RanjiPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane"];
  var IndianPlayers = [...T20players, ...RanjiPlayers];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <OddPlayers IndianTeam={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers IndianTeam={IndianTeam} />
        </div>
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    )
  }
}

export default App;

