// src/utils/gameLogic.js

// Directions for checking valid moves
const DIRECTIONS = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];
  
  // Check if a position is within the board boundaries
  const isValidPosition = (row, col) => {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  };
  
  // Create an initial game board
  export const createInitialBoard = () => {
    const board = Array(8).fill().map(() => Array(8).fill(' '));
    board[3][3] = 'W';
    board[3][4] = 'B';
    board[4][3] = 'B';
    board[4][4] = 'W';
    return board;
  };
  
  // Check if a move is valid and return flippable pieces
  export const getValidMove = (board, row, col, currentPlayer) => {
    if (board[row][col] !== ' ') {
      return { isValid: false, flips: [] };
    }
  
    const oppositePlayer = currentPlayer === 'B' ? 'W' : 'B';
    const flips = [];
  
    for (const [dx, dy] of DIRECTIONS) {
      let currentRow = row + dx;
      let currentCol = col + dy;
      const directionFlips = [];
  
      while (
        isValidPosition(currentRow, currentCol) && 
        board[currentRow][currentCol] === oppositePlayer
      ) {
        directionFlips.push([currentRow, currentCol]);
        currentRow += dx;
        currentCol += dy;
      }
  
      if (
        directionFlips.length > 0 &&
        isValidPosition(currentRow, currentCol) &&
        board[currentRow][currentCol] === currentPlayer
      ) {
        flips.push(...directionFlips);
      }
    }
  
    return {
      isValid: flips.length > 0,
      flips
    };
  };
  
  // Get all valid moves for the current player
  export const getValidMoves = (board, currentPlayer) => {
    const validMoves = [];
    
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (getValidMove(board, row, col, currentPlayer).isValid) {
          validMoves.push([row, col]);
        }
      }
    }
    
    return validMoves;
  };
  
  // Make a move and return the new board state
  export const makeMove = (board, row, col, currentPlayer) => {
    const { isValid, flips } = getValidMove(board, row, col, currentPlayer);
    
    if (!isValid) return null;
    
    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = currentPlayer;
    
    // Flip captured pieces
    for (const [flipRow, flipCol] of flips) {
      newBoard[flipRow][flipCol] = currentPlayer;
    }
    
    return newBoard;
  };
  
  // Calculate scores for both players
  export const calculateScores = (board) => {
    let black = 0;
    let white = 0;
    
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (board[row][col] === 'B') black++;
        if (board[row][col] === 'W') white++;
      }
    }
    
    return { black, white };
  };
  
  // Check if the game is over
  export const isGameOver = (board) => {
    return (
      getValidMoves(board, 'B').length === 0 &&
      getValidMoves(board, 'W').length === 0
    );
  };