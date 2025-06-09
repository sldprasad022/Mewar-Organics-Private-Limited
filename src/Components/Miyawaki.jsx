import React from 'react'
import image_91 from "../assets/image_91.png";
import GRASS from "../assets/hgrass_2.png";
import image_92 from "../assets/image_92.png";
import image_93 from "../assets/image_93.png";
import image_94 from "../assets/image_94.png";
import image_95 from "../assets/image_95.png";
import image_96 from "../assets/image_96.png";

import { Link, useNavigate } from "react-router-dom";


const Miyawaki = () => {

    const navigateTo= useNavigate();

    const handleContact = ()=>{
        navigateTo('/contact')
    }

    const handlePortfolio = ()=>{
        navigateTo('/portfolio')
    }



  return (
    <div className='flex flex-col gap-6 md:gap-8 lg:gap-8  xl:gap-14'>
        {/* 1st section */}
        <div className='relative h-[380px]  md:h-[500px] lg:h-[460px] xl:h-[500px] bg-center bg-cover' style={{backgroundImage:`url(${image_91})`}}>
             <div className="absolute inset-0 bg-stone-900 opacity-50 z-0"></div>
            {/*  */}
            <section className='relative z-10 flex flex-col gap-[50px] items-center pt-[210px] md:pt-[278px]'>
                <h1 className='text-[#fff] text-2xl md:text-6xl font-playfair'>Miyawaki Forest</h1>
                <div className='flex items-center gap-[1px] md:gap-[5px]'>
                    <Link className='text-[#fff] text-xl md:text-2xl font-semibold font-[Roboto]' to='/'>Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g clip-path="url(#clip0_1050_2401)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74399 5.24399C5.90026 5.08776 6.11219 5 6.33316 5C6.55413 5 6.76605 5.08776 6.92232 5.24399L11.089 9.41066C11.2452 9.56693 11.333 9.77885 11.333 9.99982C11.333 10.2208 11.2452 10.4327 11.089 10.589L6.92232 14.7557C6.76515 14.9075 6.55465 14.9915 6.33615 14.9896C6.11766 14.9877 5.90865 14.9 5.75414 14.7455C5.59963 14.591 5.51199 14.382 5.51009 14.1635C5.50819 13.945 5.59219 13.7345 5.74399 13.5773L9.32149 9.99982L5.74399 6.42232C5.58776 6.26605 5.5 6.05413 5.5 5.83316C5.5 5.61219 5.58776 5.40026 5.74399 5.24399ZM10.744 5.24399C10.9003 5.08776 11.1122 5 11.3332 5C11.5541 5 11.766 5.08776 11.9223 5.24399L16.089 9.41066C16.2452 9.56693 16.333 9.77885 16.333 9.99982C16.333 10.2208 16.2452 10.4327 16.089 10.589L11.9223 14.7557C11.7652 14.9075 11.5547 14.9915 11.3362 14.9896C11.1177 14.9877 10.9086 14.9 10.7541 14.7455C10.5996 14.591 10.512 14.382 10.5101 14.1635C10.5082 13.945 10.5922 13.7345 10.744 13.5773L14.3215 9.99982L10.744 6.42232C10.5878 6.26605 10.5 6.05413 10.5 5.83316C10.5 5.61219 10.5878 5.40026 10.744 5.24399Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1050_2401">
                            <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <Link className='text-[#fff] text-xl md:text-2xl font-semibold font-[Roboto]' to='/portfolio'>Portfolio</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g clip-path="url(#clip0_1050_2406)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74399 5.24399C5.90026 5.08776 6.11219 5 6.33316 5C6.55413 5 6.76605 5.08776 6.92232 5.24399L11.089 9.41066C11.2452 9.56693 11.333 9.77885 11.333 9.99982C11.333 10.2208 11.2452 10.4327 11.089 10.589L6.92232 14.7557C6.76515 14.9075 6.55465 14.9915 6.33615 14.9896C6.11766 14.9877 5.90865 14.9 5.75414 14.7455C5.59963 14.591 5.51199 14.382 5.51009 14.1635C5.50819 13.945 5.59219 13.7345 5.74399 13.5773L9.32149 9.99982L5.74399 6.42232C5.58776 6.26605 5.5 6.05413 5.5 5.83316C5.5 5.61219 5.58776 5.40026 5.74399 5.24399ZM10.744 5.24399C10.9003 5.08776 11.1122 5 11.3332 5C11.5541 5 11.766 5.08776 11.9223 5.24399L16.089 9.41066C16.2452 9.56693 16.333 9.77885 16.333 9.99982C16.333 10.2208 16.2452 10.4327 16.089 10.589L11.9223 14.7557C11.7652 14.9075 11.5547 14.9915 11.3362 14.9896C11.1177 14.9877 10.9086 14.9 10.7541 14.7455C10.5996 14.591 10.512 14.382 10.5101 14.1635C10.5082 13.945 10.5922 13.7345 10.744 13.5773L14.3215 9.99982L10.744 6.42232C10.5878 6.26605 10.5 6.05413 10.5 5.83316C10.5 5.61219 10.5878 5.40026 10.744 5.24399Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1050_2406">
                            <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className='text-[#fff] text-xl md:text-2xl font-semibold font-[Roboto]'>Miyawaki project</h1>
                </div>
            </section>
            {/*  */}
            <div className='absolute bottom-0 w-full'>
                <img src={GRASS} alt='GRASS' className='w-full'/>
            </div>
        </div>


        {/* 2nd Section */}
        <div className='flex flex-col px-4 md:px-8 lg:px-12 xl:px-20'>
            {/* 1st */}
           <div className='mb-4 md:mb-8 flex flex-col justify-center items-center gap-2'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-semibold text-[#000] font-playfair'>The Miyawaki Forest Project</h1>
                <h1 className='text-base md:text-2xl lg:text-[28px] italic text-[#212529] font-[Roboto]'>Urban Biodiversity Project</h1>
                <hr className='w-[120px] lg:w-[148px] h-[4px] bg-[#55833D]'/>
           </div>
           {/* 2nd */}
           <div className=' flex flex-col items-start'>
                <h1 className='mb-2 md:mb-4 lg:mb-[26px] text-[#000] font-playfair text-xl md:text-2xl lg:text-[32px] font-semibold'>Project Details</h1>
                <h1 className='mb-2 md:mb-4 lg:mb-5 text-[#000] font-[Roboto] text-lg md:text-xl lg:text-2xl font-medium'>Description</h1>
                <p className='text-[#212529] font-[Roboto] text-sm md:text-lg lg:text-xl'>The Miyawaki Forest Project aims to create dense, fast-growing, and self-sustaining green spaces using the Miyawaki afforestation method. 
                    By planting a diverse mix of native species in a small area, this project enhances biodiversity, restores ecosystems, and combats climate change. 
                    Unlike traditional plantations, Miyawaki forests grow 10x faster, absorb more CO₂, and require minimal maintenance after 2-3 years.
                     This initiative supports urban greening, soil restoration, and wildlife conservation, making it a sustainable solution for reforestation in degraded or urban landscapes.
                </p>
           </div>
           {/* 3rd */}
           <div className='my-3 md:my-5 flex flex-col items-start'>
                <h1 className='mb-2 md:mb-4 lg:mb-[26px] text-[#000] font-playfair text-xl md:text-2xl lg:text-[28px] font-medium'>Challenges & Solutions</h1>
                <h1 className='mb-2 md:mb-4 lg:mb-5 text-[#000] font-[Roboto] text-lg md:text-xl lg:text-2xl font-medium'>Challenges Faced:</h1>
                <ol className='text-[#212529] font-[Roboto] text-sm md:text-lg lg:text-xl flex flex-col md:gap-[8px] lg:gap-[12px]'>
                    <li>Survival Rate of Plants – Some species may struggle to adapt, affecting biodiversity balance.</li>
                    <li>Space Constraints – Finding suitable land in urban areas can be challenging.</li>
                    <li>High Initial Maintenance – Dense planting requires careful monitoring in the first few years.</li>
                    <li>Poor Soil Quality – Many urban and degraded lands lack the necessary nutrients for plant growth.</li>
                    <li>Limited Water Availability – Initial irrigation is needed, especially in dry or arid regions.</li>
                </ol>
           </div>
           {/* 4th */}
           <div className='mb-5 flex flex-col'>
                <h1 className='mb-2 md:mb-5 lg:mb-[26px] text-[#000] font-playfair text-2xl md:text-2xl lg:text-[28px] font-medium'>Image Gallery</h1>
                <div className='grid grid-cols-12 gap-2  md:gap-4 lg:gap-10'>
                    <div className='col-span-6'>
                        <img src={image_92} alt='image_92' loading="lazy" className='h-[300px] md:h-auto'/>
                    </div>
                    <div className='col-span-6'>
                        <div className='grid grid-cols-2 gap-2 md:gap-4 lg:gap-5'>
                            <img src={image_93} alt='image_93' loading="lazy" className='h-[146px] md:h-auto'/>
                            <img src={image_94} alt='image_94' loading="lazy" className='h-[146px] md:h-auto'/>
                            <img src={image_95} alt='image_95' loading="lazy" className='h-[146px] md:h-auto'/>
                            <img src={image_96} alt='image_96' loading="lazy" className='h-[146px] md:h-auto'/>
                        </div>
                    </div>
                </div>
           </div>
           {/* 5th  */}
           <div className='flex flex-col gap-3 md:gap-5 lg:gap-7'>
                <h1 className='text-[#000] font-playfair text-2xl md:text-2xl lg:text-[28px] font-medium'>Result & Impact</h1>
                <ol className='text-[#212529] font-[Roboto] text-sm md:text-lg lg:text-xl flex flex-col gap-2 md:gap-3'>
                    <li>Soil Enrichment – Organic compost, bio-fertilizers, and natural mulching improved soil health.</li>
                    <li>Efficient Watering Techniques – Drip irrigation and mulching helped retain moisture, reducing water consumption</li>
                    <li>Initial Care & Monitoring – For the first 2-3 years, regular watering, weed removal, and growth tracking ensured a high survival rate.</li>
                    <li>Optimized Land Use – Small patches of unused land, industrial areas, and public spaces were transformed into green zones</li>
                    <li>Diverse Plant Selection – Only native species were used to ensure better adaptation, faster growth, and ecosystem sustainability</li>
                </ol>
                <h1 className='text-[#000] font-[Roboto] text-xl lg:text-2xl font-medium'>Key Outcomes:</h1>
                <ol className='text-[#212529] font-[Roboto] text-sm md:text-lg lg:text-xl flex flex-col gap-1 md:gap-3'>
                    <li>Tree Growth Rate: Trees grew 10x faster than in conventional afforestation</li>
                    <li>Forest Density: Achieved 30x more density than traditional plantations.</li>
                    <li>Carbon Absorption: Increased CO₂ sequestration by up to 30 times, improving air quality</li>
                    <li>Biodiversity Boost: Encouraged the return of birds, butterflies, and pollinators, restoring local ecosystems</li>
                    <li>Soil Improvement: Enhanced soil fertility and water retention, reducing erosion</li>
                    <li>Self-Sustaining Ecosystem: After 2-3 years, the forest required zero maintenance</li>
                    <li>Temperature Reduction: Helped lower local temperatures by 2-5°C, combating urban heat islands</li>
                </ol>
           </div>
        </div>


        {/* 3rd Section */}
        <div className='mb-2 md:mb-6 flex flex-col justify-center items-center'>
            <h1 className='mb-4 md:mb-5 text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-semibold text-[#000] font-playfair'>Interested in similar projects?</h1>
            <button className='mb-4 md:mb-6 lg:mb-9 px-3 md:px-4 lg:px-8 py-1 md:py-2 lg:py-4 border border-[#55833D] rounded-xl border-[3px] text-white lg:text-[#212529] bg-[#55833D] lg:bg-white  md:text-lg lg:text-xl font-medium font-[Roboto] hover:bg-[#55833D] hover:text-[#fff]' onClick={handleContact}>
                Get in Touch
            </button>
            <button className='bg-[#55833D] px-4 md:px-6 lg:px-8 py-1.5 md:py-2.5 text-[#fff] text-xl md:text-2xl lg:text-[28px] font-medium font-[Roboto] underline' onClick={handlePortfolio}>
                Explore More Projects
            </button>
        </div>

    </div>
  )
}

export default Miyawaki