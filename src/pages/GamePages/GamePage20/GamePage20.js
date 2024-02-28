import React from 'react'
import "../GamePage20/GamePage20.scss"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';
import { Link } from 'react-router-dom';
import girl from "../../../assets/images/characters/girlThinking.gif"


//FORTUNE TELLER
const GamePage20 = () => {

    const [body,setBody] = useState(
        {title:"",
         text:"As you walk home on your path, you run into a mysterious older woman who offers to read your fortune. "
        })

     const [singleOption, setSingleOption]= useState(
            {text:"This is an offer you can't resist! Get your fortune read."}
          )

  return (
    <div className='body__block--character gamePage20'>
        <div className='gamePage20__textBox'>
            <TextBoxTop body={body}/>
        </div>
        <Link to={`/page20b`} className='gamePage20__option'>
                <SingleOptionButton singleOption={singleOption}/> 
        </Link>
      <div className='gamePage20__character'>
          <img src={girl} className='gamePage20__character--img'/>
    </div>


    </div>

  )
}

export default GamePage20
