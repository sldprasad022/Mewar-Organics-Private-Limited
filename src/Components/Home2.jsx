import React from 'react'

import hnature_1 from "../assets/hnature_1.png";
import hgrass_2 from "../assets/hgrass_2.png";
import himage_1 from "../assets/himage_1.png";
import { useState,useEffect } from "react";
import GRASS from "../assets/hgrass_2.png";


import { motion } from "framer-motion";



import himage_3 from "../assets/himage_3.png";
import himage_4 from "../assets/himage_4.png";
import himageBackground_5 from "../assets/himageBackground_5.png";
import himage_6 from "../assets/himage_6.png";
import himage_7 from "../assets/himage_7.png";
import himagearrow_8 from "../assets/himagearrow_8.png";
import himage_8 from "../assets/himage_8.png";
import himage_9 from "../assets/himage_9.png";
import himage_10 from "../assets/himage_10.png";
import himage_12 from "../assets/himage_12.png";
import himage_13 from "../assets/himage_13.png";
import himage_14 from "../assets/himage_14.png";
import himage_15 from "../assets/himage_15.png";
import himage_16 from "../assets/himage_16.png";
import himage_17 from "../assets/himage_17.png";
import himage_18 from "../assets/himage_18.png";


import himage_19 from "../assets/himage_19.png";
import image_20 from "../assets/image_20.png";
import image_21 from "../assets/image_21.png";
import image_22 from "../assets/image_22.png";
import image_23 from "../assets/image_23.png";

import image_24 from "../assets/image_24.png";
import image_25 from "../assets/image_25.png";
import image_26 from "../assets/image_26.png";
import image_27 from "../assets/image_27.png";
import image_28 from "../assets/image_28.png";
import image_29 from "../assets/image_29.png";


import image_30 from "../assets/image_30.png";
import image_31 from "../assets/image_31.png";
import image_32 from "../assets/image_32.png";
import image_33 from "../assets/image_33.png";

import image_34 from "../assets/image_34.png";

import p_1 from "../assets/p_1.png";
import p_2 from "../assets/p_2.png";
import p_3 from "../assets/p_3.png";
import p_4 from "../assets/p_4.png";
import p_5 from "../assets/p_5.png";
import p_6 from "../assets/p_6.png";
import p_7 from "../assets/p_7.png";

import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import ScrollContainer from 'react-indiana-drag-scroll';

const Home2 = () => {



const navigateTo = useNavigate();

const handleClickCategeory = ()=>{
  navigateTo('/categeories')
}

const handleClickService = ()=>{
  navigateTo('/services')
}

const handleClick = ()=>{
    navigateTo('/services')
  }

 const handleContact = ()=>{
    navigateTo('/contact')
  }




  //----------------------- Scrollbar  Code --------------------------------------------

  const dataList = [
    {
        image : p_1,
        title:'Plantation and Sales'
    },
    {
      image : p_2,
      title:'Miyawaki Forest Development'
    },
    {
      image : p_3,
      title:'Custom Garden Solutions'
    },
    {
      image : p_4,
      title:'Garden Maintenance'
    },
    {
      image : p_5,
      title:'Planning and Consulting'
    },
    {
      image : p_6,
      title:'Educational Workshops & Awareness:'
    },
    {
    image : p_7,
    title:'Vatika Creations'
    }
  ]


  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  //----------------------- Scrollbar  Code------------------------------------------------

  //--------------------------Animation--------------------------------------------------------------

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimated(true);
  }, []);

  //-----Landing Page background Image Animation----
    
  const backgroundImagerightSideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.8 } },
  };

  const bottomVariants = {
    hidden: { y: 340, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.8 } },
  };
  
  //-----Landing Page background Image Animation----

//------------Normal Text and Images-----------------------------------
//1] X-Axis (left and right)

const leftSideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
};

const rightSideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
};


  //2] Y-Axis (bottom and Top)
const bottomTopVariants = {
    hidden: { y: 400, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 3.8 } },
};


