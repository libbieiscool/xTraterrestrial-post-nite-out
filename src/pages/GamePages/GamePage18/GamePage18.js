import React from 'react'
import "../GamePage18/GamePage18.scss"
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';

const GamePage18 = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"sdfasdf"
        })
    
    const [optionA, setOptionA] = useState(
       { text:"sdgfsdfg"}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"ffasdads"}
      )
  return (
    <div>
      
    </div>
  )
}

export default GamePage18
