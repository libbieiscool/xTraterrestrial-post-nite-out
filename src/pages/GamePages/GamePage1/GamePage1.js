import React from 'react'; 
import './GamePage1.scss';  
import friend from '../../../assets/images/characters/claw grl.png'
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import { useState } from 'react';

const GamePage1 = () => {

  const [body,setBody] = useState(
    {title:"",
     text:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})

  return (
    <div className='body__block gamePage'>
      <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>
      <h1>Test Test </h1>
      <p>The first gameplay page</p>

    </div>
  )
}

export default GamePage1
