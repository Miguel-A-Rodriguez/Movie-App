import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function PopularMoviesApiRequest() {

    // redux state
    const state = useSelector ((state) => state.movies)
    const singleFavoriteMovieState = useSelector((state) => state.singleMovie)
    
    // redux variables
    const dispatch = useDispatch()
    const { saveMovies, removeMovies } = bindActionCreators(actionCreators, dispatch)
    

    // State for mount handling on useEffect
    
    const [movieDataCheck, setMovieDataCheck] = useState(null);

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_KEY,
          language: 'en-US&page=1',
          append_to_response: 'videos'
        }
      }).then((response) => {
        response.data && saveMovies(response.data);
        setMovieDataCheck(true);  
      })
      
    }, []);




    if (!movieDataCheck) return null;

    
    //  Quick test to see all the values from within the nested objects
    //      const visit = (obj, fn) => {
    //        const values = Object.values(obj)

    //         values.forEach(val => 
    //         val && typeof val === "object" ? visit(val, fn) : fn(val));
          
    //      };
    //      const print = (val) => console.log(val);
        
    //      visit(movieData, print);
 

// Converting to a string is not an ideal solution for handling a nested object of data as this conversion does not support some data types.
// Luckily our info is in array nested within an object.
// Saved the response into redux state so we can freely access different data across the app should we need different querys

return (
  <>

  </>
 )
}
