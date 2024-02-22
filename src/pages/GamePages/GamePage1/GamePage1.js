import React from 'react'; 
import './GamePage1.scss';  
import friend from '../../../assets/images/characters/claw grl.png'
import friendv2 from "../../../assets/images/characters/claw_grl34.png"
import placeholder from "../../../assets/images/characters/placeholder.png"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';

const GamePage1 = () => {

  const [body,setBody] = useState(
    {title:"",
     text:"After a long night of dancing and fun, the bar calls last "
    })


  return (
    <div className='body__block gamePage'>
      <div className='gamePage__textBox fadeIn'>
        <TextBoxTop body={body}/>
      </div>
      <div className='gamePage__character'>
        <img className='gamePage__character--right' alt='bestie' src={friendv2}/> 
        <img className='gamePage__character--left' alt='gameplayer' src={placeholder}/>
      </div>

    </div>
  )
}

export default GamePage1
