import React from 'react'
import "../GamePage18/GamePage18.scss"; 
import "../../GameOver/GameOver.scss"; 
import { useState } from 'react'; 
import GameOver from '../../GameOver/GameOver';
import { Link } from 'react-router-dom';

const GamePage18 = () => {
  
  return (
    <div className='gameOver body__block'>
   
     <GameOver/>
 
     <p className='gameOver__subtext'> In your quest to embrace communism, you completely forget about your quest to go home. You have bigger fish to fry than sleeping in a comfortable bed. </p>
    
    <Link to={`/page13`}>
     <button className='gameOver__button'>Try Again</button>
    </Link>
      
    </div>
  )
}

export default GamePage18
