import React,{useState,useEffect} from "react";
import image_53 from "../assets/image_53.png";
import GRASS from "../assets/hgrass_2.png";
import image_54 from "../assets/image_54.png";
import image_55 from "../assets/image_55.png";
import image_56 from "../assets/image_56.png";
import image_57 from "../assets/image_57.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {

//---------------------------------------------Animation Logic-----------------------------------------------------------------
  const [animated, setAnimated] = useState(false);
  
    useEffect(() => {
      // Trigger animation after mount
      setAnimated(true);
    }, []);

    const bottomTopVariants1 = {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
    };



//---------------------------------------------Animation Logic-----------------------------------------------------------------

  const navigateTo = useNavigate();

  const handleContact = ()=>[
    navigateTo('/contact')
  ]



  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-8  xl:gap-14">
      {/*  */}
      <div className="bg-cover bg-center h-[380px]  md:h-[500px] lg:h-[460px]  xl:h-[500px] relative" style={{ backgroundImage: `url(${image_53})` }}>
          <div className="absolute inset-0 bg-stone-800 opacity-50 z-0"></div>
        {/*  */}
        <section className="relative z-10 pt-[240px] md:pt-[310px] flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl text-[#FFF] mb-[40px] font-semibold font-playfair">
            Portfolio
          </h1>
          <div className="flex items-center gap-1">
            <Link className="text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]" to='/'>
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1050_1805)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1050_1805">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]">
              Portfolio
            </h1>
          </div>
        </section>
        {/*  */}
        <div className="absolute bottom-[0px]">
          <img src={GRASS} alt="GRASS" className="" />
        </div>
      </div>

      {/* 2nd */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-playfair md:font-semibold lg:font-medium mb-2">
          Our Projects
        </h1>
        <h1 className="text-center text-[15px] md:text-base md:text-lg lg:text-xl font-semibold font-playfair mb-3 md:mb-7" >
          From ethically sourced raw materials to premium organic products,
          explore how Mewar Organics is shaping a greener future
        </h1>
        <motion.h1 className="text-sm md:text-lg lg:text-xl font-[Roboto] text-[#212529] " variants={bottomTopVariants1} initial="hidden" animate={animated ? "visible" : "hidden"}>
          At Mewar Organics, we offer premium organic solutions, from
          high-quality product manufacturing to sustainable sourcing and
          private-label customization. Partner with us for purity,
          sustainability and innovation.
        </motion.h1>
        <motion.img src={image_54} alt="image_54" className="h-[200px] md:h-auto my-3 md:my-5" variants={bottomTopVariants1} initial="hidden" animate={animated ? "visible" : "hidden"} />
        <motion.p className="text-sm md:text-lg lg:text-xl font-[Roboto] text-[#212529]" variants={bottomTopVariants1} initial="hidden" animate={animated ? "visible" : "hidden"}>
          At Mewar Organics, we believe in transforming spaces into thriving
          green ecosystems that support both nature and human well-being. Our
          projects focus on creating sustainable landscapes using native plants,
          organic practices, and designs that blend beauty with environmental
          purpose. Whether working on small urban gardens or expansive forest
          projects, our approach ensures longterm ecological balance and
          aesthetic charm. <br/>Our work goes beyond just planting; we create
          purposeful landscapes that inspire, educate, and heal. Each project is
          carefully tailored to its location, climate, and cultural importance,
          ensuring that every green space serves a unique function—whether for
          biodiversity restoration, wellness, education, or spiritual growth.
          Through our diverse portfolio, we strive to bring nature closer to
          people while preserving the rich flora of Rajasthan and all over
          India.
        </motion.p>
      </div>

      {/* 3rd Section */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-playfair mb-4 md:mb-8">
          Worked We Have Done
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7 lg:gap-4 xl:gap-7">
          {/* 1st */}
          <div className="flex flex-col border border-[#55833D] border-2 p-4  rounded-lg md:h-[530px] lg:h-[650px]">
            <div className="overflow-hidden">
              <img
                src={image_55}
                alt="image_55"
                className="md:h-[300px] lg:h-auto w-full  rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <h1 className="mt-2 lg:mt-4 xl:mt-8 text-center text-base lg:text-lg xl:text-xl font-semibold font-[Roboto]">
              Miyawaki Forest
            </h1>
            <h1 className="text-center mb-2 md:mb-3 text-[15px] md:text-base xl:text-lg italic font-[Roboto]">
              Urban Biodiversity Project
            </h1>
            <p className="text-sm md:text-base font-[Roboto] text-center mb-4">
              A dense, fast-growing forest usingthe Miyawaki technique,
              planted with native species like Neem,Kadamba, Arjun Tree, and
              Teak. This project restores urban biodiversity,improves air
              quality, and creates a self-sustaining ecosystem, ideal
              for reforestation and corporate sustainability initiatives.
            </p>
            <div className="text-center mt-auto">
              <Link className="px-4 md:px-8 py-2 md:py-3 bg-[#55833D] rounded-lg text-[#fff] hover:text-[#55833D] hover:bg-white hover:border hover:border-[#55833D] hover:border-2" to='/portfolio/miyawaki'>
                View Project
              </Link>
            </div>
          </div>

          {/* 2nd */}
          <div className="flex flex-col border border-[#55833D] border-2 p-4  rounded-lg md:h-[530px] lg:h-[650px]">
            <div className="overflow-hidden">
              <img
                src={image_56}
                alt="image_56"
                className="md:h-[300px] lg:h-auto w-full  rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <h1 className="mt-2 lg:mt-4 xl:mt-8 text-center lg:text-lg xl:text-xl font-semibold font-[Roboto]">
              Balcony Garden
            </h1>
            <h1 className="text-center mb-2 md:mb-3 text-[15px] md:text-base xl:text-lg italic font-[Roboto]">
              Greening Compact Spaces
            </h1>
            <p className="text-sm md:text-base font-[Roboto] text-center mb-4">
              A minimalist green space crafted for compact urban balconies,
              featuring ornamental plants like Lipstick Plant,Chandni, Ferns,
              Money Plant, and Peace Lily. Designed to bring greenery into small
              living spaces,this project focuses on aestheticcharm while
              requiring minimal maintenance.
            </p>
            <div className="text-center mt-auto">
              <Link className="px-4 md:px-8 py-2 md:py-3 bg-[#55833D] rounded-lg text-[#fff] hover:text-[#55833D] hover:bg-white hover:border hover:border-[#55833D] hover:border-2">
                View Project
              </Link>
            </div>
          </div>

          {/* 3rd */}
          <div className="flex flex-col border border-[#55833D] border-2 p-4  rounded-lg md:h-[530px] lg:h-[650px]">
            <div className="overflow-hidden">
              <img
                src={image_57}
                alt="image_57"
                className="md:h-[300px] lg:h-auto w-full  rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <h1 className="mt-2 lg:mt-4 xl:mt-8 text-center lg:text-lg xl:text-xl font-semibold font-[Roboto]">
              Panchvati Vatika
            </h1>
            <h1 className="text-center mb-2 md:mb-3 text-[15px] md:text-base xl:text-lg italic font-[Roboto]">
              Mythological Garden Design
            </h1>
            <p className="text-sm md:text-base font-[Roboto] text-center mb-4">
              A culturally significant gardenfeaturing the five sacred trees
              fromancient mythology – Peepal, Banyan,Amla, Ashoka, and
              Belpatra.Designed for spiritual reflection and heritage
              preservation, this space combines nature with mythology,offering a
              serene atmosphere for meditation and cultural story telling.
            </p>
            <div className="text-center mt-auto">
              <Link className="px-4 md:px-8 py-2 md:py-3 bg-[#55833D] rounded-lg text-[#fff] hover:text-[#55833D] hover:bg-white hover:border hover:border-[#55833D] hover:border-2">
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4th Section */}
      <div className="px-4 md:px-10 lg:px-[100px] xl:px-[300px]">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-start gap-4 md:gap-10 lg:gap-20 p-4 md:px-8 lg:px-[50px] md:py-6 lg:py-[40px] bg-[#55833D]">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-xl lg:text-2xl font-playfair text-[#FFF] font-semibold">
              Join Us in Building a Sustainable Future
            </h1>
            <h1 className="md:text-base xl:text-lg font-[Roboto] text-[#FFF] font-medium">
              Partner with us for premium organic solutions, private-label
              products, and sustainable sourcing.
            </h1>
          </div>

          {/* Apply group class here */}
          <div className="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg  text-[#FFF] bg-[#55833D] border border-white border-b-4 hover:text-black hover:bg-white" onClick={handleContact}>
            <button className="w-[100px] flex items-center  gap-2 text-sm md:text-sm lg:text-base font-medium font-[Roboto]">
              GET A QUOTE 
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Portfolio;
