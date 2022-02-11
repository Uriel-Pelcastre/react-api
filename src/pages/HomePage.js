import React from 'react';
import { NavBarHome } from '../components/navBar/NavBarHome';
import { Carrucel } from './Carrucel';
import Navbar from "../components/navbar";
// import { Carrucel } from '../components/Carrucel';
// import { NavBarHome } from '../components/navBars.js/NavBarHome';

export const HomePage = () => {
return(
  <div>
    <Navbar/>
       <NavBarHome/>
      <Carrucel/> 
  </div>
)
};
