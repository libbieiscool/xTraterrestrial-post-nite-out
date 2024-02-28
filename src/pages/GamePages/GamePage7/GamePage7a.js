import React from 'react'; 
import '../GamePage7/GamePage7.scss'; 
import { useEffect, useState } from 'react'; 
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import OptionAButton from '../../../components/OptionAButton/OptionAButton';
import OptionBButton from '../../../components/OptionBButton/OptionBButton';
import { Link } from 'react-router-dom';
import girl from "../../../assets/images/characters/gorl1.gif"

//PIZZA WORLD

const GamePage7a = ({cash, updateCash}) => {

    useEffect(()=>{
        updateCash(cash-3)
    }, []);

    const [optionA, setOptionA] = useState(
        { text:"Run to the parking area beside the restaurant"}
       )
     
    const[optionB, setOptionB] = useState(
         {text:"Run to nearest garbage can"}
       )

    const [body,setBody] = useState(
        {title:"",
         text:"The pizza gods smiled on you today and you were able to get a slice for only $3. If lady luck is on your side you might just get home after all. Suddenly, you get this creeping feeling you've felt many times on evenings like these... YOU NEED TO VOMIT! "
        })

  return (
    <div className='body__block--character gamePage7'>

    <div className='gamePage7__textBox'>
        <TextBoxTop body={body}/>
    </div>

    <div className='gamePage7__options'>
        <Link to={`/page8b`}>
            <div className='gamePage7__optionA'>
                <OptionAButton optionA={optionA}/>
            </div>
        </Link>
        <Link to={`/page8a`}>
            <div className='gamePage7__optionB'>
                <OptionBButton optionB={optionB}/> 
            </div>
        </Link>
    </div>

    <div>
        <img className='gamePage7__character--grl' alt='main character' src={girl}/>
    </div>

    </div>
  )
}

export default GamePage7a
