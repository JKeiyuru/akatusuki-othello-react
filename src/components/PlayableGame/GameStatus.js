// src/components/PlayableGame/GameStatus.js
import React, { useContext } from 'react';
import { PlayableGameContext } from '../../contexts/PlayableGameContext';

const GameStatus = () => {
  const { currentPlayer, scores, gameOver, resetGame } = useContext(PlayableGameContext);

  return (
    <div className="flex flex-col items-center gap-4 my-4">
      <div className="flex gap-8 text-lg">
        <div>
          Black: {scores.black}
        </div>
        <div>
          White: {scores.white}
        </div>
      </div>
      
      {gameOver ? (
        <div className="text-xl font-bold">
          Game Over! {scores.black > scores.white ? 'Black' : scores.white > scores.black ? 'White' : 'Nobody'} wins!
        </div>
      ) : (
        <div className="text-xl">
          Current Turn: {currentPlayer === 'B' ? 'Black' : 'White'}
        </div>
      )}
      
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        New Game
      </button>
    </div>
  );
};

export default GameStatus;