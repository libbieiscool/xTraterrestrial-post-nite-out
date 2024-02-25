import React from 'react';
import "../GamePage5a/GamePage5a.scss"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import sell from '../../../assets/images/background/SELL.gif'

const GamePage5a = () => {

    const [optionA, setOptionA] = useState(
        { text:"Try and sell for $1-3"}
       )
     
       const[optionB, setOptionB] = useState(
         {text:"Try and sell for $4-5"}
       )
       const [body,setBody] = useState(
        {title:"",
         text:"Now is your chance to tap into the entrepreneurial spirit that every commerce bro believes we are given at birth. Think stocks, think hedgefund manager, think... MONEY! How much will you sell your cigs for? "
        })

  return (
    <div className='body__block--character gamePage5a'>
      <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>

      <div className='gamePage5a__img'>
        <img alt='sellMoreGif' src={sell} className='gamePage5a__img--styling'/> 
      </div>

      <div className='gamePage5a__options'>
        <Link to={`/page6a`}>
            <div className='gamePage5a__optionA'>
            <OptionAButton optionA={optionA}/>
            </div>
        </Link>

        <Link to={`/page6c`}>
            <div className='gamePage5a__optionB'>
            <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
      </div>
      
    </div>
  )
}

export default GamePage5a
