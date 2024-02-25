import React from 'react'
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import TextBoxBottom from '../../../components/TextBoxBottom/TextBoxBottom';
import SingleOptionButton from '../components/SingleOptionButton/SingleOptionButton';
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';

const ExamplePage = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"text text tetx tet "
        })
    
    const [optionA, setOptionA] = useState(
       { text:"this is my test text yippee "}
      )
    
    const[optionB, setOptionB] = useState(
        {text:"this is my test text OPTION B "}
      )

      const [singleOption, setSingleOption]= useState(
        {text:"go to 7/11 for taquitos and cigs"}
      )
    
      const[bottomText, setBottomtext]=useState(
        {nameLeft:"name", 
        nameRight:"name", 
        text:"text text tetx tet "
      }
      )

  return (
    <div className='body__block--character gamePage'>

      <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>

    <div className='gamePage__textBoxBottom'>
      <TextBoxBottom bottomText={bottomText}/>
    </div>

    <div className='gamePage__option--box'>
        <SingleOptionButton singleOption={singleOption}/>
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
