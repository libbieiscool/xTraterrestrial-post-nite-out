import React from 'react'
import "../HowTo/HowTo.scss"
import OptionAButton from '../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../components/OptionBButton/OptionBButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Libbie from "../../assets/images/misc/libbieBingo.JPG"
const HowTo = () => {
    const [optionA, setOptionA] = useState(
    { text:"You can click me to play"}
    )

  const[optionB, setOptionB] = useState(
      {text:"Or you can click me!"}
    )
  return (
    <div className='howTo'>
      <h1 className='howTo__header'>How to Play</h1>
      
    <ol className='howTo__list'>
      <li className='howTo__list--item'> On each page you will be presented with 1-2 option buttons</li>
      <li className='howTo__list--item'>You click on the button that corresponds with the choice you would like to make.</li>
      <li className='howTo__list--item'>Clicking the button will bring you to a new page that reflects the choice made by clicking your button of choice.</li>
      <li className='howTo__list--item'>Rinse and repeat until the game is completed or until you lose. </li>
    </ol>

   

      <div className='howTo__options'>
        <Link to={`/`}>
          <div className='howTo__optionA'>
            <OptionAButton optionA={optionA}/>
          </div>
        </Link>
        <Link to={`/`}>
          <div className='howTo__optionB'>
            <OptionBButton optionB={optionB}/> 
          </div>
        </Link>
      </div>
  
    </div>
  )
}

export default HowTo
