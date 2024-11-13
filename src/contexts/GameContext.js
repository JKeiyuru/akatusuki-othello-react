// src/context/GameContext.js
import React, { createContext, useState } from 'react';
// import { initialState, sampleGameStates, moveDescriptions } from '../constants/gameStates';


import { sampleGameStates, moveDescriptions } from '../constants/gameStates';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const value = {
    currentStep,
    setCurrentStep,
    gameStates: sampleGameStates,
    moveDescriptions
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};