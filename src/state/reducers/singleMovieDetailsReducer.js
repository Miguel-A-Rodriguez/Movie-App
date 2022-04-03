const singleMovieDetailsReducer = (state = [], action ) => {
    switch (action.type){
        case "saveSelectedMovieDetailsState":
            return  [action.payload]
        default: 
         return state 
    }
}




export default singleMovieDetailsReducer;