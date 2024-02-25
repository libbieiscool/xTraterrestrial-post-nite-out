import React from 'react'
import "../GamePage8a/GamePage8.scss"
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
//ALLEY
const GamePage8a = () => {

    const [body,setBody] = useState(
        {title:"",
         text:"after an impressive and swift puking session, you put yourself back together and look over to see the most beautiful and non-chalant woman you've ever seen. the two of you make eye contact and she approaches you."
        })
    
    const [optionA, setOptionA] = useState(
       { text:"EDIT WHAT THIS ONE IS"}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"you politely decline, and continue your journey"}
      )


  return (
    <div className='body__block--character gamePage7'>
    
        <div className='gamePage8__textBox'>
            <TextBoxTop body={body}/>
        </div>

        <div className='gamePage8__options'>

            <div className='gamePage8__optionA'>
            <OptionAButton optionA={optionA}/>
            </div>
            
            <div className='gamePage8__optionB'>
            <OptionBButton optionB={optionB}/> 
            </div>
        </div>

</div>
  )
}

export default GamePage8a
