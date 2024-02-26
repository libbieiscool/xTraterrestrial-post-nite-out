import React from 'react'
import "../GamePage11/GamePage11.scss"; 
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
const GamePage11 = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"Upon leaving that conversation a very striking couple approaches you - you think maybe you've seen them before, but cant quite place where. "
        })
    
    const [optionA, setOptionA] = useState(
       { text:"talk to them"}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"dont talk to them."}
      )
  return (
    <div className='body__block--character gamePage'>

      <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>

    <div className='gamePage__options'>
        <Link to={`/page11b`}>
            <div className='gamePage__optionA'>
                <OptionAButton optionA={optionA}/>
            </div>
        </Link>

        <Link to={`/page13`}>
            <div className='gamePage__optionB'>
                <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
    </div>
      
    </div>
  )
}

export default GamePage11
