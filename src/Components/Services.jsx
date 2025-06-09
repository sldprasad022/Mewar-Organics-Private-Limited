import React from 'react'
import { useNavigate } from 'react-router-dom';
import image_40 from'../assets/image_40.png'
import { Link } from 'react-router-dom'
import GRASS from "../assets/hgrass_2.png";
import image_41 from'../assets/image_41.png'
import image_42 from'../assets/image_42.png'
import image_43 from'../assets/image_43.png'
import image_44 from'../assets/image_44.png'
import image_45 from'../assets/image_45.png'
import image_46 from'../assets/image_46.png'

import image_47 from'../assets/image_47.png'
import image_48 from'../assets/image_48.png'
import image_49 from'../assets/image_49.png'
import image_50 from'../assets/image_50.png'
import image_51 from'../assets/image_51.png'
import image_52 from'../assets/image_52.png'

import flowerImage1 from'../assets/flowerImage1.png'
import flowerImage2 from'../assets/flowerImage2.png'
import flowerImage3 from'../assets/flowerImage3.png'

const Services = () => {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/services/garden')
  }

  const handleContact = ()=>{
    navigate('/contact')
  }


  const data = [
    {
      id:'1',
      img :image_43,
      title :'Educational Workshops & Awareness:',
      content :'Conducting workshops on plant care, organic gardening, and biodiversity conservation for schools, corporates, and communities.'
    },
    {
      id:'2',
      img :image_44,
      title :'Garden Maintenance',
      content :'Long-term care and growth management.'
    },
    {
      id:'3',
      img :image_45,
      title :'Planning and Consulting',
      content :'Landscape designs for residential and commercial projects'
    },
    {
      id:'4',
      img :image_46,
      title :'Vatika Creations',
      content :'• Nakshatra Vatika: Plants based on celestial constellations.• Rashi Vatika: Zodiac-based plants like Amla, Neem, and Peepal.• Tirthankar Vatika: Sacred plants from Jain traditions.• Panchvati Vatika: Mythological plants like Banyan, Peepal, and Amla And Many More'
    },
    {
      id:'5',
      img :image_47,
      title :'Plantation and Sales',
      content :'A wide range of plants for personal, commercial, and public spaces.'
    },
    {
      id:'6',
      img :image_48,
      title :'Miyawaki Forest Development',
      content :'Dense, multi-layered forests to enhance biodiversity.'
    },
    {
      id:'7',
      img :image_49,
      title :'Custom Garden Solutions',
      content :'• Kitchen Gardens • Balcony Gardens • Terrace Gardens • Outdoor Landscaping'
    }
  ]



  return (
    <div className='flex flex-col gap-4 md:gap-8 lg:gap-8  xl:gap-14'>

      {/*  */}
      <div className='bg-cover bg-center h-[380px] md:h-[500px] lg:h-[460px] xl:h-[500px] relative' style={{backgroundImage:`url(${image_40})`}}>
          <div className="absolute inset-0 bg-stone-900 opacity-50 z-0"></div>
          {/* text */}
          <section className='relative z-10 pt-[210px] md:pt-[300px] flex flex-col justify-center items-center '>   
                  <h1 className='text-[#FFF] font-semibold text-3xl md:text-4xl  lg:text-4xl font-playfair mb-[50px]'>Mewar Services</h1>
                  <div className='flex items-center justify-center gap-[2px]'>
                    <Link className='text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]' to='/'>Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_1050_1533)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1050_1533">
                          <rect width="20" height="20" fill="black"/>
                        </clipPath>
                      </defs>
                  </svg>
                      <h1 className='text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]' to='/services'>Services</h1>
                  </div>
          </section>

          <div className='absolute bottom-[0px] w-full'>
              <img src={GRASS} alt='GRASS' className='w-full'/>
          </div>

      </div>

      {/*  */}
      {/* <div className='px-20'>
        <h1 className=''>Our Services</h1>
        <h1 className=''>Sustainable Solutions for a Greener Future</h1>
      </div> */}

      <div className='relative min-h-screen '>
          {/* left */}
          <div className='hidden md:block absolute top-[-40px] left-0 h-[532px]  w-[450px] bg-cover bg-left bg-no-repeat ' style={{backgroundImage:`url(${image_42})`}}>
          </div>
          {/* right */}
          <div className='hidden md:block absolute top-[-40px] right-0 h-[532px]  w-[450px] bg-cover bg-right bg-no-repeat ' style={{backgroundImage:`url(${image_41})`}}>
          </div>

          <div className='px-4 md:px-8 lg:px-12 xl:px-20'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold mb-2 md:mb-2.5'>Our Services</h1>
            <h1 className='text-center text-base md:text-lg font-semibold font-playfair mb-3 md:mb-8'>Sustainable Solutions for a Greener Future</h1>
            <p className='text-sm md:text-lg lg:text-xl font-[Roboto] mb-8'>
                At Mewar Organics, we are dedicated to harnessing nature’s purity to create high-quality organic products. With a strong commitment to sustainability, ethical sourcing, and innovation, we craft herbal wellness, skincare, and organic food solutions that promote a healthier lifestyle.
                Our mission is to blend traditional wisdom with modern science, ensuring every product meets the highest standards of quality and authenticity.
            </p>
            {/*  */}
            <div className='grid grid-cols-12 justify-center gap-5 md:gap-10 lg:gap-5'>
                {/* 1st */}
                <div className='relative  col-span-12 md:col-span-6 lg:col-span-3' onClick={handleClick}>
                  <div className='h-[400px] md:h-[520px] lg:h-[520px] xl:h-[580px] shadow-xl  p-5 lg:p-4 xl:p-6 border border-[#55833D] border-2 border-solid'>
                    <div className='overflow-hidden'>
                        <img src={image_43} alt='image_43' loading="lazy" className='lg:h-[200px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'/>
                    </div>
                    <h1 className='py-2 md:py-3 lg:py-3 xl:py-5  lg:text-base xl:text-lg font-bold font-playfair text-center'>Educational Workshops & Awareness:</h1>
                    <h1 className='text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto] '>Conducting workshops on plant care, organic gardening, and biodiversity
                        conservation for schools, corporates, and communities.
                    </h1>
                  </div>
                  {/*  */}
                  <div className=' absolute bottom-[-14px]  left-[150px] md:left-[154px] lg:left-[98px] xl:left-[140px] 2xl:left-1/2'>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                        </svg>
                      </div>
                  </div>   
                </div>



                {/* 2nd */}
                <div className='relative col-span-12 md:col-span-6 lg:col-span-3' onClick={handleClick}>
                    <div className='h-[360px] md:h-[520px] lg:h-[520px] xl:h-[580px] shadow-xl p-5 lg:p-4 xl:p-6 border border-[#55833D] border-2 border-solid'>
                            <div className='overflow-hidden'>
                                <img src={image_44} alt='image_44' loading="lazy" className='lg:h-[200px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'/>
                            </div>
                            <h1 className='py-2 md:py-3 lg:py-3 xl:py-5 lg:text-base xl:text-lg font-bold font-playfair text-center'>Garden Maintenance</h1>
                            <h1 className='text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto] '>Long-term care and growth management.</h1>
                        </div>
                        {/*  */}
                        <div className=' absolute bottom-[-14px] left-[150px] md:left-[154px] lg:left-[98px] xl:left-[140px] 2xl:left-1/2'>
                            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                              </svg>
                            </div>
                        </div>   
                </div>
                {/* 3rd */}

              <div className='relative col-span-12 md:col-span-6 lg:col-span-3' onClick={handleClick}>
                <div className='h-[380px] md:h-[520px] lg:h-[520px] xl:h-[580px] shadow-xl p-5 lg:p-4 xl:p-6 border border-[#55833D] border-2 border-solid'>
                  <div className='overflow-hidden'>
                        <img src={image_45} alt='image_45' loading="lazy" className='lg:h-[200px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'/>
                    </div>
                    <h1 className='py-2 md:py-3 lg:py-3 xl:py-5 lg:text-base xl:text-lg font-bold font-playfair text-center'>Planning and Consulting</h1>
                    <h1 className='text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto]'>Landscape designs for residential and commercial projects</h1>
                </div>
                <div className=' absolute bottom-[-14px] left-[150px] md:left-[154px] lg:left-[98px] xl:left-[140px] 2xl:left-1/2'>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                      </div>
                </div>   
              </div>


                {/* 4th */}
                <div className='relative col-span-12 md:col-span-6 lg:col-span-3' onClick={handleClick}> 
                  <div className='h-[480px] md:h-[520px] lg:h-[520px] xl:h-[580px] shadow-xl p-5 lg:p-4 xl:p-6 border border-[#55833D] border-2 border-solid'>
                    <div className='overflow-hidden'>
                          <img src={image_46} alt='image_46' loading="lazy" className='lg:h-[200px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'/>
                      </div>
                      <h1 className='py-2 md:py-3 lg:py-3 xl:py-5 lg:text-base xl:text-lg font-bold font-playfair text-center'>Vatika Creations</h1>
                      <h1 className='text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto]'>
                          • Nakshatra Vatika: Plants based on celestial constellations.<br/>
                          • Rashi Vatika: Zodiac-based plants like Amla, Neem, and Peepal.<br/>
                          • Tirthankar Vatika: Sacred plants from Jain traditions.<br/>
                          • Panchvati Vatika: Mythological plants like Banyan, Peepal, and Amla And Many More.
                      </h1>
                  </div>
                  <div className=' absolute bottom-[-14px] left-[150px] md:left-[154px] lg:left-[98px] xl:left-[140px] 2xl:left-1/2 '>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                      </div>
                  </div>   
                </div>
                {/* 5th */}
                <div className='relative col-span-12 md:col-span-6 lg:col-span-3 lg:col-start-1' onClick={handleClick}>
                    <div className='h-[380px] md:h-[520px] lg:h-[520px] xl:h-[580px]   shadow-xl p-5 lg:p-4 xl:p-6 border border-[#55833D] border-2 border-solid'>
                      <div className='overflow-hidden'>
                            <img src={image_50} alt='image_50' loading="lazy" className='lg:h-[200px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'/>
                        </div>
                        <h1 className='py-2 md:py-3 lg:py-3 xl:py-5 lg:text-base xl:text-lg font-bold font-playfair text-center'>Plantation and Sales</h1>
                        <h1 className='text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto]'>A wide range of plants for personal, commercial, and public spaces.</h1>
                    </div>
                    <div className=' absolute bottom-[-14px] left-[150px] md:left-[154px] lg:left-[98px] xl:left-[140px] 2xl:left-1/2'>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                      </div>
                  </div>  
                </div>
                {/* 6th */}
                <div className='relative col-span-12 md:col-span-6 lg:col-span-3' onClick={handleClick}>
                  <div className='h-[380px] md:h-[520px] lg:h-[520px] xl:h-[580px] shadow-xl p-5 lg:p-4 xl:p-6 border border-[#55833D] border-2 border-solid'>
                    <div className='overflow-hidden'>
                          <img src={image_51} alt='image_45' loading="lazy" className='lg:h-[200px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'/>
                      </div>
                      <h1 className='py-2 md:py-3 lg:py-3 xl:py-5 lg:text-base xl:text-lg font-bold font-playfair text-center'>Miyawaki Forest Development</h1>
                      <h1 className='text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto]'>Dense, multi-layered forests to enhance biodiversity.</h1>
                  </div>
                  <div className=' absolute bottom-[-14px] left-[150px] md:left-[154px] lg:left-[98px] xl:left-[140px] 2xl:left-1/2'>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                      </div>
                  </div>  
                </div>
                {/* 7th */}
                <div className='relative col-span-12 md:col-span-6 lg:col-span-3 md:col-start-4' onClick={handleClick}>
                  <div className='h-[420px] md:h-[520px] lg:h-[520px] xl:h-[580px] shadow-xl p-5 lg:p-4 xl:p-6 border border-[#55833D] border-2 border-solid'>
                    <div className='overflow-hidden'>
                          <img src={image_52} alt='image_45' loading="lazy" className='lg:h-[200px] xl:h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'/>
                      </div>
                      <h1 className='py-2 md:py-3 lg:py-3 xl:py-5 lg:text-base xl:text-lg font-bold font-playfair text-center'>Custom Garden Solutions</h1>
                      <h1 className='text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto]'>
                        • Kitchen Gardens <br/>
                        • Balcony Gardens <br/>
                        • Terrace Gardens <br/>
                        • Outdoor Landscaping.
                      </h1>
                  </div>
                  <div className=' absolute bottom-[-14px] left-[150px] md:left-[154px] lg:left-[98px] xl:left-[140px] 2xl:left-1/2  '>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                      </div>
                  </div>  
                </div>
                {/* -- */}
                {/* <div className='lg:col-span-3 p-10 xl:p-10 hidden lg:block '>
                  <img src={flowerImage3} alt='flowerImage1' className='h-[400px] w-[200px] xl:w-auto xl:h-[500px] object-revert xl:object-cover object-center  '/>
                </div> */}
                {/* -- */}
            </div>

            
          </div>
      </div>






