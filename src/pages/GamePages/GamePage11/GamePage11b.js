import React from 'react'
import "../GamePage11/GamePage11.scss"; 
import { useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';

const GamePage11b = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"In freaky unison they say  'My Fiance and I saw you from across the bar and really loved your vibe... you see we're a non-monogamous ___ couple looking for a third... we wanted to know if you wanted to know if you wanted to join us for a night of personal discovery?'"
        })
    
    const [optionA, setOptionA] = useState(
       { text:"Say 'Yes!' to a night of ''Personal Discovery''"}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"Politely Decline, you seem to be on a journey of personal discovery as is tonight"}
      )
  return (
    <div className='body__block--character gamePage'>

      <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>

    <div className='gamePage__options'>
        <Link to={`/page12`} >
            <div className='gamePage__optionA'>
                <OptionAButton optionA={optionA}/>
            </div>
        </Link>

        <Link>
            <div className='gamePage__optionB'>
                <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
    </div>
      
    </div>
  )
}

export default GamePage11b
