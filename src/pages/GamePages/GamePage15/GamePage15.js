import React from 'react'
import "../GamePage15/GamePage15.scss"; 
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';

const GamePage15 = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"You start walking down the nice, visible, beautifully lit path when all of a sudden you hear someone yelling what sounds like your name. You look behind you and don't immediately recognize the woman yelling at you, but then it clicks... you went to highschool with this girl! The two of you start chatting and you immediately remember why you didnt stay friends, but as you chat she offers you a ride home. "
        })
    const [optionA, setOptionA] = useState(
            { text:"say ''it was great catching up with you! Lets get coffee soon!'' (with no intention of ever getting coffee with her soon) and continue your hero's journey home. "}
           )
         
    const[optionB, setOptionB] = useState(
             {text:"Get a FREE ride home with her... the cost is having to listen to this kind of annoying woman talk for 30 min at you"}
           )

  return (
    <div className='body__block--character gamePage15'>
            <div className='gamePage15__textBox'>
            <TextBoxTop body={body}/>
        </div>

    <div className='gamePage15__options'>
        <div className='gamePage15__optionA'>
          <OptionAButton optionA={optionA}/>
        </div>

        <div className='gamePage15__optionB'>
          <OptionBButton optionB={optionB}/> 
        </div>
      
    </div>
</div>
  )
}

export default GamePage15
