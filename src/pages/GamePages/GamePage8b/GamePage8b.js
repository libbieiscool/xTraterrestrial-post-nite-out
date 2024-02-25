import React from 'react'
import "../GamePage8a/GamePage8.scss"
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
//GARBAGE CAN
const GamePage8b = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"text text tetx tet "
        })
    
      const [optionA, setOptionA] = useState(
       { text:"this is my test text yippee "}
      )
    
      const[optionB, setOptionB] = useState(
        {text:"this is my test text OPTION B "}
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

export default GamePage8b
