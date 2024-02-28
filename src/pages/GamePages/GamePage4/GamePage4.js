import React from 'react'; 
import "../GamePage4/GamePage4.scss"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import girlThinking from "../../../assets/images/characters/girlThinking.gif"

const GamePage4 = () => {

    const [optionA, setOptionA] = useState(
        { text:"Embrace your entrepreneurial side and sell cigarettes to fellow party-goers"}
       )
     
       const[optionB, setOptionB] = useState(
         {text:"Ask your friend if she'd split the price of a cab with you"}
       )
       const [body,setBody] = useState(
        {title:"",
         text:"Despite your best efforts (or lack thereof) the bouncer wont let you back into the club to try and get your wallet. You'll have to make it through the rest of the night with what little cash you have/dont have. You check the price for a space Uber home on your phone only to realize that its surge prices and the cash you have isnt going to cover the cost of the cab home. "
        })


  return (
    <div className='body__block--character gamePage4'>
        <div className='gamePage4__textBox'>
             <TextBoxTop body={body}/>
        </div>

      <div>
        <img alt="maincharacter" className='gamePage4__character' src={girlThinking}/>
      </div>



      <div className='gamePage4__options'>
        <Link to={`/page5a`}>
            <div className='gamePage4__optionA'>
            <OptionAButton optionA={optionA}/>
            </div>
        </Link>
        <Link to={`/page5b`}>
            <div className='gamePage4__optionB'>
            <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
      </div>
    </div>
  )
}

export default GamePage4
