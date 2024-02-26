import React from 'react'
import "../GamePage20/GamePage20.scss"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';
import { Link } from 'react-router-dom';


//FORTUNE TELLER
const GamePage20 = () => {

    const [body,setBody] = useState(
        {title:"",
         text:"As you walk home on your path, you see a group of people surrounding a figure up ahead. You stop to see what the commotion is about and find an old woman is reading people's fortunes. Maybe she could sense your energy, weakened by a long night out, but almost immediately the fortune teller looks you dead in the eyes and asks to read you your fortune."
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
    </div>
  )
}

export default GamePage20
