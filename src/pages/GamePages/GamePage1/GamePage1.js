import React from 'react'; 
import './GamePage1.scss';  
import friend from '../../../assets/images/characters/claw grl.png'
import friendv2 from "../../../assets/images/characters/claw_grl34.png"
import placeholder from "../../../assets/images/characters/placeholder.png"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';
import { Link } from 'react-router-dom';


const GamePage1 = () => {

  const [body,setBody] = useState(
    {title:"",
     text:"After a long night of dancing and fun with your friends, an announcement is made for last call for drinks. You and your friend decide to leave the bar before it closes to see what the world has to offer.  "
    })

    const [singleOption, setSingleOption]= useState(
      {text:"go to 7/11 for taquitos and cigs"}
    )


  return (
    <div className='body__block--character gamePage'>
      <div className='gamePage__textBox fadeIn'>
        <TextBoxTop body={body}/>
      </div>
      <Link className='gamePage__option fadeInDelayed' to={`/page2`}>
      <div className='gamePage__option--box'>
        <SingleOptionButton singleOption={singleOption}/>
      </div>
      </Link>
      <div className='gamePage__character'>
        <img className='gamePage__character--right fadeIn' alt='bestie' src={friendv2}/> 
        <img className='gamePage__character--left fadeIn' alt='gameplayer' src={placeholder}/>
      </div>

    </div>
  )
}

export default GamePage1
