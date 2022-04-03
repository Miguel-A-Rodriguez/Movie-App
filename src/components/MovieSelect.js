import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "../index.css";
import { actionCreators } from "../state/index";
import PopularMoviesApiRequest from './PopularMoviesApiRequest';



export default function MovieSelect() {
  
  const state = useSelector((state) => state.movies);
  const favoriteMovieState = useSelector((state) => state.favoriteMovies)

  const dispatch = useDispatch()
  const { addFavoriteMovie } = bindActionCreators(actionCreators, dispatch)

 

  const saveFavoriteMovie = (idx) => {
    addFavoriteMovie(idx);
    alert("Movie Added to Favorites!");
  }

  // Use this log to check if movies are properly being added to the addFavoriteMovie State
  console.log(favoriteMovieState)

  

  return (
    <>
    <PopularMoviesApiRequest />
    
    <section className="movies">
      <div className='movies__header'>
        <h1>POPULAR</h1>
        <h2>MOVIES</h2>
      </div>
      <div className="movie-container">
        {state?.results.map(({ id: key, title, poster_path },idx) => (
          <div className='movie-container__card' key={key}>
            <p className='movie-container__card__img'>
              <img src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
            </p>
            {/* Must add check to see if item added already exists in the favoriteMovieState*/}
            <p className="movie-container__card__title">{title}</p>

            {favoriteMovieState?.indexOf(state?.results[idx]) == -1 ? (
            <button className='movie-container__button' onClick={() => saveFavoriteMovie(state?.results[idx], key)}>Add to Favorites</button>
            ) :         
              <p>Added to Favorites!</p>
            }
          </div>
        ))}
      </div>
    </section>
    </>
    
  )
}
