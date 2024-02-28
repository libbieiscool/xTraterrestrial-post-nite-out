import React from 'react'; 
import "../GamePage6b/GamePage6b.scss"; 
import { useState, useEffect } from 'react';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import { Link } from 'react-router-dom';
import girl from "../../../assets/images/characters/gorl1.gif"

const GamePage6b = () => {

      const [body,setBody] = useState(
        {title:"",
         text:" Tonight has been one blow to the ego after another, you deserve a treat to help you get through the rest of the night. Just a few blocks over is the world famous 'Pizza Corner' serving pizza and other such late night foods. What comfort food sparks joy for you tonight?"
        })
    
      const [optionA, setOptionA] = useState(
        { text:"Go get Pizza"}
       )
     
       const[optionB, setOptionB] = useState(
         {text:"Go get Donair "}
       )


  return (
    <div className='body__block--character gamePage6b'>

    <div className='gamePage6b__textBox'>
        <TextBoxTop body={body}/>
    </div>

    <div className='gamePage6b__options'>
        <Link to={`/page7a`}>
            <div className='gamePage6b__optionA'>
                <OptionAButton optionA={optionA}/>
            </div>
        </Link>
        <Link to={`/page7b`}>
            <div className='gamePage6b__optionB'>
                <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
    </div>

    <div className='gamePage6b__character'>
      <img className='gamePage6b__character--img' alt='mainCharacter' src={girl}/>

    </div>

    </div>
  )
}

export default GamePage6b
