const favoriteMovieReducer = (state = [], action ) => {
    switch (action.type){
        case "addFavoriteMovie":
            return  [...state,action.payload];
            
        case "removeFavoriteMovieData":
            return state.filter((e) => e.id !== action.payload);
            
        case "removeAllFavoriteMovieData":
            return  deleteAllItemsInArray( state, action.payload );

        default: 
         return state 
    }
}

// delete everything in array
function deleteAllItemsInArray (array) {
    return []
}

// function previously used to delete singular items in the array, was unreliable so switched to using filter above

// function deleteItemInArray(array, index) {
//   if (index < 0) return array;
//   const newArray = [...array]
//   newArray.splice(index, 1)
//   return newArray



export default favoriteMovieReducer;