import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
    <div className='navigation'>
      <Link to="/">Home</Link>
      <Link to="/Favorites">Favorites</Link>
    </div>
    
    </>
  )
}
