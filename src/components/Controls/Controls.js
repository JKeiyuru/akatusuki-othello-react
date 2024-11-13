import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './Controls.css';

const Controls = () => {
  const { currentStep, setCurrentStep, gameStates } = useContext(GameContext);

  return (
    <div className="controls">
      <button
        onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
        className="control-button"
        disabled={currentStep === 0}
      >
        Previous Move
      </button>
      <button
        onClick={() => currentStep < gameStates.length - 1 && setCurrentStep(currentStep + 1)}
        className="control-button"
        disabled={currentStep === gameStates.length - 1}
      >
        Next Move
      </button>
    </div>
  );
};

export default Controls;
