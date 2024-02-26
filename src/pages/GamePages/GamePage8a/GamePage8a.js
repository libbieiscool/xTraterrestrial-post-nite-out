import React from 'react'
import "../GamePage8a/GamePage8.scss"
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
import girl from "../../../assets/images/characters/gorl.png"
import orangeGirl from "../../../assets/images/characters/orangeGRL.png"
//ALLEY
const GamePage8a = () => {

    const [body,setBody] = useState(
        {title:"",
         text:"After an impressive and swift puking session, you put yourself back together and look over to see the most beautiful woman you've ever seen aproaching you. You've followed each other on IG for a while, but never met in real life. She asks if she knows you from somewhere and the two of you start talking."
        })
    
    const [optionA, setOptionA] = useState(
       { text:"Keep talking with her, maybe she didnt even notice you were puking two min ago and will think you're cool."}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"Exit the conversation, you should never meet your idols and you're trying to keep it this way."}
      )


  return (
    <div className='body__block--character gamePage8'>
    
        <div className='gamePage8__textBox'>
            <TextBoxTop body={body}/>
        </div>

        <div className='gamePage8__options'>

            <Link to={`/page17`} >
                <div className='gamePage8__optionA'>
                    <OptionAButton optionA={optionA}/>
                </div>
            </Link>

            <Link to={`/page11`}>
                <div className='gamePage8__optionB'>
                    <OptionBButton optionB={optionB}/> 
                </div>
            </Link>
        </div>

        <div className='gamePage8__character'>
          <img src={girl} className='gamePage8__character--girls'/>
          <img src={orangeGirl} className='gamePage8__character--girls'/>

        </div>

</div>
  )
}

export default GamePage8a
