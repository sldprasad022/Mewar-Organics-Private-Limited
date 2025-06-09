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


// import React, { Suspense, lazy } from 'react';
// import { Route, Routes } from "react-router-dom";
// import Header from './Components/Header';
// import Footer from './Components/Footer';

// // Lazy-loaded components
// const Home2 = lazy(() => import('./Components/Home2'));
// const About = lazy(() => import('./Components/About'));
// const Services = lazy(() => import('./Components/Services'));
// const Portfolio = lazy(() => import('./Components/Portfolio'));
// const Categeories = lazy(() => import('./Components/Categeories'));
// const Contact = lazy(() => import('./Components/Contact'));
// const Miyawaki = lazy(() => import('./Components/Miyawaki'));
// const GardenMaintance = lazy(() => import('./Components/GardenMaintance'));
// const HorizontalScrollDrag = lazy(() => import('./Components/HorizontalScrollDrag'));

// const MainRoute = () => {
//   return (
//     <>
//       <Header />
//       <Suspense
//         fallback={
//           <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600"></div>
//           </div>
//         }
//       >
//         <Routes>
//           <Route path='/' element={<Home2 />} />
//           <Route path='/aboutus' element={<About />} />
//           <Route path='/services' element={<Services />} />
//           <Route path='/portfolio' element={<Portfolio />} />
//           <Route path='/categeories' element={<Categeories />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/portfolio/miyawaki' element={<Miyawaki />} />
//           <Route path='/services/garden' element={<GardenMaintance />} />
//           <Route path='/h1' element={<HorizontalScrollDrag />} />
//         </Routes>
//       </Suspense>
//       <Footer />
//     </>
//   );
// };

// export default MainRoute;
