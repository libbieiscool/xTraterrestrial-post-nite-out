import React from 'react'; 
import '../Welcome/Welcome.scss'; 
import playButton from '../../assets/icons/playButton.png'
import { Link, NavLink } from 'react-router-dom';


const Welcome = () => {
  return (
    <div className='welcome body__block'>
      <h1 className='welcome__title'>xTra-terrestrial Post Nite Out Adventure</h1>
      <Link to={`gameplay`}>
        <img className='welcome__button floating' alt="Play Button" src={playButton}/>
        
      </Link>
      <h2>Play game</h2>
    </div>
  )
}

export default Welcome
