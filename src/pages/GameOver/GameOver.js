import React from 'react'
import "../GameOver/GameOver.scss"; 
import gameOver from '../../assets/icons/gameOver.png'; 
import fire from '../../assets/images/background/fire.png'; 


const GameOver = () => {
  return (
    <div className='gameOver '>
     
     <img className='gameOver__img' alt="game over text" src={gameOver} /> 
     
     <div className='gameOver__fireCollection'>
        <img className='gameOver__fire' alt="fire" src={fire}/> 
        <img className='gameOver__fire' alt="fire" src={fire}/> 
        <img className='gameOver__fire' alt="fire" src={fire}/> 
     </div>
    </div>

  )
}

export default GameOver
