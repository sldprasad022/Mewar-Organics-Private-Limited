import React from "react";

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



const Home = () => {


  
  const navigateTo = useNavigate();

//----------------------- Scrollbar  Code
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

  //----------------------- Scrollbar  Code


  const handleClick = ()=>{
    navigateTo('/services')
  }

  const handleContact = ()=>{
    navigateTo('/contact')
  }

  const handleCategeory = ()=>{
    navigateTo('/categeories')
  }

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


 //---------------------------------------------Animation Logic-------------------------------------------------------------

  const [animated, setAnimated] = useState(false);

  const [hoverAnimate,setHoverAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimated(true);
  }, []);

  //------------------Landing Page background Image Animation---------------
  const backgroundImagerightSideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.8 } },
  };

  const bottomVariants = {
    hidden: { y: 340, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.8 } },
  };


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




  //---------------------------------------------Animation Logic-------------------------------------------------------------

  return (
    <div className="flex flex-col ">
     

      {/* correct without position Prasad */}
      {/* <div className="bg-cover bg-center h-[800px]" style={{backgroundImage : `url(${hnature_1})`}}>
          <div className="pl-[100px] pt-[300px] text-center w-[30%] flex flex-col gap-5">
            <p className="text-5xl ">Nature’s Best Crafted for You</p>
            <p className="text-2xl">Experience the power of organic wellness with Mewar Organics</p>
          </div>
      </div> */}

      {/* Section-2 */}
      {/* <div className="flex flex-col w-full">
        <img
          src={hnature_1}
          alt="hnature_1"
          className="h-[800px] w-full object-cover"
        />
        <img
          src={hgrass_2}
          alt="hgrass_2"
          className="h-[42px] w-full mt-[-42px] object-cover"
        />
      </div> */}

      {/* Correct Pravalika */}
      {/* <div className="hero-bgimg h-[800px] relative ">
            <div className="grid grid-cols-12">
                  <div className="col-span-6 border border-red-400">
                      <h1 className="font-bold text-[64px] text-black mx-auto w-full max-w-[80%] text-center">
                        Nature’s Best Crafted for You
                      </h1>
                      <p className="text-[#30341b] text-[24px] text-center font-semibold mx-auto w-full max-w-[70%]">
                        Experience the power of organic wellness with Mewar Organics
                      </p>
                      <button className="text-2xl bg-[#2A3B20]">Contact Us</button>
                  </div>
                <div className="col-span-5"></div>
            </div>
            <div className="absolute bottom-0 ">
              <img src={GRASS} alt="image" className="w-[1900px] h-[42px]" />
            </div>
      </div> */}

      
      <div className="h-[860px]   bg-cover bg-center   relative " style={{ backgroundImage: `url(${hnature_1})` }}>
          
        {/*  */}
        <div className="grid grid-cols-12 pt-[200px]">
          <div className="col-span-6">
              <motion.div variants={backgroundImagerightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"} className="w-[709px]  flex flex-col gap-[20px]">
                <h1 className="font-bold md:text-[36px] lg:text-[54px] text-black mx-auto w-full max-w-[80%] text-center font-playfair">
                  Nature’s Best Crafted for You
                </h1>
                <p className="text-[#30341b] md:text-[20px] lg:text-[24px] text-center font-semibold mx-auto w-full max-w-[70%] font-[Roboto]">
                  Experience the power of organic wellness with Mewar Organics
                </p>
              </motion.div>

            <motion.div className="flex  items-center gap-[2px] md:pl-[125px] lg:pl-[272px] pt-[40px]" variants={bottomVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1}} className="md:text-[18px] lg:text-2xl md:px-[18px] md:py-[14px]    lg:px-[12px] lg:py-[20px] bg-[#55833D] text-white flex itmes-center md:gap-1 lg:gap-2 rounded-lg" onClick={handleContact}>
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
            </motion.div>

          </div>
        </div>
        {/*  */}
        <div className="absolute bottom-0 w-full">
          <img src={GRASS} alt="image" className="w-full h-[42px]" />
        </div>
      </div>

      <div className="mt-[40px]">
        <h1 className="text-center text-5xl mb-10 font-semibold font-playfair">
          Welcome To Mewar Organics
        </h1>
        <div className="flex  items-center gap-12 px-20 w-full" onMouseEnter={() => setAnimated(true)}>
          <motion.div className="w-1/2" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <div className="overflow-hidden">
              <img
                src={himage_1}
                alt="himage_1"
                className="object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.div className="w-1/2" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <p className="text-xl font-[Roboto]">
              At Mewar Organics Pvt. Ltd., we invite you to be a part of a
              greener, healthier future. Our commitment to conservation goes
              beyond plants — it’s about restoring balance to the environment,
              nurturing biodiversity, and preserving nature’s legacy for
              generations to come. Whether it’s through our diverse plant
              collections, ecofriendly practices, or the creation of lush,
              sustainable landscapes, every step we take is rooted in care for
              the Earth. Join us in cultivating a world where nature thrives,
              and every green space tells a story of harmony and growth.
            </p>
          </motion.div>
        </div>
      </div>


      <div className="mt-[40px]">
        <h1 className="text-center text-5xl mb-10 font-semibold font-playfair">
          Welcome To Mewar Organics
        </h1>
        <div className="flex items-center gap-12 px-20 w-full" onMouseEnter={() => setHoverAnimate(true)}>
          <motion.div className="w-1/2" variants={leftSideVariants} initial="hidden" animate={hoverAnimate ? "visible" : "hidden"}>
            <div className="overflow-hidden">
              <img
                src={himage_1}
                alt="himage_1"
                className="object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.div className="w-1/2" variants={rightSideVariants} initial="hidden" animate={hoverAnimate ? "visible" : "hidden"}>
            <p className="text-xl font-[Roboto]">
              At Mewar Organics Pvt. Ltd., we invite you to be a part of a
              greener, healthier future. Our commitment to conservation goes
              beyond plants — it’s about restoring balance to the environment,
              nurturing biodiversity, and preserving nature’s legacy for
              generations to come. Whether it’s through our diverse plant
              collections, ecofriendly practices, or the creation of lush,
              sustainable landscapes, every step we take is rooted in care for
              the Earth. Join us in cultivating a world where nature thrives,
              and every green space tells a story of harmony and growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/*  */}
      <div className="mt-[20px] mb-[40px]">
        <h1 className="text-center text-5xl font-semibold mb-10 font-playfair">About</h1>
        <div className="flex items-center gap-[50px] w-full h-[520px] px-20" onMouseEnter={() => setAnimated(true)}>
          <motion.div className="w-1/2" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <div className="overflow-hidden w-full">
              <img
                src={himage_3}
                alt="himage_3"
                className="h-[540px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
          </motion.div>
          <motion.div className="w-1/2" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <div className=" flex flex-col gap-[24px]">
              <h1 className="text-2xl font-bold">Pure. Natural. Sustainable</h1>
              <p className="text-xl leading-7 font-[Roboto]">
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
              <p className="text-xl leading-7 font-[Roboto]">
                At Mewar Organics, we go beyond just selling plants we provide
                holistic green solutions including plantation services, themed
                gardens (like Nakshatra and Rashi Vatikas), Miyawaki forest
                development, and custom garden projects such as terrace gardens,
                kitchen gardens, and balcony setups. With a deep respect for
                nature and cultural heritage, we blend traditional wisdom with
                modern landscaping techniques to transform spaces into thriving,
                sustainable ecosystems
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/*  */}
      <img
        src={himage_4}
        alt="himage_4"
        className="w-full h-[409px] px-20 bg-cover bg-center mb-[40px] bg-cover bg-center"
      />

      {/* Scrolling Pending */}
      <div className="mb-[40px] bg-cover bg-center h-[485px] w-[544px] relative" style={{ backgroundImage: `url(${himageBackground_5})` }}>
        {/* 1st */}
        <div className="px-20 h-[90px] w-full  top-[0px]">
          <img src={himage_6} alt="himage_6" className="w-full" />
        </div>
        {/* 2nd */}
        <div className="w-[1332px] px-20 absolute top-[90px]">
          <div className="flex  flex-col ">
            <h1 className="text-[#55833D] text-center text-3xl font-semibold font-[Roboto]">
              Services
            </h1>
            <h1 className="text-[44px] text-center font-semibold mb-[32px] font-playfair">
              Our Awesome Services
            </h1>
            {/* Scrollbar pending --------------------------------------------------------------------------------------------------*/}
            {/* <div className="overflow-x-hidden">
              <div className="h-[198px] flex items-center gap-[40px] w-max">
                {
                  dataList.map((eachObject,index)=>(
                    <div key={index} className="p-[20px] bg-[#FFF] rounded-xl flex flex-col gap-[16px] items-center justify-center w-[250px] h-[150px] hover:border hover:border-b-[#55833D] hover:border-solid hover:border-b-8" onClick={handleClick}>
                        <img src={eachObject.image} alt='eachObject.image' className="w-[50px] h-[50px]"/>
                        <h1 className="text-lg">{eachObject.title}</h1>
                    </div> 
                  ))
                }
              </div>
            </div> */}


        <div ref={scrollRef} className="overflow-x-hidden cursor-grab active:cursor-grabbing" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
                <div className="h-[198px] flex items-center gap-[40px] w-max">
                  {dataList.map((eachObject, index) => (
                    <div key={index}
                      className="p-[20px] bg-[#FFF] rounded-xl flex-shrink-0 flex flex-col gap-[16px] items-center justify-center w-[250px] h-[150px] hover:border hover:border-b-[#55833D] hover:border-solid hover:border-b-8" onClick={handleClick}
                    >
                      <img src={eachObject.image} alt="icon" className="w-[50px] h-[50px]" />
                      <h1 className="text-lg text-center">{eachObject.title}</h1>
                    </div>
                  ))}
                </div>
            </div>

            {/* Scrollbar pending -------------------------------------------------------------------------------------------------- */}
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full px-20 flex items-center gap-[28px] mb-[40px] overflow-hidden">
        {/*1st  */}
        <motion.div variants={bottomTopVariants} initial="hidden" animate={animated ? "visible" : "hidden"}  className="w-1/2 overflow-hidden">
          <img
            src={himage_7}
            alt="himage_7"
            className=" h-[532px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </motion.div>
        {/* 2nd */}
        <motion.div  variants={bottomTopVariants1} initial="hidden" animate={animated ? "visible" : "hidden"}  className="w-1/2 flex flex-col gap-[40px] overflow-hidden">
          <p className="text-xl font-[Roboto]">
            At Mewar Organics, we believe in transforming spaces into thriving
            green ecosystems that support both nature and human well-being. Our
            projects focus on creating sustainable landscapes using native
            plants, organic practices, and designs that blend beauty with
            environmental purpose. Whether working on small urban gardens or
            expansive forest projects, our approach ensures longterm ecological
            balance and aesthetic charm.
          </p>
          <p className="text-xl font-[Roboto]">
            Our work goes beyond just planting; we create purposeful landscapes
            that inspire, educate, and heal. Each project is carefully tailored
            to its location, climate, and cultural importance, ensuring that
            every green space serves a unique function—whether for biodiversity
            restoration, wellness, education, or spiritual growth. Through our
            diverse portfolio, we strive to bring nature closer to people while
            preserving the rich flora of Rajasthan and all over India.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#55833D] hover:bg-zinc-800 text-lg text-white px-[20px] py-[20px] rounded-lg flex items-center  gap-[2px] " onClick={handleClick}>
              Start a Project
              <img
                src={himagearrow_8}
                alt="himagearrow_8"
                className="h-[24px]"
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* */}
      <div className=" flex flex-col px-20 mb-[40px]">
        <h1 className="text-3xl text-[#55833D] font-semibold">Our Projects</h1>
        <h1 className="mb-[30px] text-4xl font-semibold">Works we have done</h1>
        {/*  */}
        <div className="grid grid-cols-12 gap-[30px]">
          {/*  */}
          <motion.div className="col-span-4 " variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <div className="overflow-hidden ">
                <img src={himage_8} alt="himage_8" className=" rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
            </div>
            <div className="p-[10px]">
              <h1 className="text-lg font-semibold text-center pb-[28px]">
                Miyawaki Forest <br />{" "}
                <span className="text-lg italic text-[#212529] font-normal">
                  Urban Biodiversity Project
                </span>{" "}
              </h1>
              <div className="w-[144px] h-[4px] bg-[#55833D] mx-auto"></div>
              <p className="mt-[20px] text-lg ">
                A dense, fast-growing forest using the Miyawaki technique,
                planted with native species like Neem, Kadamba, Arjun Tree, and
                Teak. This project restores urban biodiversity, improves air
                quality, and creates a self-sustaining ecosystem, ideal for
                reforestation and corporate sustainability initiatives.
              </p>
            </div>
          </motion.div>
          {/*  */}
          <motion.div className="col-span-4   rounded-xl" variants={bottomTopVariants1} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <div className="p-[10px] w-full">
              <h1 className="text-lg font-semibold text-center pb-[28px] ">
                Panchvati Vatika <br />{" "}
                <span className="text-lg italic text-[#212529] font-normal">
                  Mythological Garden Design
                </span>
              </h1>
              <div className="w-[144px] h-[4px] bg-[#55833D] mx-auto"></div>
              <p className="mt-[20px] text-xl">
                A culturally significant gardenfeaturing the five sacred trees
                fromancient mythology – Peepal, Banyan,Amla, Ashoka, and
                Belpatra.Designed for spiritual reflection andheritage
                preservation, this spacecombines nature with mythology,offering
                a serene atmosphere formeditation and cultural storytelling.
              </p>
            </div>
            <div className="overflow-hidden w-full mt-[240px]">
              <img src={himage_9} alt="himage_9" className="rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
            </div>
          </motion.div>
          {/*  */}
          <motion.div className="col-span-4  rounded-xl" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <div className="overflow-hidden w-full">
                  <img src={himage_10} alt="himage_10" className="rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
              </div>
            <div className="p-[10px]">
              <h1 className="text-lg font-semibold text-center pb-[28px]">
                Balcony Garden
                <br />
                <span className="text-lg text-[#212529] font-normal italic">
                  Greening Compact Spaces
                </span>
              </h1>
              <div className="w-[144px] h-[4px] bg-[#55833D] mx-auto"></div>
              <p className="mt-[20px] text-lg rounded-[30px] ">
                A minimalist green space crafted forcompact urban balconies,
                featuringornamental plants like Lipstick Plant,Chandni, Ferns,
                Money Plant, andPeace Lily. Designed to bringgreenery into small
                living spaces,this project focuses on aestheticcharm while
                requiring minimalmaintenance.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div className="flex justify-end  mt-[30px]" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
          <button className=" text-lg px-[32px] py-[12px] rounded-3xl border border-2 border-[#55833D] border-solid hover:bg-[#55833D] hover:text-white transition-all duration-300">
            Explore More
          </button>
        </motion.div>
      </div>

      {/* Plants Categeory */}
      <div className="flex flex-col px-20 mb-[40px]">
        <h1 className="text-3xl text-[#55833D] font-medium mb-[5px]">
          Plants Category
        </h1>
        <h1 className="text-4xl font-semibold mb-[10px]">
          Explore Our Plants Collection
        </h1>
        <h1 className="text-2xl font-semibold">
          Discover a variety of organic plants for your home, garden, and
          wellness
        </h1>
        <p className="mt-[32px] text-lg">
          At Mewar Organics, we offer a diverse rangeof plants carefully
          selected for their environmental, medicinal, and aesthetic value. Our
          collection includes native species, exotic fruits, vibrant flowering
          plants, and sacred botanicals, all cultivated with care to promote
          biodiversity and sustainable greenery.
        </p>
        <div className="grid grid-cols-12 mt-[20px] gap-[100px]">
          {/* 1st */}
          <div className="col-span-4 border border-2 border-[#55833D] border-dashed flex flex-col gap-[20px] text-center px-[16px] py-[20px] rounded-3xl">
            <div className="flex justify-center">
              <img
                src={himage_12}
                alt="himage_12"
                className="w-[150px] h-[150px] "
              />
            </div>
            <h1 className="text-2xl text-[#55833D]">Forest & Native Plants</h1>
            <p className="text-base">
              Our Forest and Native Plants collection offers over 150+ varieties
              that play a crucial role in promoting biodiversity, air
              purification, and ecological restoration.
            </p>
            <div className="flex justify-center">
              <button className="px-[20px] py-[12px] bg-[#55833D] text-white rounded-lg hover:text-[green] hover:bg-white hover:border hover:border-solid hover:border-[#55833D] transition-all duration-300" onClick={handleCategeory}>
                Show more
              </button>
            </div>
          </div>
          {/* 2nd */}
          <div className="col-span-4 border border-2 border-[#55833D] border-dashed flex flex-col gap-[20px] text-center px-[16px] py-[20px] rounded-3xl">
            <div className="flex justify-center">
              <img
                src={himage_13}
                alt="himage_13"
                className="w-[150px] h-[150px]"
              />
            </div>
            <h1 className="text-2xl text-[#55833D]">Flower Plants</h1>
            <p className="text-base">
              Our Flower Plants collection at Mewar Organics offers over 60+
              rare, exotic, and native varieties, each cultivated with zero
              chemicals to ensure natural beauty,{" "}
            </p>
            <div className="flex justify-center">
              <button className="px-[20px] py-[12px] bg-[#55833D] text-white rounded-lg hover:text-[green] hover:bg-white hover:border hover:border-solid hover:border-[#55833D] transition-all duration-300" onClick={handleCategeory}>
                Show more
              </button>
            </div>
          </div>
          {/* 3rd */}
          <div className="col-span-4 border border-2 border-[#55833D] border-dashed flex flex-col gap-[20px] text-center px-[16px] py-[20px] rounded-3xl">
            <div className="flex justify-center">
              <img
                src={himage_14}
                alt="image_14"
                className="w-[150px] h-[150px]"
              />
            </div>
            <h1 className="text-2xl text-[#55833D]">Fruits Plants</h1>
            <p className="text-base">
              Our Fruit Plants collection is over 120+ high-quality, organically
              nurtured fruit varieties, grown without the use of chemicals,
              ensuring purity, safety.
            </p>
            <div className="flex justify-center">
              <button className="px-[20px] py-[12px] bg-[#55833D] text-white rounded-lg hover:text-[green] hover:bg-white hover:border hover:border-solid hover:border-[#55833D] transition-all duration-300" onClick={handleCategeory}>
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full px-20 flex gap-[40px] mb-[40px]">
        {/*  */}
        <motion.div className="w-1/2" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
          <h1 className="text-4xl mb-[40px]">
            Sustainable Landscaping with Mewar Organics
          </h1>
          <p className="text-lg">
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
        {/*  */}
        <motion.div className="w-1/2 overflow-hidden" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
          <img src={himage_15} alt="himage_15" className="object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-110" />
        </motion.div>
      </div>


        {/* text down to up on image Pending */}
        <div className="flex flex-col px-20 mb-[80px]">
          <h1 className="text-4xl mb-[32px]">Our GreenSpace Services</h1>
          <div className="flex gap-[40px]">
              <div>
                <img src={himage_16} alt='himage_16' className="h-[450px]"/>
                <h1>tfyghjhj;ojopkjok;lk;k;kkk</h1>
              </div>
              <div>
                  <img src={himage_17} alt='himage_17' className="h-[450px]"/>
                  <h1>tfyghjhj;ojopkjok;lk;k;kkk</h1>
              </div>
              <div>
                  <img src={himage_18} alt='himage_18' className="h-[450px]"/>
                  <h1>tfyghjhj;ojopkjok;lk;k;kkk</h1>
              </div>
          </div>
        </div>




        {/* Greenscapes */}
        <div className="px-20 flex flex-col mb-[40px] relative">
          {/*  */}
          <div className="flex gap-[161px] mb-[30px]">
            <h1 className="text-4xl">Greenscapes</h1>
            <p className="text-lg">“Experience the calming embrace of nature with greenscape by Mewar Orgnics that inspire peace and serenity. Let vibrant
                greenery create a sanctuary of positivity, where every space feels refreshed and alive.”
            </p>
          </div>
          {/* <div className="mb-[32px] grid grid-cols-2 gap-[20px]">
              <div className="overflow-hidden">
                  <img src={image_20} alt='himage_20' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
              </div>
             <div className="">
                <img src={image_21} alt='himage_21' className=""/>
             </div>
             <div className="">
                <img src={image_22} alt='himage_22' className=""/>
             </div>
              <div className="overflow-hidden">
                <img src={image_23} alt='himage_23' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
              </div>
          </div> */}
          <div className="mb-[32px] grid grid-cols-2 gap-[20px]">
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

          <div className="flex justify-end absolute top-[-30px] right-[0px]">
              <img src={himage_19} alt='himage_19' className="bg-cover bg-center h-[438px] w-[542px]"/>
          </div>
        </div>


        {/* Why mewar Organics */}
        <div className="px-20 flex flex-col mb-[40px]">
            <h1 className="text-4xl text-center font-semibold mb-[10px]">Why Mewar Organics?</h1>
            <h1 className="text-2xl text-center mb-[32px]">Bringing Nature’s Best to Your Home</h1>
            <div className="grid grid-cols-4 gap-[30px]">
                <div className="bg-lime-300 py-[30px] px-[24px] rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                    <div className="overflow-hidden">
                        <img src={image_24} alt='image_24' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                    </div>
                    <h1 className="text-center text-[#FFF] font-bold text-xl mb-[12px]">Native Plant Advocacy</h1>
                    <h1 className="text-center text-[#FFF] text-sm">Focus on local and sustainable plant species</h1>
                </div>
                <div className="bg-lime-300 py-[30px] px-[24px] rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                  <div className="overflow-hidden">
                    <img src={image_25} alt='image_25' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/> 
                  </div>
                    <h1 className="text-center text-[#FFF] font-bold text-xl mb-[12px]">Innovative Solutions</h1>
                    <h1 className="text-center text-[#FFF] text-sm">Customized gardens / Vatikas for every need.</h1>
                </div>
                <div className="bg-lime-300 py-[30px] px-[24px] rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                    <div className="overflow-hidden">
                      <img src={image_26} alt='image_26' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                    </div>
                    <h1 className="text-center text-[#FFF] font-bold text-xl mb-[12px]">Expertise in Landscaping</h1>
                    <h1 className="text-center text-[#FFF] text-sm">Skilled professionals to guide every project.</h1>
                </div>
                <div className="bg-lime-300 py-[30px] px-[24px] rounded-lg" style={{background: "linear-gradient(180deg, rgba(85, 131, 61, 0.20) 0%, rgba(85, 131, 61, 0.60) 48.56%, #55833D 90.87%)"}}>
                  <div className="overflow-hidden">
                    <img src={image_27} alt='image_27' className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                  </div>
                    <h1 className="text-center text-[#FFF] font-bold text-xl mb-[12px]">Environmentally Conscious</h1>
                    <h1 className="text-center text-[#FFF] text-sm">Practices that prioritize soil health and water conservation.</h1>
                </div>
            </div>
        </div>


        {/* Unique and rare */}
        <div className="px-20 flex flex-col mb-[40px]">
          <motion.h1 className="mb-[32px] text-4xl" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>Unqiue,eite & rare</motion.h1>
          <div className="flex gap-[40px] w-full">
              <motion.img src={image_28} alt='image_28' className="w-1/2" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}/>
              <motion.div className="flex flex-col" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
                  <h1 className="mb-[37px] text-4xl font-semibold">Living Art:</h1>
                  <img src={image_29} alt='image_29' className="w-[281px] h-[80px]"/>
                  <h1 className="mt-[12px] mb-[28px] text-base font-semibold ">Breaking New Ground in Rajasthan and India</h1>
                  <p className="mb-[32px] text-lg">At Mewar Organics, we are proud to introduce Terrariums and Paludariums, an exclusive offering redefining how we interact
                     with nature. These artistic, self-sustaining ecosystems are a firstof-its-kind in Rajasthan and among the few in India, bringing
                    innovation and elegance to modern indoor gardening.
                  </p>
                  <p className="text-lg">
                  • Terrariums: Miniature gardens enclosed in glass, combining exotic plants like moss, ferns, and succulents, designed to thrive with minimal maintenance.<br/>
                  • Paludariums: A stunning fusion of land and water elements, incorporating aquatic plants, tropical greens, and water features to create immersive natural habitats.
                  </p>
              </motion.div>
          </div>
        </div>

        {/* Why Choose Terrariumsm & Paludariums ? */}
        <div className="px-20 flex gap-[40px] w-full mb-[40px]">
            {/*  */}
            <div className="flex flex-col w-1/2">
                <h1 className="text-4xl mb-[50px]">Why Choose Terrariums <br/> & Paludariums ?</h1>
                <p className="text-lg mb-[28px]">
                  • Perfect for homes, offices, and luxury interiors.<br/>
                  • Require low maintenance while offering high visual appeal.<br/>
                  • Act as natural air purifiers and conversation starters.
                </p>
                <p className="mb-[30px] text-lg">
                  Pioneering Elegance in Green Design With Mewar Organics, you get handcrafted, bespoke terrariums and paludariums tailored to your style. This grand
                  innovation positions us at the forefront of modern landscaping and eco-friendly interiors, offering unmatched beauty and functionality.
                </p>
                <p className="text-lg">
                  This revolutionary concept is your gateway to sophisticated, nature-inspired living. Let us bring this rare luxury into your spaces.
                </p>
            </div>
            {/*  */}
            <div className="w-1/2">
                <div className="grid grid-rows-3 grid-cols-2 gap-2">
                    <div className="row-span-2 overflow-hidden">
                        <img src={image_30} alt='' className="h-[308px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                    </div>
                    <div className="row-start-1 col-start-2 row-span-1 overflow-hidden">
                        <img src={image_31} alt='' className="h-[150px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                    </div>
                    <div className="row-span-1 overflow-hidden">
                        <img src={image_32} alt='' className="h-[150px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                    </div>
                    <div className="row-start-2 col-start-2 row-span-2 overflow-hidden">
                        <img src={image_33} alt='' className="h-[308px] w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                    </div>
                </div>  
            </div>
        </div>


        {/*  */}
        <div className="px-20 flex items-center gap-[40px] w-full">
          {/*  */}
          <img src={image_34} alt='image_34' className="w-1/2"/>
          {/*  */}
          <div className="w-1/2">
              <h1 className="text-lg text-[#55833D] font-medium mb-[10px]">FREE ESTIMATION</h1>
              <h1 className="text-4xl font-semibold mb-[72px]">Request a Quote</h1>
                <div className="">
                    <form className="flex gap-[20px]">
                      <div className="w-1/2 flex flex-col gap-[40px]">
                        <input className="h-[78px] rounded-[50px] bg-[#F4F2ED]" placeholder="      Your Name"/>
                        <input className="h-[78px] rounded-[50px] bg-[#F4F2ED]" placeholder="      Your Email" />
                        <input className="h-[78px] rounded-[50px] bg-[#F4F2ED]" placeholder="      drop down"/>
                      </div>
                      <div className="w-1/2 flex flex-col gap-[40px]">
                        <textarea className="h-[196px] rounded-[24px] bg-[#F4F2ED]" placeholder="Write Message"/>
                        <button className="bg-[#55833D] rounded-xl px-8 py-4 text-[#fff]">
                          Make an Appointment
                        </button>
                      </div>
                    </form>
                </div>
          </div>
        </div>



    </div>
  );
};

export default Home;
