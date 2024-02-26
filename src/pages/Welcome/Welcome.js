import React from 'react'; 
import '../Welcome/Welcome.scss'; 
import playButton from '../../assets/icons/playButton.png'
import { Link, NavLink } from 'react-router-dom';
import discoBall from "../../assets/images/misc/disco.gif"

const Welcome = () => {
  return (
    <div className='welcome body__block '>
      <div className='welcome__group--top'>
        <img alt="discoBall" src={discoBall} className='welcome__disco'/>
        <div className='welcome__group--text'>
          <h1 className='welcome__title'>xTra-Terrestrial</h1>
          <h1 className='welcome__title'>Post Nite Out</h1>
          <h1 className='welcome__title'>Adventure</h1>
        </div>
        <img alt="discoBall" src={discoBall} className='welcome__disco'/>

      </div>
      <Link to={`gameplay`} className='playbutton'>
          <h2 className='playbutton__text floating'>Play game</h2>
          <img className='welcome__button playbutton__img floating' alt="Play Button" src={playButton}/>
      </Link>
    </div>
  )
}

export default Welcome
