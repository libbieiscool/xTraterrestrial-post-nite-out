import React from 'react'; 
import "../GamePage10/GamePage10.scss"; 
import gameOver from '../../../assets/icons/gameOver.png'; 
import fire from '../../../assets/images/background/fire.png'; 
import { Link } from 'react-router-dom';
const GamePage10 = () => {
  return (
    <div className='body__block--character gamePage10'>
        <div className='gameOver '>
        <img className='gameOver__img' alt="game over text" src={gameOver} /> 
        
        <div className='gameOver__fireCollection'>
            <img className='gameOver__fire' alt="fire" src={fire}/> 
            <img className='gameOver__fire' alt="fire" src={fire}/> 
            <img className='gameOver__fire' alt="fire" src={fire}/> 
        </div>
        </div>
        <h2 className='gamePage10__text'>
        Any idea that a romance between the two of you could be rekindled is quickly extinguished. When you and Sid unlock the door to his apartment you find his girlfriend waiting on the couch for his return clearly upset, expecting something like this. She lets you sleep on the couch while the two fight in another room. 

        </h2>
        <Link to={`/page13`}>
        <button className='gameOver__button'>Try Again</button>
        </Link>

    </div>
  )
}

export default GamePage10
