import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {



  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`images/Dice/dice_${currentDice}.png`} alt="dice_1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
`;

export default RollDice;
