import React from 'react';
import "../GamePage5a/GamePage5a.scss"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';

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
    <div className='body__block--character gamePage5'>
      <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>

      <div className='gamePage__options'>
        <div className='gamePage__optionA'>
          <OptionAButton optionA={optionA}/>
        </div>
        <Link to={`/gameover`}>
            <div className='gamePage__optionB'>
            <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
      </div>
      
    </div>
  )
}

export default GamePage5a
