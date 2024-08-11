import React from "react";

interface InfoProps {
  currentTurn: number;
  timer: number;
  currentPlayer: "X" | "O";
}

const Info: React.FC<InfoProps> = ({ currentTurn, timer, currentPlayer }) => {
  return (
    <section className="p-4">
      <ul className="columns-3">
        <li>
          <strong>TURN</strong>
          <p>{currentTurn}</p> {/* 현재까지의 턴 수를 표시 */}
        </li>
        <li>
          <strong>Timer</strong>
          <p>{timer} seconds</p> {/* 타이머 표시 */}
        </li>
        <li>
          <strong>PLAYER</strong>
          <p>{currentPlayer}</p> {/* 현재 플레이어를 표시 */}
        </li>
      </ul>
    </section>
  );
};

export default Info;
