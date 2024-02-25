import React from 'react'
import "../GamePage13/GamePage13.scss"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';

const GamePage13 = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"You decide its time you start walking home. You still cant afford an Uber during these surge prices and its only a few blocks away, so you might as well walk. "
        })
    
    const [optionA, setOptionA] = useState(
       { text:"Take long way"}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"Take shortcut through scary alley"}
      )
  return (
    <div className='body__block--character gamePage13' >
        <div className='gamePage__textBox'>
            <TextBoxTop body={body}/>
        </div>

        <div className='gamePage__options'>
            <Link to={`/page15`} >
                <div className='gamePage__optionA'>
                    <OptionAButton optionA={optionA}/>
                </div>
            </Link>

            <Link to={`/page14`}>
                <div className='gamePage__optionB'>
                    <OptionBButton optionB={optionB}/> 
                </div>
            </Link>

      </div>
      
    </div>
  )
}

export default GamePage13
