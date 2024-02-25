import React from 'react'; 
import "../GamePage6a/GamePage6a.scss"; 
import { useState, useEffect } from 'react';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';


const GamePage6b = () => {

      const [body,setBody] = useState(
        {title:"",
         text:" Tonight has been one blow to the ego after another, you deserve a treat to help you get through the rest of the night. Just a few blocks over is the world famous 'Pizza Corner' serving pizza and other such late night foods. What comfort food sparks joy for you tonight?"
        })
    
      const [optionA, setOptionA] = useState(
        { text:"Go get Pizza"}
       )
     
       const[optionB, setOptionB] = useState(
         {text:"Go get Donair "}
       )


  return (
    <div className='body__block--character gamePage6a'>

    <div className='gamePage6a__textBox'>
        <TextBoxTop body={body}/>
    </div>

    <div className='gamePage6a__options'>
        <div className='gamePage6a__optionA'>
          <OptionAButton optionA={optionA}/>
        </div>
        <div className='gamePage6a__optionB'>
          <OptionBButton optionB={optionB}/> 
        </div>
    </div>

    </div>
  )
}

export default GamePage6b
