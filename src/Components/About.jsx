import React,{useState,useEffect} from 'react'
import image_35 from'../assets/image_35.png'
import GRASS from "../assets/hgrass_2.png";
import { Link } from 'react-router-dom';
import image_36 from'../assets/image_36.png'
import image_37 from'../assets/image_37.png'
import image_38 from'../assets/image_38.png'
import image_39 from'../assets/image_39.png'


import image_24 from "../assets/image_24.png";
import image_25 from "../assets/image_25.png";
import image_26 from "../assets/image_26.png";
import image_27 from "../assets/image_27.png";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const About = () => {


  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimated(true);
  }, []);

  //------------Normal Text and Images-----------------------------------
  //1] X-Axis (left and right)
  const leftSideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };


  //2] Y-Axis (bottom and Top)
  const bottomTopVariants1 = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
  };


  const navigateTo = useNavigate();


  const handleClick = ()=>{
    navigateTo('/contact')
  }


 
  return (
    <div className='flex flex-col gap-6 md:gap-8 lg:gap-8  xl:gap-14'>
      {/* 1st section */}

      <div className='bg-cover bg-center h-[380px] md:h-[500px] lg:h-[460px] xl:h-[500px] relative ' style={{backgroundImage :`url(${image_35})`}}>
          <div className="absolute inset-0 bg-stone-900 opacity-50 z-0"></div>
          <section className='relative z-10 pt-[210px] md:pt-[310px] flex flex-col justify-center items-center'>
              <h1 className='text-[#FFF] text-3xl md:text-4xl  lg:text-4xl mb-[40px] font-semibold font-playfair'>About Us</h1>
              <div className='flex items-center gap-[2px]'>
              <Link className='text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]' to='/'>Home</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_1050_1533)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1050_1533">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                  </svg>
                  <h1 className='text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]' to='/aboutus'>About</h1>
              </div>
          </section>


        <div className='absolute bottom-[0px] '>
            <img src={GRASS} alt='' className=''/>
        </div>
      </div>



      

      {/*  */}
      <div className='px-4 md:px-8 lg:px-12 xl:px-20'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8'>Our Story</h1>
        <motion.img src={image_36} alt='image_36' className='h-[200px] md:h-auto bg-cover bg-center' variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}/>
      </div>


      {/*  */}
      <motion.div className='px-4  md:px-8 lg:px-12 xl:px-20 flex flex-col gap-2 md:gap-4 lg:gap-6 ' variants={bottomTopVariants1} initial="hidden" animate={animated ? "visible" : "hidden"}>
        <h1 className='text-base md:text-xl lg:text-2xl font-medium'>Pure. Natural. Sustainable</h1>
        <p className='text-sm md:text-lg lg:text-xl font-[Roboto]'>Mewar Organics Pvt. Ltd., based in the historic city of Chittaurgarh, Rajasthan, is a premier nursery and landscaping firm dedicated to promoting biodiversity and
            sustainable green solutions. Our expertise lies in cultivating a diverse collection of forest, native, flowering, and fruit plants, alongside rare medicinal and exotic
            species. We aim to create green spaces that not only enhance aesthetics but also contribute to environmental well-being through eco-conscious practices.
        </p>
        <p className='text-sm md:text-lg lg:text-xl font-[Roboto]'>
            At Mewar Organics, we go beyond just selling plants we provide holistic green solutions including plantation services, themed gardens (like Nakshatra and Rashi Vatikas), Miyawaki
            forest development, and custom garden projects such as terrace gardens, kitchen gardens, and balcony setups. With a deep respect for nature and cultural heritage, we blend traditional
            wisdom with modern landscaping techniques to transform spaces into thriving, sustainable ecosystems
        </p>
      </motion.div>


      {/*  */}
      <div className='px-4  md:px-8 lg:px-12 xl:px-20 flex flex-col'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold font-playfair mb-2 md:mb-[10px]'>Our Vision</h1>
        <h1 className='text-center text-base md:text-xl lg:text-2xl font-semibold font-playfair '>We believe in farming with care, for people, for the planet, and for generations to come.</h1>
        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-10'>
            {/*  */}
            <div className='p-4 md:p-5 lg:p-4 xl:p-8 shadow-xl'>
                <img src={image_37} alt='image_37' className='w-full md:h-[348px] lg:h-[250px] xl:h-auto'/>
                <h1 className='text-xl md:text-2xl lg:text-xl xl:text-2xl font-playfair font-semibold my-3 md:my-5 text-center'>Greener Tomorrow</h1>
                <p className='text-base md:text-lg  xl:text-xl font-[Roboto] text-center'>To create a healthier planet by promoting biodiversity, conserving native species, and developing sustainable green spaces that restore ecological balance.</p>
            </div>
            {/*  */}
            <div className='p-4 md:p-5 lg:p-4 xl:p-8 shadow-xl'>
               <img src={image_38} alt='image_38' className='w-full md:h-[348px] lg:h-[250px] xl:h-auto'/>
               <h1 className='text-xl md:text-2xl lg:text-xl xl:text-2xl  font-playfair font-semibold my-3 md:my-5 text-center'>Empowering Communities</h1>
               <p className='md:text-lg  xl:text-xl font-[Roboto] text-center'>To inspire individuals, families, and businesses to reconnect with nature through personalized gardens,educational initiatives, and eco-friendly projects that contribute to a sustainable lifestyle.</p>
            </div>
            {/*  */}
            <div className='p-4 md:p-5 lg:p-4 xl:p-8 shadow-xl'>
              <img src={image_39} alt='image_39' className='w-full md:h-[348px] lg:h-[250px] xl:h-auto'/>
                <h1 className='text-xl md:text-2xl lg:text-xl xl:text-2xl  font-playfair font-semibold my-3 md:my-5 text-center'>Cultural Preservation</h1>
                <p className='md:text-lg  xl:text-xl font-[Roboto] text-center'>To blend ancient wisdom with modern landscaping practices by promoting culturally significant plants and creating themed vatikas that honor India’s rich botanicalheritage.</p>
            </div>
        </div>
      </div>

      {/*  */}
          <div className='px-4  md:px-8 lg:px-12 xl:px-20 flex flex-col'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-playfair mb-2'>Why Mewar Organics?</h1>
              <h1 className='text-base md:text-xl lg:text-2xl text-center font-semibold font-playfair'>Bringing Nature’s Best to Your Home</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7  lg:gap-4 xl:gap-7">
                {/*  */}
                  <div className="shadow-lg p-5 md:p-6 lg:p-5 xl:py-8 xl:px-7 rounded-lg" >
                      <div className="overflow-hidden mb-3 md:mb-7">
                          <img src={image_24} alt='image_24' className="md:h-auto lg:h-[220px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                      </div>
                      <h1 className="text-center  font-bold md:text-xl lg:text-lg xl:text-xl mb-1 md:mb-2 font-[Roboto] ">Native Plant Advocacy</h1>
                      <h1 className="text-center  text-base lg:text-sm font-[Roboto]">Focus on local and sustainable plant species</h1>
                  </div>
                  {/*  */}
                  <div className="shadow-lg p-5 md:p-6 lg:p-5 xl:py-8 xl:px-7 rounded-lg">
                    <div className="overflow-hidden mb-3 md:mb-7">
                      <img src={image_25} alt='image_25' className="md:h-auto lg:h-[220px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/> 
                    </div>
                      <h1 className="text-center  font-bold md:text-xl lg:text-lg xl:text-xl mb-1 md:mb-2 font-[Roboto]">Innovative Solutions</h1>
                      <h1 className="text-center  text-base lg:text-sm font-[Roboto]">Customized gardens / Vatikas for every need.</h1>
                  </div>
                  {/*  */}
                  <div className="shadow-lg p-5 md:p-6 lg:p-5 xl:py-8 xl:px-7 rounded-lg">
                      <div className="overflow-hidden mb-3 md:mb-7">
                        <img src={image_26} alt='image_26' className="md:h-auto lg:h-[220px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                      </div>
                      <h1 className="text-center  font-bold md:text-xl lg:text-lg xl:text-xl mb-1 md:mb-2 font-[Roboto]">Expertise in Landscaping</h1>
                      <h1 className="text-center  text-base lg:text-sm font-[Roboto]">Skilled professionals to guide every project.</h1>
                  </div>
                  {/*  */}
                  <div className="shadow-lg p-5 md:p-6 lg:p-5 xl:py-8 xl:px-7 rounded-lg">
                    <div className="overflow-hidden mb-3 md:mb-7">
                      <img src={image_27} alt='image_27' className="md:h-auto lg:h-[220px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                    </div>
                      <h1 className="text-center  font-bold md:text-xl lg:text-lg xl:text-xl mb-1 md:mb-2 font-[Roboto]">Environmentally Conscious</h1>
                      <h1 className="text-center  text-base lg:text-sm font-[Roboto]">Practices that prioritize soil health and water conservation.</h1>
                  </div>
              </div>
          </div>

          {/*  */}
          <div className='px-4  md:px-8 lg:px-[80px] xl:px-[200px]'>
              <div className='flex flex-col md:flex-row gap-3 md:gap-1 lg:gap-[150px] bg-[#55833D] p-4 md:px-12 md:py-5 lg:px-[30px] lg:py-[25px] justify-center md:justify-between items-center lg:justify-center'>
                <h1 className=' md:text-xl xl:text-[28px] font-semibold text-[#fff] font-playfair w-[196px] md:w-auto text-center'>Join Us in Embracing a Healthier, Greener Future!</h1>
                <div className='py-2 md:py-3 px-4 md:px-8 lg:px-[38px] lg:py-[24px] text-[#fff] shadow-lg border-[#FFF] rounded-lg border border-solid border-white hover:text-black hover:bg-white' onClick={handleClick}>
                    <Link className='text-sm md:text-base lg:text-xl  font-semibold' >Contact Us</Link>
                </div>
              </div>
          </div>

    </div>
  )
}

export default About