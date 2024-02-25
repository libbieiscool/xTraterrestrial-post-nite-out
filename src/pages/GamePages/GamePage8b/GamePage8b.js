import React from 'react'
import "../GamePage8a/GamePage8.scss"
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
//SID PAGE
const GamePage8b = () => {

    const [body,setBody] = useState(
        {title:"",
         text:"After a relatively brutal puking session you lift your head to see a man leaning on the side of the building and smoking a cig... suddenly you realize its Sid: an old flame/ex-situationship. In your time together you had some of the best Alien sex you've ever had ... but the impact this situationship had on your confidence was detrimental..."
        })
    
      const [optionA, setOptionA] = useState(
       { text:"avoid making eye-contact and exit quickly"}
      )
    
      const[optionB, setOptionB] = useState(
        {text:"strike up a conversation and see where it goes"}
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
            <Link to={`/page9a`}>
                <div className='gamePage8__optionB'>
                    <OptionBButton optionB={optionB}/> 
                </div>
            </Link>
        </div>

    </div>
  )
}

export default GamePage8b
