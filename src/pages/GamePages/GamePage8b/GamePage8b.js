import React from 'react'
import "../GamePage8a/GamePage8.scss"
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
import girl from "../../../assets/images/characters/gorlTop.gif"
import ted from "../../../assets/images/characters/ted2.gif"
//SID PAGE
const GamePage8b = () => {

    const [body,setBody] = useState(
        {title:"",
         text:"After a relatively brutal puking session you lift your head to see a man leaning on the side of the building and smoking a cig... suddenly you realize its Sid: an old flame/ex-situationship. In your time together you had lots of fun, but the impact this situationship had on your confidence was less than fun."
        })
    
      const [optionA, setOptionA] = useState(
       { text:"Avoid making eye-contact and exit quickly"}
      )
    
      const[optionB, setOptionB] = useState(
        {text:"Strike up a conversation and see where it goes"}
      )

  return (
    <div className='body__block--character gamePage8'>
    
        <div className='gamePage8__textBox'>
             <TextBoxTop body={body}/>
        </div>

        <div className='gamePage8__options'>
          <Link to={`/page13`}>
              <div className='gamePage8__optionA'>
                <OptionAButton optionA={optionA}/>
              </div>
          </Link>

            <Link to={`/page9a`}>
                <div className='gamePage8__optionB'>
                    <OptionBButton optionB={optionB}/> 
                </div>
            </Link>
        </div>

        <div className='gamePage8__character'>
          <img src={girl} className='gamePage8__character--img'/>
          <img src={ted} className='gamePage8__character--img'/>

        </div>

    </div>
  )
}

export default GamePage8b
