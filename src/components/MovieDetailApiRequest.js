import axios from "axios";
import { default as React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function MovieDetailApiRequest() {

  const dispatch = useDispatch()
  const { saveSelectedMovieDetailsState } = bindActionCreators(actionCreators, dispatch)

     // redux state
     const singleFavoriteMovieState = useSelector((state) => state.singleMovie)
     const movieIdsState = useSelector((state) => state.movieIds)
     const singleFavoriteMovieDetailsState = useSelector((state) => state.singleMovieDetails)
     
 
     // State for mount handling on useEffect
     const [movieDetailDataCheck, setMovieDetailDataCheck] = useState(null);

     useEffect(() => {
      if (singleFavoriteMovieState.length = 0 ) return
    //   axios.get(`https://api.themoviedb.org/3/movie/634649?api_key=8f93e74c5b9d096b206ab202da765e62&language=en-US`, 
    axios.get(`https://api.themoviedb.org/3/movie/${movieIdsState}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`, 
      ).then((response) => {
        response.data && saveSelectedMovieDetailsState(response.data)
        setMovieDetailDataCheck(true);  
      })
      
    }, []);


    if (!movieDetailDataCheck) return null;


  return (
    <>
    </>
  )
}
