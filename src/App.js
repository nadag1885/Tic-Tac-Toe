import "./App.css";
import Player from "./Components/Player/Player.jsx";
import GameBord from "./Components/GameBord/GameBord.jsx";
import { useState } from "react";
import Log from "./Components/Log/Log.jsx";
import { WINING_COMPITITION } from "./Components/WinningCompitition.js";
import GameOver from "./Components/GameOver/GameOver";

const Bord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handelRestart = () => {
    setGameTurns([]);
    setActivePlayer("X");
  };

  let gameBord = [...Bord.map((innerArray) => [...innerArray])];
  // let gameBord = Bord;
  for (const turn of gameTurns) {
    const { squar, player } = turn;
    const { row, col } = squar;
    gameBord[row][col] = player;
  }

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
  let winner = null;
  for (const combination of WINING_COMPITITION) {
    const firstSquar = gameBord[combination[0].row][combination[0].col];
    const secondSquar = gameBord[combination[1].row][combination[1].col];
    const thirdSquar = gameBord[combination[2].row][combination[2].col];
    if (firstSquar && firstSquar == secondSquar && firstSquar == thirdSquar) {
      console.log(`${firstSquar} is the winner`);
      winner = firstSquar;
    }
  }
  const isDraw = gameTurns.length >= 9 && !winner;
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
      <GameBord
        turns={gameTurns}
        onSelectkHandler={SelectkHandler}
        bord={gameBord}
      ></GameBord>
      {(winner || isDraw) && (
        <GameOver winner={winner} handelRestart={handelRestart}></GameOver>
      )}
    </div>
  );
}
