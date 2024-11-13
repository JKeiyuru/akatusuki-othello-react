// src/components/Rules/Rules.js
import React from 'react';
import Section from '../Section/Section';
import './Rules.css';

const Rules = () => (
  <Section title="Othello Rules">
    <ol className="rules-list">
      <li>Black always moves first.</li>
      <li>
        If on your turn you cannot outflank and flip at least one opposing disc, your turn is forfeited
        and your opponent moves again. However, if a move is available to you, you may not forfeit your
        turn.
      </li>
      {/* ... rest of the rules */}
    </ol>
    <p className="rules-note">
      Note: It is possible for a game to end before all 64 squares are filled.
    </p>
  </Section>
);

export default Rules;