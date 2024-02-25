import React from 'react'
import "../GamePage19/GamePage19.scss"
import "../../GameOver/GameOver.scss"; 
import { useState } from 'react'; 
import GameOver from '../../GameOver/GameOver';
import { Link } from 'react-router-dom';

const GamePage19 = () => {
  return (
 
    <div className='gameOver body__block'>
   
    <GameOver/>

    <p className='gameOver__subtext'> I mean, this is kind of a win because you made it home. But also not a win because you had to endure the psychic damage of hanging out with this woman and her weird straight gym-pilled boyfriend for 30 minutes. Also, you already said 'yes' to going to brunch with her next weekend because you were too polite to say no.  </p>
    
    <Link to={`/page13`}>
    <button className='gameOver__button'>Try Again</button>
    </Link>
    
  </div>
   
  )
}

export default GamePage19
