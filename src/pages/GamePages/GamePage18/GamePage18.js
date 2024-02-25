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
 
     <p className='gameOver__subtext'> You joined the communist party in hopes of wooing the handsome leader, but even YOU were not immune to his behaviour of being a Serial Cheater... </p>
    
    <Link to={`/page13`}>
     <button className='gameOver__button'>Try Again</button>
    </Link>
      
    </div>
  )
}

export default GamePage18
