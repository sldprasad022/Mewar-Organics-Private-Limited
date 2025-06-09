
import React,{useState,useEffect} from 'react'
import mewarlogo from "../assets/mewarlogo.png";
import hmenuicon from "../assets/hmenuicon.png";
import mewarlogo1 from '../assets/mewarlogo1.png'
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom";

const Header = () => {

const [sidebarOpen,setSidebarOpen] = useState(false);


//------------------------------------------------------------------------

// useEffect(() => {
//   if (sidebarOpen) {
//     document.body.style.overflow = 'hidden'; // Prevent background scroll
//   } else {
//     document.body.style.overflow = 'auto';   // Restore scroll
//   }

//   // Clean-up in case the component unmounts
//   return () => {
//     document.body.style.overflow = 'auto';
//   };
// }, [sidebarOpen]);

//------------------------------------------------------------------------

const navigateTo = useNavigate();

const handleContact = ()=>{
  navigateTo('/contact')
}



  return (
      <>
        <div className="flex w-full h-[50px] md:h-[100px]  justify-between px-4 md:px-8 xl:px-20">
              {/*  */}
              <div className="my-3 md:my-[15px]">
                <img
                  src={mewarlogo1}
                  alt="mewarlogo1"
                  loading="lazy"
                  className="h-[35px] md:h-[60px] lg:h-[70px] object-cover"
                />
              </div>
                {/*  */}
                <div className="hidden lg:flex items-center gap-5 xl:gap-10 text-[#000] font-medium text-base">
                  <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'border-[#55833D]' : 'border-transparent'}  pb-2 border-b-2 text-[#000] lg:text-base xl:text-xl font-[Roboto] font-medium`}>Home</NavLink>
                  <NavLink to="/aboutus" className={({ isActive }) =>` ${isActive ? 'border-[#55833D]' : 'border-transparent'}  pb-2 border-b-2 text-[#000] lg:text-base xl:text-xl font-[Roboto] font-medium`}>About</NavLink>
                  <NavLink to="/services"  className={({ isActive }) =>` ${isActive ? 'border-[#55833D]' : 'border-transparent'}  pb-2 border-b-2 text-[#000] lg:text-base xl:text-xl font-[Roboto] font-medium`}>Services</NavLink>
                  <NavLink to="/portfolio"  className={({ isActive }) =>` ${isActive ? 'border-[#55833D]' : 'border-transparent'}  pb-2 border-b-2 text-[#000] lg:text-base xl:text-xl font-[Roboto] font-medium`}>Portfolio</NavLink>
                  <NavLink to="/categeories"  className={({ isActive }) =>` ${isActive ? 'border-[#55833D]' : 'border-transparent'}  pb-2 border-b-2 text-[#000] lg:text-base xl:text-xl font-[Roboto] font-medium`}>Categories</NavLink>
                  <NavLink to="/contact"  className={({ isActive }) =>` ${isActive ? 'border-[#55833D]' : 'border-transparent'}  pb-2 border-b-2 text-[#000] lg:text-base xl:text-xl font-[Roboto] font-medium`}>Contact</NavLink>
                </div>
                  {/*  */}
                <div className="flex items-center gap-10">
                  <div>
                    <img src={hmenuicon} alt="hmenuicon" className="h-8 md:h-12 lg:h-9 xl:h-11" onClick={()=>setSidebarOpen(!sidebarOpen)} />
                  </div>
                  <div className="hidden  lg:flex justify-center items-center  rounded-s-lg border-[#55833D] rounded-lg border-2 border-solid w-[126px] h-[56px] px-3 py-5  text-[#55833D] hover:bg-[#55833D] hover:text-[#fff]" onClick={handleContact}>
                    <h1 className="text-center text-sm font-medium  font-[Roboto]">
                      Get in Touch
                    </h1>
                  </div>
                </div>
                  {/* Sidebar */}
                      {/* {sidebarOpen&&(
                        <div className='fixed top-0 right-0 overflow-hidden max-h-fit z-50'>
                            <Sidebar setSidebarOpen={setSidebarOpen} />
                        </div>
                      )} */}


                      {/* {sidebarOpen && (
                        <div className='fixed top-0 right-0 z-50 h-screen w-full '>
                          <div className='absolute right-0 top-0 h-full'>
                            <Sidebar setSidebarOpen={setSidebarOpen} />
                          </div>
                        </div>
                      )} */}

                    {/* h-screen w-full" onClick={() => setSidebarOpen(false)} the sidebar will be close if we click out side of the sidebar */}
                      {sidebarOpen && (
                        <div className="fixed top-0 right-0 z-50 h-screen w-full" onClick={() => setSidebarOpen(false)}>
                          <div className="absolute right-0 top-0 h-full">
                            <Sidebar setSidebarOpen={setSidebarOpen} />
                          </div>
                        </div>
                      )}


        </div>
      </>
  )
}

export default Header



