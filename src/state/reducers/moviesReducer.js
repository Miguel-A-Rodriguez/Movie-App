const moviesReducer = (state = null, action ) => {
    switch (action.type){
        case "saveMovieData":
            return  action.payload;
        case "removeMovieData":
            return state - action.payload;
        default: 
         return state 
    }
}

export default moviesReducer;