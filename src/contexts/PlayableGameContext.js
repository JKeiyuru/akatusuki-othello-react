// src/contexts/PlayableGameContext.js
import React, { createContext, useState, useCallback } from 'react';
import { getValidMove, getValidMoves, makeMove, calculateScores, isGameOver } from '../utils/gameLogic';

export const PlayableGameContext = createContext();

const createInitialBoard = () => ([
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
  [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
]);

export const PlayableGameProvider = ({ children }) => {
  const [board, setBoard] = useState(createInitialBoard());
  const [currentPlayer, setCurrentPlayer] = useState('B'); // Black starts
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({ black: 2, white: 2 });
  const [validMoves, setValidMoves] = useState(getValidMoves(createInitialBoard(), 'B'));

  const updateGameState = useCallback((newBoard) => {
    const nextPlayer = currentPlayer === 'B' ? 'W' : 'B';
    const newValidMoves = getValidMoves(newBoard, nextPlayer);
    
    // Update scores
    const newScores = calculateScores(newBoard);
    setScores(newScores);

    // Check if game is over or if player must pass
    if (newValidMoves.length === 0) {
      const currentPlayerValidMoves = getValidMoves(newBoard, currentPlayer);
      if (currentPlayerValidMoves.length === 0) {
        setGameOver(true);
      }
    } else {
      setCurrentPlayer(nextPlayer);
      setValidMoves(newValidMoves);
    }

    setBoard(newBoard);
  }, [currentPlayer]);

  const handleMove = useCallback((row, col) => {
    if (gameOver) return;

    const newBoard = makeMove(board, row, col, currentPlayer);
    if (newBoard) {
      updateGameState(newBoard);
    }
  }, [board, currentPlayer, gameOver, updateGameState]);

  const resetGame = useCallback(() => {
    const initialBoard = createInitialBoard();
    setBoard(initialBoard);
    setCurrentPlayer('B');
    setGameOver(false);
    setScores({ black: 2, white: 2 });
    setValidMoves(getValidMoves(initialBoard, 'B'));
  }, []);

  const value = {
    board,
    currentPlayer,
    gameOver,
    scores,
    validMoves,
    handleMove,
    resetGame
  };

  return (
    <PlayableGameContext.Provider value={value}>
      {children}
    </PlayableGameContext.Provider>
  );
};