import React from 'react'; 
import '../Welcome/Welcome.scss'; 
import playButton from '../../assets/icons/playButton.png'

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>xTra-terrestrial Post Nite Out Adventure</h1>
      <img className='welcome__button' alt="Play Button" src={playButton}/>
      {/* <h1> The blue should cover all this white space</h1> */}
    </div>
  )
}

export default Welcome
