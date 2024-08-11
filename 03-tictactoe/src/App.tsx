import React, { useState, useEffect } from "react";
import Layout from "./components/layouts/Layout";
import TicTacToe from "./components/TicTacToe";
import Chat from "./components/Chat";

type Player = "🍒" | "🍋";

const App: React.FC = () => {
  const [currentTurn, setCurrentTurn] = useState<number>(1);
  const [timer, setTimer] = useState<number>(20);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("🍒");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setCurrentTurn((prevTurn) => prevTurn + 1);
          setCurrentPlayer((prevPlayer) => (prevPlayer === "🍒" ? "🍋" : "🍒"));
          return 20;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentPlayer]);

  return (
    <Layout>
      <div className="flex justify-center items-start gap-5 p-5">
        <TicTacToe
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          setCurrentTurn={setCurrentTurn}
          setTimer={setTimer}
        />
        <Chat />
      </div>
    </Layout>
  );
};

export default App;
