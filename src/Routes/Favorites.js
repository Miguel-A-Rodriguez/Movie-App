import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import Navigation from '../components/Navigation';
import "../index.css";
import { actionCreators } from "../state/index";

export default function Favorites() {

  const state = useSelector((state) => state.movies)
  const favoriteMovieState = useSelector((state) => state.favoriteMovies)

  const dispatch = useDispatch()
  const {removeFavoriteMovieData, removeAllFavoriteMovieData, addMovieID, saveSelectedMovieState  } = bindActionCreators(actionCreators, dispatch)


    const removeOneFavoriteMovieData = (idx) => {
      removeFavoriteMovieData(idx)
    }

    const clearFavoriteMovieData= (idx) => {
      removeAllFavoriteMovieData(idx)
     
    }

    // const saveOneFavoriteMovie = (idx) => {
    //   saveSelectedMovieState(idx);
    // }

    const addOneMovieID = (id, idx) => {
      addMovieID(id);
      saveSelectedMovieState(idx);
    }
    

  return (
    <>

    <Navigation/>
    
    
    

      <section class="movies">
        
        <div className='favorite-movie-container__title'>Your favorite Movies!</div>
        <button className='favorite-movie-container__button' style={{maxWidth: 500}}  onClick={() => clearFavoriteMovieData(favoriteMovieState?.results)}>Clear All Your Favorite Movies</button>

        {favoriteMovieState?.length > 0 ? (
          <>

          <div className='movie-container'>
           
              {favoriteMovieState?.map(({ id: favoritesKey, title, overview, release_date, poster_path },idx) => (
                <article class="movie-container__card" key={favoritesKey}>
                <>
                    <Link to="/Details" key={idx}  onClick={() => addOneMovieID(favoritesKey, favoriteMovieState[idx])}>
                        <p className='movie-container__card__img'><img  src={`https://image.tmdb.org/t/p/original${poster_path}`}></img></p>
                        <article>
                           
                        <p className="movie-container__card__title">{title}</p>
                             
                        </article>
                      </Link>
                      <button className='movie-container__button' onClick={() => removeOneFavoriteMovieData(favoritesKey)}>Remove</button>
                </>
                </article>
              ))}
          </div>

          </>

          ) : (
          <>
          <div className='favorites-warning'>
          <p></p>  Go home to start adding your favorite movies!
            </div>
          </>
        )}
      </section>
        
    </>
  )
}
