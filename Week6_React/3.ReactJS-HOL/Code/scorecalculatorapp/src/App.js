import React from 'react';
import { CalculateScore } from './Components/CalculateScore'; // Adjust path if needed

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Anirban"
        School="Ramakrishna Mission High School"
        total={464}
        goal={500}
      />
    </div>
  );
}

export default App;
