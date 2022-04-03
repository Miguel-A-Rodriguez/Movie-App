import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
// import './App.css';
// import "./dist/output.css";
import reportWebVitals from './reportWebVitals';
import Details from './Routes/Details';
import Favorites from './Routes/Favorites';
import Home from './Routes/Home';
import { store } from "./state/store";

ReactDOM.render(
      
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
           <Route path='/Favorites' element={<Favorites/>} />
           <Route path='/Details' element={<Details/>} />
           <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>

      </Provider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
