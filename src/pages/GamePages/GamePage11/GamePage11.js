import React from 'react'
import "../GamePage11/GamePage11.scss"; 
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
import blob from "../../../assets/images/characters/blob girl.png"
import cyclopz from "../../../assets/images/characters/cyclopz.png"

const GamePage11 = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"Upon leaving that conversation a very striking couple approaches you - you think maybe you've seen them before, but cant quite place where. "
        })
    
    const [optionA, setOptionA] = useState(
       { text:"talk to them"}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"dont talk to them."}
      )
  return (
    <div className='body__block--character gamePage11'>

      <div className='gamePage11__textBox'>
        <TextBoxTop body={body}/>
      </div>

    <div className='gamePage11__options'>
        <Link to={`/page11b`}>
            <div className='gamePage11__optionA'>
                <OptionAButton optionA={optionA}/>
            </div>
        </Link>

        <Link to={`/page13`}>
            <div className='gamePage11__optionB'>
                <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
    </div>
    <div className='gamePage8__character'>
          <img src={blob} className='gamePage8__character--img'/>
          <img src={cyclopz} className='gamePage8__character--img'/>

        </div>
      
    </div>
  )
}

export default GamePage11
