import React from 'react';
import './GameBoard.css';

const GameBoard = ({ boardState }) => (
  <div className="game-board">
    <div className="board-grid">
      {boardState.map((row, i) =>
        row.map((cell, j) => (
          <div key={${i}-${j}} className="cell">
            <div className={disc ${cell === 'B' ? 'black' : cell === 'W' ? 'white' : ''}} />
          </div>
        ))
      )}
    </div>
  </div>
);

export default GameBoard;