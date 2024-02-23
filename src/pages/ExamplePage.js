import React from 'react'
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import TextBoxBottom from '../../../components/TextBoxBottom/TextBoxBottom';


const ExamplePage = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        })
    
      const [optionA, setOptionA] = useState(
       { text:"this is my test text yippee "}
      )
    
      const[optionB, setOptionB] = useState(
        {text:"this is my test text OPTION B "}
      )
    
      const[bottomText, setBottomtext]=useState(
        {nameLeft:"name", 
        nameRight:"name", 
        text:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      }
      )

  return (
    <div className='body__block gamePage'>

      <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>

    <div className='gamePage__textBoxBottom'>
      <TextBoxBottom bottomText={bottomText}/>
    </div>
      <div className='gamePage__options'>
        <div className='gamePage__optionA'>
          <OptionAButton optionA={optionA}/>
        </div>
        <div className='gamePage__optionB'>
          <OptionBButton optionB={optionB}/> 
        </div>
      </div>
    </div>
  )
}

export default ExamplePage
