import React from 'react';
import "../GamePage5b/GamePage5b.scss"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import TextBoxBottom from '../../../components/TextBoxBottom/TextBoxBottom';
import friend from "../../../assets/images/characters/claw_grl.gif"

const GamePage5b = () => {
   
        const[bottomText, setBottomtext]=useState(
            {nameLeft:"", 
            nameRight:"bestie", 
            text:"Sorry babes, I'm already on my way home. I just called a cab two min ago. My gf is waiting at home for me and besides, you and I live on opposite sides of town. This wouldnt even get you close to yours. Good Luck getting home tho xxxx"
          }
          )

  return (
    <div className='body__block--character gamePage5'>
    <div className='gamePage5__textNcharacter'>
        {/* <div className='gamePage5__text'>
            <h3> "Sorry babes!"</h3>
        </div> */}
        <img className='gamePage5__character' src={friend}/>
        <Link className='gamePage5__text'>
            <div>
                <h3> Find Another Way Home</h3>
            </div>
        </Link>
    </div>


    <div className='gamePage__textBoxBottom'>
            <TextBoxBottom bottomText={bottomText}/>
    </div>
      
    </div>
  )
}

export default GamePage5b
