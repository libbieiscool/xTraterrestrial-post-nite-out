import React from 'react'
import "../End/End.scss"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';
import { Link } from 'react-router-dom';


const End = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"After what seemed like a night that would never end you finally unlock the door to your apartment and crawl into your bed. You sleep almost immediately dreaming of all the paths that could have been. YOU HAVE WON THE GAME! "
        })
    const [singleOption, setSingleOption]= useState(
            {text:"start over"}
          )
    
  return (
   <div className='body__block--character end'>
     <div className='gamePage3__textBox '>
        <TextBoxTop body={body}/>
    </div>


    <Link to={`/gameplay`} className='gamePage__option'>
        <SingleOptionButton singleOption={singleOption}/>
    </Link>


    </div>
  )
}

export default End
