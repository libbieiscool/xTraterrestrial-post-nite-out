import React from 'react'
import "../GamePage11/GamePage11.scss"; 
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
import blob from "../../../assets/images/characters/blob girl.png"
import cyclopz from "../../../assets/images/characters/cyclopz.png"

const GamePage11b = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"In freaky unison they say  'My Fiance and I saw you from across the bar and we really loved your vibe... you see we're a non-monogamous semi-earthBound demi-nuclear couple... we wanted to know if you wanted to join us for a night of personal discovery?'"
        })
    
    const [optionA, setOptionA] = useState(
       { text:"Say 'Yes!' to a night of ''Personal Discovery''"}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"Politely Decline, you seem to be on a journey of personal discovery as is tonight"}
      )
  return (
    <div className='body__block--character gamePage11'>

      <div className='gamePage11__textBox'>
        <TextBoxTop body={body}/>
      </div>

    <div className='gamePage11__options'>
        <Link to={`/page12`} >
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

export default GamePage11b
