import React from 'react'
import './GamePage3.scss'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { useState } from 'react';
import friendv3 from "../../../assets/images/characters/claw_grl34.png"
import placeholder from "../../../assets/images/characters/placeholder.png"
import { Link } from 'react-router-dom';
import bouncer from "../../../assets/images/characters/greenGuy.png"

///IMPORT BOUNCER CHARACTER AND DO SOME KINDA ANIMATION WITH HIM



const GamePage3 = () => {

    const [optionA, setOptionA] = useState(
        { text:"Accept your fate (poverty)"}
       )
     
       const[optionB, setOptionB] = useState(
         {text:"Plead your case"}
       )
       const [body,setBody] = useState(
        {title:"",
         text:"You decide to go back to the club to see if someone's returned your wallet or if you can find where its been dropped - but the bouncer wont let you in because you have no ID, but you have no ID because you have no wallet!"
        })

  return (
    <div className='body__block--character gamePage3'>
     <div className='gamePage3__textBox '>
        <TextBoxTop body={body}/>
    </div>
     <div className='gamePage3__options'>
       
          <Link to={`/page4`} className='gamePage3__optionA' >
            <OptionAButton optionA={optionA}/>
          </Link>
    
          <Link to={`/page4`} className='gamePage3__optionB'>
            <OptionBButton optionB={optionB}/> 
          </Link>
  
      </div>
      <div className='gamePage3__character'>
        <img className='gamePage3__character--right ' alt='bestie' src={friendv3}/> 
        <img className='gamePage3__character--left' alt='gameplayer' src={placeholder}/>
      </div>
    </div>
  )
}

export default GamePage3
