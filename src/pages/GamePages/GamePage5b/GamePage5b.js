import React from 'react';
import "../GamePage5b/GamePage5b.scss"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import TextBoxBottom from '../../../components/TextBoxBottom/TextBoxBottom';


const GamePage5b = () => {
    // const [optionA, setOptionA] = useState(
    //     { text:"Try and sell for $1-3"}
    //    )
     
    //    const[optionB, setOptionB] = useState(
    //      {text:"Try and sell for $4-5"}
    //    )
    //    const [body,setBody] = useState(
    //     {title:"",
    //      text:"Bestie informs you that she's just called her own Uber home, her GF is there waiting for her, and the two live on the opposite side of town.. You'll have to make it home on your own.  "
    //     })
        const[bottomText, setBottomtext]=useState(
            {nameLeft:"", 
            nameRight:"bestie", 
            text:"Sorry babes, I'm already on my way home. I just called a cab two min ago. My gf is waiting at home for me and besides, you and I live on opposite sides of town. This wouldnt even get you close to yours. Good Luck getting home tho xxxx"
          }
          )

  return (
    <div className='body__block--character gamePage5'>
      {/* <div className='gamePage__textBox'>
        <TextBoxTop body={body}/>
      </div>

      <div className='gamePage__options'>
        <div className='gamePage__optionA'>
          <OptionAButton optionA={optionA}/>
        </div>
        <div className='gamePage__optionB'>
          <OptionBButton optionB={optionB}/> 
        </div>
      </div> */}
      <div className='gamePage__textBoxBottom'>
      <TextBoxBottom bottomText={bottomText}/>
        </div>
      
    </div>
  )
}

export default GamePage5b
