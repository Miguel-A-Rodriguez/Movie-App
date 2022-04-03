const singleMovieReducer = (state = [], action ) => {
    switch (action.type){
        case "saveSelectedMovieState":
            return  [action.payload]
        default: 
         return state 
    }
}




export default singleMovieReducer;