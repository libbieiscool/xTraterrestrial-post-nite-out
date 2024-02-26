import React, { useEffect, useState} from 'react';
import "../GamePage20/GamePage20b.scss";
import fortuneData from "../../../Data/fortune.json";
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
const GamePage20b = () => {
  const fortunes = fortuneData; 

  useEffect(() => {
    getRandomFortune();
  }, []);

  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.fortunes.length);
    const randomFortune = fortunes.fortunes[randomIndex].fortune;
    document.getElementById("fortuneDisplay").textContent = randomFortune;
  }

  const [optionA, setOptionA] = useState(
    { text:"get another fortune"}
   )
 
 const[optionB, setOptionB] = useState(
     {text:"go home"}
   )

  return (
    <div className='body__block gamePage20b'>
      <p className='gamePage20b__fortune floating' id="fortuneDisplay"></p>

      <div className='gamePage20b__options'>
       <Link to={`/end`}>
            <div className='gamePage20b__optionB'>
            <OptionBButton optionB={optionB}/> 
            </div>
       </Link>
      </div>

    </div>


  );
}

export default GamePage20b;
