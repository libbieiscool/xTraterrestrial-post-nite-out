import React from 'react'; 
import "../GamePage16/gamePage16.scss"; 
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';

const GamePage16 = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"you muster up as much courage as you can and while passing the figure you kick him. In this moment you realize that you've seen this guy before...Its Farris! Serial cheater and defacto leader of the local communist party. He was in the alley wheat-pasting some posters onto some power lines. You've already kicked him... but as the politician that he is he quickly pivots immediately to inviting you to his groups next demonstration. "
        })
    const [optionA, setOptionA] = useState(
            { text:"Apologize and tell him you'll do your best to come to the protest... but you might be working that day."}
           )
         
    const[optionB, setOptionB] = useState(
             {text:"Join the communist party... his politician's charm is too much to resist!"}
           )

  return (
<div className='body__block--character gamePage16'>
    <div className='gamePage14__textBox'>
        <TextBoxTop body={body}/>
    </div>

    <div className='gamePage16__options'>

      <Link to={`/page15`}>
        <div className='gamePage16__optionA'>
            <OptionAButton optionA={optionA}/>
        </div>
      </Link>

        <Link to={`/page18`}>
            <div className='gamePage16__optionB'>
            <OptionBButton optionB={optionB}/> 
            </div>
        </Link>

    </div>    
</div>
  )
}

export default GamePage16
