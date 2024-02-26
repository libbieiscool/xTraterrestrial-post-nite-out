import React from 'react'
import "../GamePage14/GamePage14.scss"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
import farris from "../../../assets/images/characters/farris.png"

const GamePage14 = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"You start walking  down the alley, you've walked this path a thousand times. Granted, it was in the light of day, but you're a big girl and can get from point A to point B. Maybe you just need to make yourself look bigger and walk with a different kind of swagger than you usually do. Suddenly you see a figure up in the nearby distance and the two of you make eye contact.  "
        })
    const [optionA, setOptionA] = useState(
            { text:"run up to the figure... kick him, and run away"}
           )
         
    const[optionB, setOptionB] = useState(
             {text:"abort mission and take the next exit onto the nicely lit street"}
           )

  return (
    <div className='body__block--character gamePage14'>
        <div className='gamePage14__textBox'>
            <TextBoxTop body={body}/>
        </div>

    <div className='gamePage14__options'>
        <Link to={`/page16`}>
            <div className='gamePage14__optionA'>
                <OptionAButton optionA={optionA}/>
            </div>
        </Link>

        <Link to={`/page15`}>
            <div className='gamePage14__optionB'>
            <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
    </div>  
    <div className='gamePage14__character'>
          <img src={farris} className='gamePage14__character--img'/>
        </div>
    </div>
  )
}

export default GamePage14
