import React from 'react';
import { useSelector } from "react-redux";
import MovieSelect from '../components/MovieSelect';
import Navigation from '../components/Navigation';


function Home() {
  
  const state = useSelector((state) => state.movies)


  return (
    <>
      <Navigation />
      <MovieSelect />
    </>
  )
}

export default Home;
