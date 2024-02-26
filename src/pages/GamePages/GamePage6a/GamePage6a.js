import React from 'react'; 
import "../GamePage6a/GamePage6a.scss"; 
import { useState, useEffect } from 'react';
import TextBoxBottom from '../../../components/TextBoxBottom/TextBoxBottom';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import { Link } from 'react-router-dom';
import girl from "../../../assets/images/characters/gorl.png"
import coin from "../../../assets/icons/coin.png"
const GamePage6a = ({cash, updateCash}) => {

    useEffect(()=>{
        updateCash(cash+6)
    }, []);

      const [body,setBody] = useState(
        {title:"",
         text:"Watch out Shark Tank! The entrepreneurial holy spirit came down and possessed you, allowing you to sell AT LEAST 3 cigarettes! To celebrate this business venture, you decide its time to get a late night snack... "
        })
    
      const [optionA, setOptionA] = useState(
        { text:"Go get Pizza"}
       )
     
       const[optionB, setOptionB] = useState(
         {text:"Go get Donair"}
       )


  return (
    <div className='body__block--character gamePage6a'>

    <div className='gamePage6a__textBox'>
        <TextBoxTop body={body}/>
    </div>

    <div className='gamePage6a__options'>
        <Link to={`/page7a`}>
            <div className='gamePage6a__optionA'>
                <OptionAButton optionA={optionA}/>
            </div>
        </Link>
        <Link to={`/page7b`}>
            <div className='gamePage6a__optionB'>
                <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
    </div>

    <div className='gamePage6a__character'>
    <img src={coin} className='gamePage6a__character--coin'/>

      <img src={girl} className='gamePage6a__character--img'/>
      <img src={coin} className='gamePage6a__character--coin'/>

    </div>

    </div>
  )
}

export default GamePage6a
