import React from 'react';
import "../GamePage5b/GamePage5b.scss"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextBoxBottom from '../../../components/TextBoxBottom/TextBoxBottom';
import friend from "../../../assets/images/characters/claw_grl.gif"
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';

const GamePage5b = () => {
   
        const[bottomText, setBottomtext]=useState(
            {nameLeft:"", 
            nameRight:"bestie", 
            text:"Sorry babes, I'm already on my way home. I just called a cab two min ago. My gf is waiting at home for me and besides, you and I live on opposite sides of town. This wouldnt even get you close to yours. Good Luck getting home tho xxxx"
          }
          )

        const [singleOption, setSingleOption]= useState(
            {text:"Say goodbye, and find Another way home"}
          )


  return (
    <div className='body__block--character gamePage5'>

        <Link to={`/page6b`} className='gamePage5__option'>

                <SingleOptionButton singleOption={singleOption}/>
            
        </Link>

        <div className='gamePage5__textNcharacter'>
            <img className='gamePage5__character' src={friend}/>
        </div>


        <div className='gamePage5__textBoxBottom'>
                <TextBoxBottom bottomText={bottomText}/>
        </div>
      
    </div>
  )
}

export default GamePage5b
