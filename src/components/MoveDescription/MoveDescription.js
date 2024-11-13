// src/components/MoveDescription/MoveDescription.js
import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './MoveDescription.css';

const MoveDescription = () => {
  const { currentStep, moveDescriptions } = useContext(GameContext);
  
  return (
    <div className="move-description">
      {moveDescriptions[currentStep]}
    </div>
  );
};

export default MoveDescription;