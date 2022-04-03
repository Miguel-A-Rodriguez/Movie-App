import { faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from "react-redux";
import MovieDetailApiRequest from '../components/MovieDetailApiRequest';
import Navigation from '../components/Navigation';
import "../index.css";
export default function Details() {

    
    const singleFavoriteMovieState = useSelector((state) => state.singleMovie)
    const singleFavoriteMovieDetailsState = useSelector((state) => state.singleMovieDetails)

  
    const grinFace= <FontAwesomeIcon icon={faFaceGrinStars} />


    // singleFavoriteMovieState is currently broken and not properly storing state  
    //  console.log({singleFavoriteMovieState});  
    
    // use this log to check if the movie's information you selected on the favorite movie page is being sent to the singleFavoriteMovieDetailsState
    console.log({singleFavoriteMovieDetailsState});
    

  return (
    <>
    <MovieDetailApiRequest/>
    <Navigation/>
    
    <section class="movie-details__container">
      <div> 
        <h1>
          Movie Details
        </h1>
      </div>
      
      {singleFavoriteMovieDetailsState?.map(({ id: key, title, overview, release_date, poster_path, vote_average, vote_count },idx) => (
      
          <div className='movie-details__container__text' key={key}>
            <p><img style={{maxWidth: 300}} src={`https://image.tmdb.org/t/p/original${poster_path}`}></img></p>
            <p className="text-3xl">{title}</p>
            <p>{release_date}</p>
            
            <p>Vote Average:{vote_average} {grinFace} </p>
            <p>{overview}</p>
      
          </div>
      
      ))}
    </section>
    {}
    
    </>
  )
}
