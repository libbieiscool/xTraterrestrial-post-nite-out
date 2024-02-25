import React from 'react'
import '../../GameOver/GameOver.scss'
import gameOver from '../../../assets/icons/gameOver.png'; 
import fire from '../../../assets/images/background/fire.png'
import GameOver from '../../GameOver/GameOver';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//DONAIR
const GamePage7b = ({cash, updateCash}) => {
    useEffect(()=>{
        updateCash(cash-22)
    }, []);

  return (

    <div className='gameOver body__block'>
     
        <GameOver/>

        <p className='gameOver__subtext'>Your Choice to get a donair has brought you into FINANCIAL RUIN! The donair cost $20 BEFORE taxes and a tip... there is NO bouncing back financially from this choice.  </p>
       <Link to={`/page1`}>
        <button className='gameOver__button'>Try Again</button>
       </Link>
    </div>

  )
}

export default GamePage7b

