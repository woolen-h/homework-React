import React, { useState, useEffect } from "react";

type Player = "🍒" | "🍋" | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("🍒");
  const [currentTurn, setCurrentTurn] = useState<number>(1);
  const [timer, setTimer] = useState<number>(10);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!isGameStarted || isGameOver) return;

    console.log("타이머 설정중...");

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        console.log(`Timer: ${prevTimer}`);
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          console.log("Timer expired, changing player and resetting timer");
          setCurrentTurn((prevTurn) => prevTurn + 1);
          setCurrentPlayer((prevPlayer) => (prevPlayer === "🍒" ? "🍋" : "🍒"));
          return 10;
        }
      });
    }, 1000);

    return () => {
      console.log("Clearing the timer...");
      clearInterval(intervalId);
    };
  }, [currentPlayer, isGameStarted, isGameOver]);

  const handleClick = (index: number) => {
    if (isGameOver || board[index]) return;

    console.log(`Cell ${index} clicked, current player: ${currentPlayer}`);

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setIsGameOver(true);
      alert(`${currentPlayer} wins!`);
    } else if (newBoard.every((cell) => cell)) {
      setIsGameOver(true);
      alert(`It's a draw!`);
    } else {
      setCurrentPlayer((prevPlayer) => (prevPlayer === "🍒" ? "🍋" : "🍒"));
      setCurrentTurn((prevTurn) => prevTurn + 1);
      setTimer(10);
    }
  };

  const checkWin = (board: Player[]): boolean => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some(([a, b, c]) => {
      return board[a] && board[a] === board[b] && board[a] === board[c];
    });
  };

  const renderCell = (index: number) => {
    return (
      <div
        className="w-24 h-24 flex items-center justify-center text-2xl border border-orange-300 cursor-pointer bg-white rounded-sm"
        onClick={() => handleClick(index)}
        key={index}
      >
        {board[index]}
      </div>
    );
  };

  const startGame = () => {
    setIsGameStarted(true);
    setIsGameOver(false);
    setBoard(Array(9).fill(null));
    setCurrentPlayer("🍒");
    setCurrentTurn(1);
    setTimer(10);
  };

  return (
    <>
      {!isGameStarted ? (
        <div className="min-w-80 bg-orange-100 mr-5 px-32 py-48 text-center">
          <button
            className="bg-orange-500 text-white p-3 rounded"
            onClick={startGame}
          >
            Start Game
          </button>
        </div>
      ) : (
        <section className="min-w-80 p-10 bg-orange-50 border-orange-200 border rounded-lg">
          <div className="grid grid-cols-3 gap-2 items-center text-orange-400">
            <div>
              <h2 className="text-center font-semibold text-xs bg-orange-400 text-white px-2 py-1 rounded-xl">
                현재 플레이어
              </h2>
              <p className="mt-2 text-center leading-tight">{currentPlayer}</p>
            </div>
            <div>
              <h2 className="text-center font-semibold text-xs bg-orange-400 text-white px-2 py-1 rounded-xl">
                타이머
              </h2>
              <p className="text-center leading-tight mt-2">{timer}</p>
            </div>
            <div>
              <h2 className="text-center font-semibold text-xs bg-orange-400 text-white px-2 py-1 rounded-xl">
                턴
              </h2>
              <p className="text-center leading-tight mt-2">{currentTurn}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5">
            {board.map((_, index) => renderCell(index))}
          </div>
        </section>
      )}
    </>
  );
};

export default TicTacToe;
