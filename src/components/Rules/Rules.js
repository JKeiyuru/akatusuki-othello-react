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
      <img src="./Assets/othello3.png"/>
                <p class="figures"> Figure 2: Disc displayed</p>
                <img src="./Assets/othello4.png"/>
                <p class="figures"> Figure 3:These discs flipped</p>
                <li>Players may not skip over their own colour disc(s) to outflank an opposing disc.</li>
                <img src="./Assets/othello5.png"/>
                <p class="figures">Figure 4: This disc outflanks and flips White disc 1 ONLY.</p>
                <li>Disc(s) may only be outflanked as a direct result of a move and must fall in the direct line of the disc placed down.</li>
                <img src="./Assets/othello6.png"/>
                <p class="figures">Figure 5: Disc placed here</p>
                <img src="./Assets/othello7.png"/>
                <p class="figures">Figure 6: These 2 discs flipped.Discs 1 and 2 are not flipped (even though they appear to be outflanked).</p>
                <li>All discs outflanked in any one move must be flipped, even if it is to the player's advantage not to flip them at all.</li>
                <li>Once a disc is placed on a square, it can never be moved to another square later in the game.</li>
                <li>When it is no longer possible for either player to move, the game is over. Discs are counted and the player with the majority of their colour showing is the winner.</li>
    </ol>
    <p className="rules-note">
      Note: It is possible for a game to end before all 64 squares are filled.
    </p>
  </Section>
);

export default Rules;