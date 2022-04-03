export const saveMovies = (movie) => {
   return (dispatch) => {
       dispatch({
           type: "saveMovieData",
           payload: movie
       })
   }
}

// export const removeMovies = (movie) => {
//     return (dispatch) => {
//         dispatch({
//             type: "removeMovieData",
//             payload: movie
//         })
//     }
//  }
 export const addFavoriteMovie = (FavoriteMovie) => {
    return (dispatch) => {
        dispatch({
            type: "addFavoriteMovie",
            payload: FavoriteMovie
        })
    }
 }

 export const removeFavoriteMovieData = (FavoriteMovie) => {
    return (dispatch) => {
        dispatch({
            type: "removeFavoriteMovieData",
            payload: FavoriteMovie
        })
    }
 }

 export const removeAllFavoriteMovieData = (FavoriteMovie) => {
    return (dispatch) => {
        dispatch({
            type: "removeAllFavoriteMovieData",
            payload: FavoriteMovie
        })
    }
 }

 export const addMovieID = (MovieID) => {
    return (dispatch) => {
        dispatch({
            type: "addMovieID",
            payload: MovieID
        })
    }
 }

 export const saveSelectedMovieState = (singleFavoriteMovie) => {
    return (dispatch) => {
        dispatch({
            type: "saveSelectedMovieState",
            payload: singleFavoriteMovie
        })
    }
 }

 
 export const saveSelectedMovieDetailsState = (singleFavoriteMovieDetails) => {
    return (dispatch) => {
        dispatch({
            type: "saveSelectedMovieDetailsState",
            payload: singleFavoriteMovieDetails
        })
    }
 }
 