const bottomTopVariants1 = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};




  //--------------------------Animation--------------------------------------------------------------

  return (
    <div className='flex flex-col gap-8 lg:gap-8  xl:gap-14'>


      {/* 1st section */}
        <div className='md:h-[750px] lg:h-[730px] xl:h-[860px] bg-cover bg-center relative' style={{ backgroundImage: `url(${hnature_1})` }}>

            {/*  */}
            <section className='w-[520px] lg:w-[660px] xl:w-[809px] md:pt-[200px] lg:pt-[220px]'>
               <motion.div className='' variants={backgroundImagerightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"} >
                  <h1 className="mb-4 font-bold md:text-3xl lg:text-5xl xl:text-[64px] text-black mx-auto md:max-w-[40%]  lg:max-w-[80%] text-center font-playfair">Nature’s Best Crafted for You</h1>
                  <p className="text-[#30341b] md:text-lg lg:text-xl xl:text-[24px] text-center font-semibold mx-auto w-full md:max-w-[40%] max-w-[70%] font-[Roboto]">Experience the power of organic wellness with Mewar Organics</p>
              </motion.div>

               <div className='md:pl-46 lg:pl-60 xl:pl-80 pt-6 lg:pt-8'>
                  <motion.button className='flex gap-2 items-center md:p-3 lg:p-4 xl:p-5 rounded-xl text-xl bg-[#55833D] text-white flex itmes-center' variants={bottomVariants} initial="hidden" animate={animated ? "visible" : "hidden"} onClick={handleContact}>
                  Contact Us
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1096_350)">
                    <path
                      d="M13.9649 22.3181L15.5785 15.7106L12.4866 21.2058L13.9649 22.3181ZM11.9161 12.9549L6.0142 16.3357L7.49247 17.448L11.9161 12.9549ZM14.9805 25.168L10.3193 21.6607L16.503 10.6703L7.6557 19.6566L2.99448 16.1493L19.5092 6.67499L14.9805 25.168Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1096_350">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="matrix(0.601244 -0.799066 -0.799066 -0.601244 15.9756 28.0029)"
                      />
                    </clipPath>
                  </defs>
                </svg>
               </motion.button>
               </div>
            </section>
            
            {/*  */}
            <div className="absolute bottom-0 w-full">
                <img src={GRASS} alt="image" className="w-full h-[42px]" />
            </div>
        </div>


      {/* 2nd Section */}
      <div className='md:px-8 lg:px-12 xl:px-20'>
          <h1 className='text-center md:text-3xl lg:text-4xl xl:text-5xl mb-5 lg:mb-10 font-semibold font-playfair'>Welcome To Mewar Organics</h1>
          <div className='w-full flex flex-col lg:flex-row items-center md:gap-5 lg:gap-10'>
              {/* 2-1 */}
              <motion.div className="overflow-hidden w-full lg:w-1/2" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
                  <img src={himage_1} alt="himage_1" className="md:h-[280px] w-full lg:h-[420px] xl:h-auto  object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"/>
              </motion.div>
              {/* 2-2 */}
              <motion.p className="w-full lg:w-1/2 md:text-lg lg:text-xl font-[Roboto]" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              At Mewar Organics Pvt. Ltd., we invite you to be a part of a
              greener, healthier future. Our commitment to conservation goes
              beyond plants — it’s about restoring balance to the environment,
              nurturing biodiversity, and preserving nature’s legacy for
              generations to come. Whether it’s through our diverse plant
              collections, ecofriendly practices, or the creation of lush,
              sustainable landscapes, every step we take is rooted in care for
              the Earth. Join us in cultivating a world where nature thrives,
              and every green space tells a story of harmony and growth.
            </motion.p>
          </div>
      </div>


      {/* 3rd Section */}
      <div className='md:px-8 lg:px-12 xl:px-20'>
        <h1 className='text-center md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:mb-5 lg:mb-10 font-playfair '>About Us</h1>
        <div className='w-full flex flex-col lg:flex-row items-center gap-10'>
            {/*3-1 */}
            <motion.div className="overflow-hidden w-full lg:w-1/2" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
                  <img src={himage_3} alt="himage_3" className="md:h-[360px] w-full lg:h-[690px]  xl:h-auto  object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"/>
            </motion.div>
            {/* 3-2 */}
             <motion.div className="w-full lg:w-1/2 flex flex-col md:gap-3 lg:gap-6" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <h1 className="lg:text-xl xl:text-2xl font-bold font-[Roboto]">Pure. Natural. Sustainable</h1>
              <p className="md:text-lg lg:text-xl  font-[Roboto]">
                Mewar Organics Pvt. Ltd., based in the historic city of
                Chittaurgarh, Rajasthan, is a premier nursery and landscaping
                firm dedicated to promoting biodiversity and sustainable green
                solutions. Our expertise lies in cultivating a diverse
                collection of forest, native, flowering, and fruit plants,
                alongside rare medicinal and exotic species. We aim to create
                green spaces that not only enhance aesthetics but also
                contribute to environmental well-being through eco-conscious
                practices.
              </p>
              <p className="md:text-lg lg:text-xl  font-[Roboto]">
                At Mewar Organics, we go beyond just selling plants we provide
                holistic green solutions including plantation services, themed
                gardens (like Nakshatra and Rashi Vatikas), Miyawaki forest
                development, and custom garden projects such as terrace gardens,
                kitchen gardens, and balcony setups. With a deep respect for
                nature and cultural heritage, we blend traditional wisdom with
                modern landscaping techniques to transform spaces into thriving,
                sustainable ecosystems.
              </p>
            </motion.div>
        </div>
      </div>

      {/* 4th Section */}

      <img src={himage_4} alt="himage_4" className="w-full md:h-[270px] lg:h-auto xl:h-[409px] lg:px-12 xl:px-20 bg-cover bg-center  bg-cover bg-center"/>

      {/* 5th Section ------------------------------------------------------------ Scrollbar Functionality with out java script */}
           
      <img src={himage_6} alt="himage_6" className="md:px-8 lg:px-12 xl:px-20 w-full"/>

      <div className='md:px-8 lg:px-12 xl:px-20'>
          <ScrollContainer className="flex md:gap-3 lg:gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing" vertical={false} hideScrollbars={true}>
            {dataList.map((eachObject, index) => (
              <div key={index} className="p-5 bg-[#FFF] rounded-xl flex-shrink-0 flex flex-col gap-[16px] items-center justify-center w-[250px] h-[150px] hover:border hover:border-b-[#55833D] hover:border-solid hover:border-b-8" onClick={handleClick}>
                <img src={eachObject.image} alt="icon" className="w-12 h-12 mb-2" />
                <p className="text-center text-lg">{eachObject.title}</p>
              </div>
            ))}
        </ScrollContainer>
      </div>

      

      {/* 6th Section */}
      <div className='md:px-8 lg:px-12 xl:px-20 w-full flex flex-col lg:flex-row gap-5 lg:gap-10 items-center overflow-hidden'>
          <motion.div className='overflow-hidden w-full lg:w-1/2' variants={bottomTopVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
             <img src={himage_7} alt="himage_7" className="md:h-[280px] lg:h-[700px] xl:h-[532px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
          </motion.div>
          <motion.div className='w-full lg:w-1/2 flex flex-col gap-4 lg:gap-9' variants={bottomTopVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <p className="md:text-lg lg:text-xl font-[Roboto]">
              At Mewar Organics, we believe in transforming spaces into thriving
              green ecosystems that support both nature and human well-being. Our
              projects focus on creating sustainable landscapes using native
              plants, organic practices, and designs that blend beauty with
              environmental purpose. Whether working on small urban gardens or
              expansive forest projects, our approach ensures longterm ecological
              balance and aesthetic charm.
            </p>
            <p className="md:text-lg lg:text-xl font-[Roboto]">
              Our work goes beyond just planting; we create purposeful landscapes
              that inspire, educate, and heal. Each project is carefully tailored
              to its location, climate, and cultural importance, ensuring that
              every green space serves a unique function—whether for biodiversity
              restoration, wellness, education, or spiritual growth. Through our
              diverse portfolio, we strive to bring nature closer to people while
              preserving the rich flora of Rajasthan and all over India.
            </p>
            <div className="flex justify-center">
                <button className="bg-[#55833D] hover:bg-zinc-800 text-lg text-white  px-5 md:py-3  lg:py-4  xl:py-5 rounded-lg flex items-center  gap-[2px]" onClick={handleClickService}>
                    Start a Project
                    <img src={himagearrow_8} alt="himagearrow_8" className="h-[24px]"/>
                 </button> 
            </div>                       
          </motion.div>
      </div>

      {/* 7th Section */}
      <div className='md:px-8 lg:px-12 xl:px-20'>
        <h1 className="md:text-2xl lg:text-3xl text-[#55833D] font-semibold font-[Roboto]">Our Projects</h1>
        <h1 className="md:mb-7 lg:mb-4 xl:mb-7 md:text-3xl lg:text-4xl font-semibold font-playfair">Works we have done</h1>
        <div className='grid grid-cols-12 md:gap-4 xl:gap-8'>
          {/* 7-1-1 */}
          <motion.div className='col-span-12 lg:col-span-4' variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <div className='overflow-hidden '>
                  <img src={himage_8} alt="himage_8" className="w-full md:h-[264px] lg:h-[350px]  xl:h-[368px] 2xl:h-[300px] rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
              </div>
              <div className="md:p-[6px] xl:p-[10px]">
                <h1 className="lg:text-base xl:text-lg font-semibold text-center  md:pb-[10px] xl:pb-[28px] font-[Roboto]">
                  Miyawaki Forest
                  <br />
                  <span className="lg:text-base xl:text-lg text-[#212529] font-normal italic font-[Roboto]">
                    Urban Biodiversity Project
                  </span>
                </h1>
                <div className="w-[144px] h-[4px] bg-[#55833D] mx-auto"></div>
                <p className="lg:mt-2 xl:mt-5 md:text-lg xl:text-xl rounded-[30px] font-[Roboto] ">
                    A dense, fast-growing forest usingthe Miyawaki technique, plantedwith native species like Neem,Kadamba, Arjun Tree, and Teak. 
                    Thisproject restores urban biodiversity,improves air quality, and creates aself-sustaining ecosystem, 
                    ideal forestation and corporate sustainability initiatives.
                </p>
            </div>
          </motion.div>
          {/* 7-1-2 */}
          <motion.div className='col-span-12 lg:col-span-4' variants={bottomTopVariants1} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <div className="md:p-[6px] xl:p-[10px]">
              <h1 className="lg:text-base xl:text-lg font-semibold text-center md:pb-[10px] xl:pb-[28px] font-[Roboto]">
                Panchvati Vatika <br />{" "}
                <span className="lg:text-base xl:text-lg italic text-[#212529] font-normal font-[Roboto]">
                  Mythological Garden Design
                </span>
              </h1>
              <div className="w-[144px] h-[4px] bg-[#55833D] mx-auto"></div>
              <p className="lg:mt-2 xl:mt-5 md:text-lg xl:text-xl font-[Roboto] ">
                A culturally significant gardenfeaturing the five sacred trees
                fromancient mythology – Peepal, Banyan,Amla, Ashoka, and
                Belpatra.Designed for spiritual reflection and heritage
                preservation, this space combines nature with mythology,offering
                a serene atmosphere formeditation and cultural storytelling.
              </p>
            </div>
              <div className='overflow-hidden '>
                  <img src={himage_9} alt="himage_9" className="w-full md:h-[264px] lg:h-[350px]  xl:h-[368px] 2xl:h-[300px]  rounded-xl  object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
              </div>
          </motion.div>
          {/* 7-1-3 */}
          <motion.div className='col-span-12 lg:col-span-4' variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <div className="overflow-hidden">
              <img src={himage_10} alt="himage_10" className="w-full md:h-[264px] lg:h-[350px]  xl:h-[368px] 2xl:h-[300px]  rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
            </div>
            <div className="md:p-[6px] xl:p-[10px]">
              <h1 className="lg:text-base xl:text-lg font-semibold text-center font-[Roboto] md:pb-[10px] xl:pb-[28px]">Balcony Garden<br />
                   <span className="lg:text-base xl:text-lg text-[#212529] font-[Roboto] font-normal italic">Greening Compact Spaces</span>   
               </h1>                  
               <div className="w-[144px] h-[4px] bg-[#55833D] mx-auto"></div>
                  <p className="lg:mt-2 xl:mt-5 md:text-lg xl:text-xl rounded-[30px] font-[Roboto] ">
                     A minimalist green space crafted for compact urban balconies,
                     featuringornamental plants like Lipstick Plant,Chandni, Ferns,
                     Money Plant, andPeace Lily. Designed to bringgreenery into small
                     living spaces,this project focuses on aestheticcharm while
                     requiring minimalmaintenance.         
                  </p>
            </div>                                         
          </motion.div>
        </div>
        {/*  */}
        <motion.div className='flex justify-end' variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
          <button className=" text-lg px-5 lg:px-8 py-2 lg:py-3 rounded-3xl border border-2 border-[#55833D] border-solid hover:bg-[#55833D] hover:text-white transition-all duration-300">
              Explore More
          </button>
        </motion.div>
      </div>
      

      {/* 8th Section */}
      <div className='md:px-8 lg:px-12 xl:px-20'>
        <h1 className="text-2xl lg:text-3xl text-[#55833D] font-medium mb-[5px] font-[Roboto]">Plants Category</h1>
        <h1 className="md:text-3xl lg:text-4xl font-semibold mb-[10px] font-playfair">Explore Our Plants Collection</h1>
        <h1 className="md:text-xl lg:text-2xl font-semibold font-playfair">Discover a variety of organic plants for your home, garden, and wellness</h1>
        <p className="md:mt-4 lg:mt-8 md:text-lg lg:text-xl font-[Roboto] tracking-wide">
          At Mewar Organics, we offer a diverse range of plants carefully
          selected for their environmental, medicinal, and aesthetic value. Our
          collection includes native species, exotic fruits, vibrant flowering
          plants, and sacred botanicals, all cultivated with care to promote
          biodiversity and sustainable greenery.
        </p>
        {/* 8-2 */}
        <div className='grid grid-cols-12 mt-[20px] md:gap-6 lg:gap-14 xl:gap-25'>
            {/* 1st */}
               <div className="col-span-6 lg:col-span-4 border border-2 lg:border-4 border-[#55833D] border-dashed flex flex-col justify-between h-full gap-5 text-center md:px-4 lg:px-12 md:py-5 xl:px-16 xl:py-10 rounded-3xl ">
                <div className="flex justify-center">
                  <img src={himage_12}  alt="himage_12" className="w-[150px] h-[150px]"/>
                </div>            
                <h1 className="lg:text-xl xl:text-2xl text-[#55833D] font-playfair">Forest & Native Plants</h1>           
                 <p className="lg:text-base xl:text-lg font-[Roboto]">
                  Our Forest and Native Plants collection offers over 150+ varieties
                  that play a crucial role in promoting biodiversity, air
                  purification, and ecological restoration.        
                </p>           
                <div className="flex justify-center">
                  <button className="px-[20px] py-[12px] bg-[#55833D] text-white rounded-lg hover:text-[green] hover:bg-white hover:border hover:border-solid hover:border-[#55833D] transition-all duration-300" onClick={handleClickCategeory} >
                      Show more
                  </button>
                </div>                    
              </div>
              {/* 2nd */}
              <div className="col-span-6 lg:col-span-4 border border-2 lg:border-4 border-[#55833D] border-dashed flex flex-col justify-between h-full gap-[20px] text-center  md:px-4 lg:px-12 md:py-5 xl:px-16 xl:py-10 rounded-3xl ">
                <div className="flex justify-center">
                  <img src={himage_13} alt="himage_13" className="w-[150px] h-[150px]"/>
                </div>              
                 <h1 className="lg:text-xl xl:text-2xl text-[#55833D] font-playfair">Flower Plants</h1>              
                 <p className="lg:text-base xl:text-lg font-[Roboto]">
                  Our Flower Plants collection at Mewar Organics offers over 60+
                  rare, exotic, and native varieties, each cultivated with zero
                  chemicals to ensure natural beauty.
                 </p>             
                <div className="flex justify-center">
                  <button className="px-[20px] py-[12px] bg-[#55833D] text-white rounded-lg hover:text-[green] hover:bg-white hover:border hover:border-solid hover:border-[#55833D] transition-all duration-300" onClick={handleClickCategeory}>
                    Show more
                  </button>
                </div>           
              </div>
              {/* 3rd */}
              <div className="col-span-6 md:col-start-4 lg:col-span-4 border border-2 lg:border-4 border-[#55833D] border-dashed flex flex-col justify-between h-full gap-[20px] text-center  md:px-4 lg:px-12 md:py-5 xl:px-16 xl:py-10 rounded-3xl ">
                <div className="flex justify-center">
                  <img src={himage_14} alt="image_14" className="w-[150px] h-[150px]"/>
                </div>              
                <h1 className="lg:text-xl xl:text-2xl text-[#55833D] font-playfair">Fruits Plants</h1>              
                <p className="lg:text-base xl:text-lg font-[Roboto]">
                  Our Fruit Plants collection is over 120+ high-quality, organically
                  nurtured fruit varieties, grown without the use of chemicals,
                  ensuring purity, safety.
                </p>              
                <div className="flex justify-center">
                  <button className="px-[20px] py-[12px] bg-[#55833D] text-white rounded-lg hover:text-[green] hover:bg-white hover:border hover:border-solid hover:border-[#55833D] transition-all duration-300" onClick={handleClickCategeory}>
                    Show more
                  </button>
                </div>            
              </div>                           
        </div>
      </div>

      {/* 9th Section */}
      <div className='md:px-8 lg:px-12 xl:px-20 w-full flex flex-col lg:flex-row md:gap-5 lg:gap-10'>
          <motion.div className='w-full lg:w-1/2' variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <h1 className="md:text-3xl lg:text-4xl xl:text-5xl mb-5 lg:mb-10 font-playfair font-semibold"> Sustainable Landscaping with Mewar Organics</h1>
            <p className="text-lg lg:text-xl font-[Roboto]">
              Landscaping is about creating beautiful, functional spaces that
              harmonize with nature. At Mewar Organics, we design landscapes
              tailored to the unique climate of Rajasthan, focusing on native
              plants, sustainable practices, and eco-friendly solutions. From
              serene gardens to biodiversity-focused projects, our approach
              ensures minimal maintenance and maximum environmental benefit.
              Transform your space into a thriving green sanctuary with our expert
              guidance.
            </p>
          </motion.div>
          <motion.div className='w-full lg:w-1/2 overflow-hidden' variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
             <img src={himage_15} alt="himage_15" className="w-full md:h-[274px] lg:h-[420px]  xl:h-auto  object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-110" />
          </motion.div>
      </div>

      {/* 10th Section */}
      <div className="md:px-8 lg:px-12 xl:px-20 ">
        <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-semibold mb-[32px]">Our GreenSpace Services</h1>
         <div className="grid grid-cols-12 gap-10">
            <div className='col-span-4 '>
                <div className='overflow-hidden'>
                    <img src={himage_16} alt='himage_16' className="w-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <h1>tfyghjhj;ojopkjok;lk;k;kkk</h1>
            </div>         

            {/* <div className='relative w-full col-span-4 group overflow-hidden'>
              <img src={himage_17} alt='himage_17' className="w-full h-auto" />
                <motion.h1 className="absolute left-1/2 -translate-x-1/2 bottom-0  text-xl font-bold group-hover:bottom-1/2 transition-all duration-500"
                    initial={{ opacity: 0, y: 50 }} whileHover={{ opacity: 1, y: '-50%' }} transition={{ duration: 0.5 }}
                >
                  tfyghjhj;ojopkjok;lk;k;kkk
                  </motion.h1>
            </div> */}


              <div className='col-span-4'>
                <div className='overflow-hidden'>
                    <img src={himage_17} alt='himage_17' className="w-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <h1>tfyghjhj;ojopkjok;lk;k;kkk</h1>
              </div>
              <div className='col-span-4'>
                  <div className='overflow-hidden'>
                      <img src={himage_18} alt='himage_18' className="w-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                  </div>
                  <h1>tfyghjhj;ojopkjok;lk;k;kkk</h1>
              </div>
          </div>
        </div> 

      {/* 11th Section */}
      <div className='md:px-8 lg:px-12 xl:px-20 flex flex-col  relative'>
            {/*11-1  */}
          <div className="flex gap-[161px] mb-[30px]">
            <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-semibold">Greenscapes</h1>
            <p className="md:text-lg lg:text-xl font-[Roboto] ">“Experience the calming embrace of nature with greenscape by Mewar Orgnics that inspire peace and serenity. Let vibrant
                greenery create a sanctuary of positivity, where every space feels refreshed and alive.”
            </p>
          </div>
          {/* 11-2 */}
          <div className="mb-[32px] grid grid-cols-2 gap-10">
            <div className="overflow-hidden">
              <img src={image_20} alt='himage_20' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
            </div>
            <div className="overflow-hidden">
              <img src={image_21} alt='himage_21' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
            </div>           
            <div className="overflow-hidden">
              <img src={image_22} alt='himage_22' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
            </div>
            <div className="overflow-hidden">
              <img src={image_23} alt='himage_23' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
            </div>                    
          </div>
          {/*11-3 */}
          <div className="flex justify-end absolute top-[-30px] right-[0px]">
            <img src={himage_19} alt='himage_19' className="bg-cover bg-center h-[438px] w-[542px]"/>
          </div>            
      </div>


        {/* 12th Section */}
        <div className='md:px-8 lg:px-12 xl:px-20'>
          <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-playfair lg:text-center font-semibold mb-[10px]">Why Mewar Organics?</h1>
          <h1 className="md:text-xl lg:text-2xl font-playfair lg:text-center mb-[32px]">Bringing Nature’s Best to Your Home</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5  lg:gap-6 xl:gap-8">
              <div className="bg-lime-300 md:p-5 lg:py-6 lg:px-6 xl:py-12 xl:px-10 rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                <div className="overflow-hidden">
                  <img src={image_24} alt='image_24' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <h1 className="text-center text-[#FFF] font-bold font-[Roboto] md:text-lg xl:text-xl my-4 tracking-wide">Native Plant Advocacy</h1>
                <h1 className="text-center text-[#FFF] font-[Roboto] text-base">Focus on local and sustainable plant species</h1>
              </div>
              <div className="bg-lime-300 md:p-5 lg:py-6 lg:px-6 xl:py-12 xl:px-10 rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                <div className="overflow-hidden">
                  <img src={image_25} alt='image_25' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/> 
                </div>
                <h1 className="text-center text-[#FFF] font-[Roboto] font-bold md:text-lg xl:text-xl my-4 tracking-wide">Innovative Solutions</h1>
                <h1 className="text-center text-[#FFF] font-[Roboto] text-base">Customized gardens / Vatikas for every need.</h1>
              </div>
              <div className="bg-lime-300 md:p-5 lg:py-6 lg:px-6 xl:py-12 xl:px-10 rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                <div className="overflow-hidden">
                  <img src={image_26} alt='image_26' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <h1 className="text-center text-[#FFF] font-[Roboto] font-bold md:text-lg xl:text-xl my-4 tracking-wide">Expertise in Landscaping</h1>
                <h1 className="text-center text-[#FFF] font-[Roboto] text-base">Skilled professionals to guide every project.</h1>
              </div>
              <div className="bg-lime-300 md:p-5 lg:py-6 lg:px-6 xl:py-12 xl:px-10 rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                <div className="overflow-hidden">
                  <img src={image_27} alt='image_27' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <h1 className="text-center text-[#FFF] font-[Roboto] font-bold md:text-lg xl:text-xl my-4 tracking-wide">Environmentally Conscious</h1>
                <h1 className="text-center text-[#FFF] font-[Roboto] text-base">Practices that prioritize soil health and water conservation.</h1>
              </div>
          </div>
        </div>


        {/* 13th Section ----------------*/}
        <div className='md:px-8 lg:px-12 xl:px-20'>
          <motion.h1 className='md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-semibold mb-8' variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>Unqiue,eite & rare</motion.h1>
          <div className='w-full flex flex-col lg:flex-row gap-10'>
            <motion.img src={image_28} alt='image_28' className='h-[400px] lg:h-auto w-full lg:w-1/2' variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}/>
            <motion.div className='w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8' variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-semibold">Living Art:</h1>
              <img src={image_29} alt='image_29' className="w-[281px] h-[80px]"/>
              <h1 className="md:mt-1 lg:mt-[12px] text-lg lg:text-xl  font-playfair font-semibold ">Breaking New Ground in Rajasthan and India</h1>
              <p className="md:text-lg lg:text-xl font-[Roboto]">
                At Mewar Organics, we are proud to introduce Terrariums and Paludariums, an exclusive offering redefining how we interact
                with nature. These artistic, self-sustaining ecosystems are a firstof-its-kind in Rajasthan and among the few in India, bringing
                innovation and elegance to modern indoor gardening.
              </p>
              <p className="md:text-lg lg:text-xl font-[Roboto]">
                • Terrariums: Miniature gardens enclosed in glass, combining exotic plants like moss, ferns, and succulents, designed to thrive with minimal maintenance.<br/>
                • Paludariums: A stunning fusion of land and water elements, incorporating aquatic plants, tropical greens, and water features to create immersive natural habitats.
              </p>
            </motion.div>
          </div>
        </div>


        {/* 14th Section */}
        <div className='md:px-8 lg:px-12 xl:px-20 w-full flex flex-col lg:flex-row md:gap-5 lg:gap-10 items-center'>
          {/* 14-1 */}
               <motion.div className="flex flex-col w-full lg:w-1/2" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
                  <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-semibold md:mb-5 lg:mb-12">Why Choose Terrariums <br/> & Paludariums ?</h1>
                  <p className="md:text-lg lg:text-xl font-[Roboto] md:mb-4 lg:mb-7">
                      • Perfect for homes, offices, and luxury interiors.<br/>
                      • Require low maintenance while offering high visual appeal.<br/>
                      • Act as natural air purifiers and conversation starters.
                  </p>
                  <p className="md:mb-4 lg:mb-8 font-[Roboto] md:text-lg lg:text-xl">
                    Pioneering Elegance in Green Design With Mewar Organics, you get handcrafted, bespoke terrariums and paludariums tailored to your style. This grand
                    innovation positions us at the forefront of modern landscaping and eco-friendly interiors, offering unmatched beauty and functionality.
                  </p>
                  <p className="md:text-lg lg:text-xl font-[Roboto]">
                    This revolutionary concept is your gateway to sophisticated, nature-inspired living. Let us bring this rare luxury into your spaces.
                  </p>
              </motion.div>
          {/* 14-2 */}
          <motion.div className="w-full lg:w-1/2" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <div className="grid grid-rows-3 grid-cols-2 gap-2">
                <div className="row-span-2 overflow-hidden">
                    <img src={image_30} alt='image_30' className="h-[300px] lg:h-[400px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <div className="row-start-1 col-start-2 row-span-1 overflow-hidden">
                    <img src={image_31} alt='image_31' className="h-[146px] lg:h-[196px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <div className="row-span-1 overflow-hidden">
                    <img src={image_32} alt='image_32' className="h-[146px] lg:h-[196px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
                <div className="row-start-2 col-start-2 row-span-2 overflow-hidden">
                    <img src={image_33} alt='image_33' className="h-[300px] lg:h-[400px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </div>
            </div>  
          </motion.div>
        </div>

        {/* 15th Section */}
        <div className="md:px-8 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center gap-10 w-full">
          {/* 15-1 */}
          <img src={image_34} alt='image_34' className="w-full lg:w-1/2 h-[400px] lg:h-auto"/>
          {/* 15-2 */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl text-[#55833D] font-medium font-[Roboto] mb-[10px]">FREE ESTIMATION</h1>
            <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-playfair font-semibold md:mb-10 lg:mb-[72px]">Request a Quote</h1>
            <div className="">
              <form className="flex gap-[20px]">
                <div className="w-1/2 flex flex-col gap-[40px]">
                  <input className="md:h-[52px] lg:h-[66px] xl:h-[78px] lg:rounded-[30px] rounded-[50px] bg-[#F4F2ED]" placeholder="      Your Name"/>
                  <input className="md:h-[52px] lg:h-[66px] xl:h-[78px] lg:rounded-[30px] rounded-[50px] bg-[#F4F2ED]" placeholder="      Your Email" />
                  <input className="md:h-[52px] lg:h-[66px] xl:h-[78px] lg:rounded-[30px] rounded-[50px] bg-[#F4F2ED]" placeholder="      drop down"/>
                </div>
                <div className="w-1/2 flex flex-col gap-14 lg:gap-13 xl:gap-10">
                  <textarea className="h-[130px] lg:h-[160px] xl:h-[196px] lg:rounded-[18px] rounded-[24px] bg-[#F4F2ED]" placeholder="     Write Message"/>
                  <button className="bg-[#55833D] rounded-xl px-5 py-3 lg:px-6 lg:py-2  xl:px-8 xl:py-4 text-[#fff]">Make an Appointment</button>
                </div>
                </form>
            </div>
          </div>
        </div>
        



    </div>
  )
}

export default Home2