{/* pppppppppppppppppp */}






    {/*  */}
    {/* <div className='px-[300px]'>
       <div className='flex items-center justify-center gap-[80px] px-[50px] py-[40px] bg-[#55833D] '>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-playfair text-[#FFF] font-semibold'>Looking for the Best Organic Solutions?</h1>
            <h1 className='text-lg font-[Roboto] text-[#FFF] font-medium'>Partner with us for sustainable, high-quality organic products.</h1>
        </div>
        <div className='px-[32px] py-[16px] rounded-lg text-[#FFF] bg-[#55833D] border border-white border-b-4  hover:text-black hover:bg-white'>
            <button className='flex text-base font-medium  font-[Roboto]'>GET A QUOTE
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="right-arrow" className='w-10 h-10 hidden hover:block'>
                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.5hidden9l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
              </svg>
            </button>
        </div>
        

       </div>
    </div> */}


<div className='px-4  md:px-[60px] lg:px-[90px] xl:px-[300px] '>
  <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-start  gap-5 md:gap-10 lg:gap-20 p-12 py-4 md:px-[50px] md:py-[40px] bg-[#55833D] '>
    <div className='flex flex-col gap-1 md:gap-2 '>
      <h1 className='text-xl md:text-2xl font-playfair text-[#FFF] font-semibold '>
        Looking for the Best Organic Solutions?
      </h1>
      <h1 className='text-base md:text-lg font-[Roboto] text-[#FFF] font-medium'>
        Partner with us for sustainable, high-quality organic products.
      </h1>
    </div>

    {/* Apply group class here */}
    <div className='group px-4 md:px-8 py-2 md:py-4 rounded-lg text-[#FFF] bg-[#55833D] border border-white border-b-4 hover:text-black hover:bg-white' onClick={handleContact}>
      <button className='w-[100px] flex justify-center items-center gap-2 text-sm md:text-base lg:text-sm xl:text-base font-medium font-[Roboto]'>
        GET A QUOTE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="right-arrow"
          className='w-8 h-8 hidden group-hover:block transition duration-200'
        >
          <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
        </svg>
      </button>
    </div>
  </div>
</div>

    

     
    </div>
  )
}

export default Services