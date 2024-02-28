import React from 'react'
import './GamePage2.scss'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { useState, useEffect } from 'react';
import friendv2 from "../../../assets/images/characters/claw_grl.gif"
import placeholder from "../../../assets/images/characters/placeholder.png"
import hand from "../../../assets/images/misc/MuneyGif.gif"
import { Link } from 'react-router-dom';
import girl from "../../../assets/images/characters/gorl1.gif"


const GamePage2 = () => {

  const [optionA, setOptionA] = useState(
    { text:"spend $15 of your last $20 to buy cigarettes"}
   )
 
   const[optionB, setOptionB] = useState(
     {text:"Ask your friend to spot you and get you a pack"}
   )
   const [body,setBody] = useState(
    {title:"",
     text:"While in line at the Intergalactic 7/11 you realize that your wallet isn't in your purse anymore! All you have left is a sweaty 20 dollar bill."
    })

return (

  <div className='body__block--character gamePage2'>

     <div className='gamePage2__textBox '>
        <TextBoxTop body={body}/>
    </div>


      <div className='gamePage2__character'>
        <img src={hand} className='gamePage2__character--center' alt="hand" /> 
      </div>

      <div className='gamePage2__character'>
        <img className='gamePage2__character--right ' alt='bestie' src={friendv2}/> 
        <img className='gamePage2__character--left ' alt='gameplayer' src={girl}/>
      </div>

     <div className='gamePage2__options'>
          <Link  to={`/page3a`} className='gamePage2__optionA' >
            <OptionAButton optionA={optionA}/>
          </Link>
    
          <Link to={`/page3`} className='gamePage2__optionB'>
            <OptionBButton optionB={optionB}/> 
          </Link>
      </div>
    </div>
  )
}

export default GamePage2
