import { combineReducers } from "redux";
import favoriteMovieReducer from "./favoriteMovieReducer";
import movieIdReducer from "./movieIdReducer";
import moviesReducer from "./moviesReducer";
import singleMovieDetailsReducer from "./singleMovieDetailsReducer";
import singleMovieReducer from "./singleMovieReducer";

const reducers = combineReducers({
    movies: moviesReducer,
    favoriteMovies: favoriteMovieReducer,
    movieIds: movieIdReducer,
    singleMovie: singleMovieReducer,
    singleMovieDetails: singleMovieDetailsReducer,
})

export default reducers