// src/components/PlayableGame/PlayableGameBoard.js
import React, { useContext } from 'react';
import { PlayableGameContext } from '../../contexts/PlayableGameContext';
import './PlayableGameBoard.css';

const PlayableGameBoard = () => {
  const { board, validMoves, handleMove, currentPlayer } = useContext(PlayableGameContext);

  const isValidMove = (row, col) => {
    return validMoves.some(([r, c]) => r === row && c === col);
  };

  return (
    <div className="game-board">
      <div className="board-grid">
        {board.map((row, i) => 
          row.map((cell, j) => (
            <div 
              key={`${i}-${j}`} 
              className={`cell ${isValidMove(i, j) ? 'valid-move' : ''}`}
              onClick={() => isValidMove(i, j) ? handleMove(i, j) : null}
            >
              <div className={`disc ${cell === 'B' ? 'black' : cell === 'W' ? 'white' : ''}`} />
              {isValidMove(i, j) && (
                <div className={`valid-move-indicator ${currentPlayer.toLowerCase()}`} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PlayableGameBoard;