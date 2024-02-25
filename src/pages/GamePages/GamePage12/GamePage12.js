import React from 'react'
import "../GamePage12/GamePage12.scss"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';


const GamePage12 = () => {
    const [singleOption, setSingleOption]= useState(
        {text:"solemnly return on your heros journey home... its probably about time you get back anyways"}
      )

      const [body,setBody] = useState(
        {title:"",
         text:"As you walk to the couples neon green 2012 space Kia Soul, a blinding light comes from the sky DIRECTLY hitting the couple. In unison they shout ''NOO'' ... sadly your polyamourous friends have been CRUSHED by a rogue meteor. "
        })

  return (
   <div className='body__block--character gamePage12'>
    
    <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
    </div>

    <Link to={`/page13`} className='gamePage12__option'>
        <SingleOptionButton singleOption={singleOption}/>
    </Link>

       

    </div>
  )
}

export default GamePage12
