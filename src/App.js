import { FC, useEffect, useState } from "react";
import "./styles.css";

const winScenarios = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const App: FC = () => {
  const [player, setPlayer] = useState(true);
  const [boardState, setBoardState] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('');

  const hanldeClick = (square: number) => () => {
    if (!boardState[square] && !winner) {
      setBoardState((prevState) => {
        const newState = [...prevState]
        newState[square] = player ? 'x' : 'o'
        return newState;
      })
      setPlayer((curPlayer) => !curPlayer);
    }
  };

  useEffect(() => {
    const hasWon = winScenarios.some(([a, b, c]) => boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    );
    if (hasWon) {
      setWinner(player ? 'o' : 'x');
    }
  }, [boardState, player])

  return (
    <div className="app">
      <header>
        <h1 data-testid="title">Tic Tac Toe</h1>
        {<h2 data-testid="winner">{winner &&  `${winner} is the winner!`}</h2>}
      </header>
      <main>
        <div className="board" data-testid="board">
          <div className="row">
            <div
              onClick={hanldeClick(0)}
              className="square"
              data-testid="square"
            >
              {boardState[0]}
            </div>
            <div
              onClick={hanldeClick(1)}
              className="square"
              data-testid="square"
            >
              {boardState[1]}
            </div>
            <div
              onClick={hanldeClick(2)}
              className="square"
              data-testid="square"
            >
              {boardState[2]}
            </div>
          </div>
          <div className="row">
            <div
              onClick={hanldeClick(3)}
              className="square"
              data-testid="square"
            >
              {boardState[3]}
            </div>
            <div
              onClick={hanldeClick(4)}
              className="square"
              data-testid="square"
            >
              {boardState[4]}
            </div>
            <div
              onClick={hanldeClick(5)}
              className="square"
              data-testid="square"
            >
              {boardState[5]}
            </div>
          </div>
          <div className="row">
            <div
              onClick={hanldeClick(6)}
              className="square"
              data-testid="square"
            >
              {boardState[6]}
            </div>
            <div
              onClick={hanldeClick(7)}
              className="square"
              data-testid="square"
            >
              {boardState[7]}
            </div>
            <div
              onClick={hanldeClick(8)}
              className="square"
              data-testid="square"
            >
              {boardState[8]}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
