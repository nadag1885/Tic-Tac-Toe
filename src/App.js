import "./App.css";
import Player from "./Components/Player/Player.jsx";
import Bord from "./Components/GameBord/GameBord.jsx";
import { useState } from "react";
import Log from "./Components/Log/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const SelectkHandler = (rowIdx, colIdx) => {
    setActivePlayer(activePlayer === "X" ? "O" : "X");
    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";
      if (prevGameTurns.length > 0 && prevGameTurns[0].player == "X") {
        currentPlayer = "O";
      }
      console.log(currentPlayer);
      const updatedGameTurns = [
        { squar: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...gameTurns,
      ];
      return updatedGameTurns;
    });
  };

  return (
    <div className="App">
      <div className="playersBord">
        <Player
          playerName="player 1"
          symbol="X"
          isActive={activePlayer === "X" ? true : false}
        ></Player>
        <Player
          playerName="player 2"
          symbol="O"
          isActive={activePlayer === "O" ? true : false}
        ></Player>
      </div>
      <Bord turns={gameTurns} onSelectkHandler={SelectkHandler}></Bord>
      <Log></Log>
    </div>
  );
}

export default App;
