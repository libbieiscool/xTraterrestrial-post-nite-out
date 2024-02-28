import React from 'react'
import "../GamePage9a/GamePage9.scss"; 
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
import ted from "../../../assets/images/characters/ted2.gif"

//GARBAGE CAN
const GamePage9a = () => {
    
    const [body,setBody] = useState(
        {title:"",
         text:"the two of you start chatting over a cigarette... he's not as smart, as impressive, or maybe even as clean, as you remembered him... but you might be able to look past that when he offers to take you home with him... "
        })
    
      const [optionA, setOptionA] = useState(
       { text:"Get outa there! You and your confidence cant go through this again!"}
      )
    
      const[optionB, setOptionB] = useState(
        {text:"Go home with him, you deserve to have fun!"}
      )

  return (
    <div className='body__block--character gamePage9'>
    
        <div className='gamePage9__textBox'>
             <TextBoxTop body={body}/>
        </div>

        <div className='gamePage9__options'>
          <Link to={`/page13`}>
            <div className='gamePage9__optionA'>
              <OptionAButton optionA={optionA}/>
            </div>
          </Link>
          
           <Link to={`/page10`}>
                <div className='gamePage9__optionB'>
                    <OptionBButton optionB={optionB}/> 
                </div>
           </Link>
        </div>

        <div className='gamePage9__character'>
          <img src={ted} className='gamePage9__character--img'/>

        </div>

    </div>
  )
}

export default GamePage9a
