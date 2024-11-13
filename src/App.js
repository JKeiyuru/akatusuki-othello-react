// src/App.js
import React from 'react';
import { GameProvider, GameContext } from './contexts/GameContext';
import { PlayableGameProvider } from './contexts/PlayableGamecontext';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import GameBoard from './components/GameBoard/GameBoard';
import Controls from './components/Controls/Controls';
import MoveDescription from './components/MoveDescription/MoveDescription';
import Rules from './components/Rules/Rules';
import Footer from './components/Footer/Footer';
import PlayableGameBoard from './components/PlayableGame/PlayableGameBoard';
import GameStatus from './components/PlayableGame/GameStatus';
import { initialState } from './constants/gameStates';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <Section title="Object of the Game">
        <p>
          The object of the game is to have the majority of discs facing up on the board showing
          one's own colour at the end of the game.
        </p>
      </Section>

      <Section title="A Minute to Learn...">
        <p className="learn-text">
          Each player takes 32 discs and chooses one colour to use throughout the game. Black places
          two black discs and White places two white discs in the initial position.
        </p>
        <GameBoard boardState={initialState} />
      </Section>

      <Rules />

      <GameProvider>
        <Section title="Game Tutorial">
          <GameContext.Consumer>
            {({ currentStep, gameStates }) => (
              <GameBoard boardState={gameStates[currentStep]} />
            )}
          </GameContext.Consumer>
          <Controls />
          <MoveDescription />
        </Section>
      </GameProvider>

      <PlayableGameProvider>
        <Section title="Play Othello">
          <p className="learn-text">
            Now that you've learned the rules, try playing a game! Black moves first. 
            Valid moves will be highlighted on the board. Click on a highlighted space to make your move.
          </p>
          <PlayableGameBoard />
          <GameStatus />
        </Section>
      </PlayableGameProvider>

      <Footer />
    </div>
  );
};

export default App;