const movieIdReducer = (state = [], action ) => {
    switch (action.type){
        case "addMovieID":
            // how to get only one id
            return  action.payload;
        default: 
         return state 
    }
}




export default movieIdReducer;