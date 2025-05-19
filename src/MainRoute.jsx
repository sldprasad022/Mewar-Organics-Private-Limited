import React from 'react'
import "tailwindcss";
import { Route,Routes } from "react-router-dom";
//import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Categeories from './Components/Categeories';
import Contact from './Components/Contact';
import Miyawaki from './Components/Miyawaki';
import GardenMaintance from './Components/GardenMaintance';
import HorizontalScrollDrag from './Components/HorizontalScrollDrag';


import Home2 from './Components/Home2';

const MainRoute = () => {
  return (
    <>
    <Header/>
    <Routes >
        <Route path='/' element={<Home2/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/categeories' element={<Categeories/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio/miyawaki' element={<Miyawaki/>}/>
        <Route path='/services/garden' element={<GardenMaintance/>}/>

       

        <Route path='/h1' element={<HorizontalScrollDrag/>} />

    </Routes>
    <Footer/>
    </>
    
  )
}

export default MainRoute