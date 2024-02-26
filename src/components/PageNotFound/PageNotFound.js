import React from 'react'; 
import "../PageNotFound/PageNotFound.scss"; 
import fourOhfour from "../../assets/icons/404.png"; 
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='body__block pageNotFound' >
      <img className='pageNotFound__img' alt="404 error img" src={fourOhfour}/>
      <h3 className='pageNotFound__text'>Page Not Found </h3>
      <Link to={`/`}>
        <button className='pageNotFound__button'>
            Go back home
        </button>
      </Link>


    </div>
  )
}

export default PageNotFound
