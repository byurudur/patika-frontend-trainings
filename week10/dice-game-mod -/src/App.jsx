import { useState } from "react";
import "./App.css";

function App() {
  const [player1] = useState("Player 1");
  const [player2] = useState("Player 2");
  const [dice1, setDice1] = useState("dice1.png");
  const [dice2, setDice2] = useState("dice1.png");
  const [result, setResult] = useState("");



  function rollDice() {
    setResult("The Dice Are Rolling...");
    const diceFaces = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    let interval = setInterval(() => {
      setDice1(diceFaces[Math.floor(Math.random() * 6)]);
      setDice2(diceFaces[Math.floor(Math.random() * 6)]);
    }, 100);
  
    setTimeout(() => {
      clearInterval(interval);
      const player1Roll = Math.floor(Math.random() * 6) + 1;
      const player2Roll = Math.floor(Math.random() * 6) + 1;
      setDice1(diceFaces[player1Roll - 1]);
      setDice2(diceFaces[player2Roll - 1]);
  
      if (player1Roll > player2Roll) {
        setResult(`🚩 ${player1} Wons!`);
      } else if (player1Roll < player2Roll) {
        setResult(`${player2} Wons!  🚩`);
      } else {
        setResult("It's a Draw!");
      }
    }, 3000);
  }
  



  return (
    <div className="App">
      <h1>DICE GAME</h1>
      <div className="players">
        <h2>{player1}</h2>
        <h2>{player2}</h2>
      </div>
      <div className="dice">
        <img src={`/src/assets/${dice1}`} alt="Oyuncu 1 Zar" />
        <img src={`/src/assets/${dice2}`} alt="Oyuncu 2 Zar" />
      </div>
      <button onClick={rollDice}>Roll The Dice</button>
      <h2>{result}</h2>

      <footer>
    www 🎲 Dice Game 🎲 com
      </footer>
    </div>
  );
}

export default App;
