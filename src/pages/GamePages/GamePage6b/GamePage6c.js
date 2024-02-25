import React from 'react'
import '../../GameOver/GameOver.scss'
import GameOver from '../../GameOver/GameOver';
import { Link } from 'react-router-dom';

const GamePage6c = () => {
  return (
    <div className='gameOver body__block'>
     
    <GameOver/>

    <p className='gameOver__subtext'> NO ONE is going to buy a cigarette from a stranger for $5! Wishful thinking to say the least. Spend some time and think about your relationship to money that made you think that was ok.  </p>
   
   <Link to={`/page5a`}>
    <button className='gameOver__button'>Try Again</button>
   </Link>

</div>
  )
}

export default GamePage6c
