import React from 'react'
import "../End/End.scss"
import { useState } from 'react';
import TextBoxTop from '../../../components/TextBoxTop/TextBoxTop';
import SingleOptionButton from '../../../components/SingleOptionButton/SingleOptionButton';
import { Link } from 'react-router-dom';


const End = () => {
    const [body,setBody] = useState(
        {title:"",
         text:"After a long and winding path, you finally unlock the door to your apartment. Waiting inside your room is your bed and comforter and you couldnt be more happy to see them. You crawl into bed and almost immediately fall asleep. Congratulations! You have won the game! "
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
