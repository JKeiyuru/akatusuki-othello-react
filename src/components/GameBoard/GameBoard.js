import React from 'react';
import './GameBoard.css';

function GameBoard({ boardState }) {
  return (
    <div className="game-board">
      {boardState.map((row, rowIndex) => (
        row.map((cell, cellIndex) => (
          <div key={${rowIndex}-${cellIndex}} className="cell">
            <div className={disc ${cell === 'B' ? 'black' : cell === 'W' ? 'white' : ''}}></div>
          </div>
        ))
      ))}
    </div>
  );
}

export default GameBoard;