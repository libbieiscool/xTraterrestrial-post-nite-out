import React, { useEffect } from 'react';
import "../GamePage20/GamePage20.scss";
import fortuneData from "../../../Data/fortune.json";

const GamePage20b = () => {
  const fortunes = fortuneData; // Rename 'fortune' to 'fortunes'

  useEffect(() => {
    getRandomFortune();
  }, []); // Call getRandomFortune when the component mounts

  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.fortunes.length);
    const randomFortune = fortunes.fortunes[randomIndex].fortune;
    document.getElementById("fortuneDisplay").textContent = randomFortune;
  }

  return (
    <div className='body__block--character gamePage20'>
      <p id="fortuneDisplay"></p>
    </div>
  );
}

export default GamePage20b;
