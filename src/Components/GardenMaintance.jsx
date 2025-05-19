// import React from 'react'
// import image_97 from'../assets/image_97.png'
// import GRASS from "../assets/hgrass_2.png";
// import image_98 from'../assets/image_98.png'
// import { Link, useNavigate } from "react-router-dom";
// import image_99 from'../assets/image_99.png'
// import image_100 from'../assets/image_100.png'
// import image_101 from'../assets/image_101.png'

// const GardenMaintance = () => {

//     const navigate = useNavigate();

//     const handleClick =()=>{
//         navigate('/contact')
//     }

//   return (
//     <div className='flex flex-col lg:gap-8  xl:gap-14'>
//         {/* 1st Section */}
//         <div className='bg-cover bg-center lg:h-[500px] xl:h-[500px] relative bg-stone-800 bg-opacity-50' style={{backgroundImage:`url(${image_97})`}}>
//              <div className="absolute inset-0 bg-stone-900 opacity-50 z-0"></div>
//         {/*  */}
//         <section className='relative z-10 pt-[302px] flex flex-col gap-[50px] justify-center items-center text-[#fff] '>
//             <h1 className='text-[44px] font-semibold font-playfair'>Garden Maintenance</h1>
//             <div className='flex items-center'>
//                 <Link className='text-2xl font-semibold font-[Roboto]' to='/'>Home</Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <g clip-path="url(#clip0_1050_2594)">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z" fill="white"/>
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_1050_2594">
//                         <rect width="20" height="20" fill="white"/>
//                         </clipPath>
//                     </defs>
//                 </svg>
//                 <Link className='text-2xl font-semibold font-[Roboto]' to='/services'>Services</Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <g clip-path="url(#clip0_1050_2594)">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z" fill="white"/>
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_1050_2594">
//                         <rect width="20" height="20" fill="white"/>
//                         </clipPath>
//                     </defs>
//                 </svg>
//                 <h1 className='text-2xl font-semibold font-[Roboto]'>Garden Maintenance</h1>
//             </div>
//         </section>

//         {/*  */}
//             <div className='absolute bottom-[0px]'>
//                 <img src={GRASS} alt='GRASS' className=''/>
//             </div>
//         </div>


//         {/* 2nd Section */}
//         <div className='lg:px-12 xl:px-20 flex w-full lg:gap-[50px] xl:gap-[92px]'>
//             {/* 1st Section */}
//             <div className=' xl:w-3/12 grid gap-[40px]'>
//                 {/* 1st 1st section */}
//                 <div className='grid lg:gap-[6px] xl:gap-[10px] justify-center items-center'>
//                     <h1 className='lg:h-[70px] xl:h-[82px]  lg:px-[40px] xl:px-[50px]  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Educational Workshops & Awareness</h1>
//                     <h1 className='lg:h-[70px] xl:h-[82px]  lg:px-[40px] xl:px-[50px]  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Garden Maintenance</h1>
//                     <h1 className='lg:h-[70px] xl:h-[82px]  lg:px-[40px] xl:px-[50px]  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Planning & Consulting</h1>
//                     <h1 className='lg:h-[70px] xl:h-[82px]  lg:px-[40px] xl:px-[50px]  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Vatika Creations</h1>
//                     <h1 className='lg:h-[70px] xl:h-[82px]  lg:px-[40px] xl:px-[50px]  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Custom Garden Solutions</h1>
//                     <h1 className='lg:h-[70px] xl:h-[82px]  lg:px-[40px] xl:px-[50px]  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Miyawaki Forest Development</h1>
//                     <h1 className='lg:h-[70px] xl:h-[82px]  lg:px-[40px] xl:px-[50px]  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Plantation & Sales</h1>
//                 </div>
//                 {/*1st 2nd section*/}
//                 <div className='bg-cover bg-center w-[321px] h-[516px] ' style={{backgroundImage:`url(${image_98})`}}>
//                     {/* section */}
//                     <section className='px-[11px] py-[100px] flex flex-col items-center bg-stone-800 bg-opacity-50'>
//                         <h1 className='text-[#55833D] font-extrabold font-[Roboto]'>Contact Us now</h1>
//                         <h1 className='py-[20px] text-[#FFF] text-[28px] font-semibold font-[Roboto]'>If need help!</h1>
//                         <hr className='bg-[#FFF] h-[1px] w-[287px] mb-[30px]'/>
//                         <h1 className='mb-[30px] text-[#FFF] font-[Roboto] text-xl'>Or go to contact form  :</h1>
//                         <h1 className='mb-[35px] font-[Roboto] font-medium text-[#FFF] text-[28px]'>+91 99285 89650</h1>
//                         <div className='flex' onClick={handleClick}>
//                             <h1 className='text-[#000] px-[20px] py-[10px] bg-[#FFF] font-medium font-[Roboto]'>Let’s Start Now</h1>
//                             <div className='bg-[#55833D] p-[10px]' >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
//                                     <path d="M11.0898 13.9103C11.4998 14.3003 11.4998 14.9403 11.0898 15.3303C10.6998 15.7203 10.0598 15.7203 9.66982 15.3303C7.71982 13.3803 7.71982 10.2103 9.66982 8.26031L13.2098 4.72031C15.1598 2.77031 18.3298 2.77031 20.2798 4.72031C22.2298 6.67031 22.2298 9.84031 20.2798 11.7903L18.7898 13.2803C18.7998 12.4603 18.6698 11.6403 18.3898 10.8603L18.8598 10.3803C20.0398 9.21031 20.0398 7.31031 18.8598 6.14031C17.6898 4.96031 15.7898 4.96031 14.6198 6.14031L11.0898 9.67031C9.90982 10.8403 9.90982 12.7403 11.0898 13.9103ZM13.9098 9.67031C14.2998 9.28031 14.9398 9.28031 15.3298 9.67031C17.2798 11.6203 17.2798 14.7903 15.3298 16.7403L11.7898 20.2803C9.83982 22.2303 6.66982 22.2303 4.71982 20.2803C2.76982 18.3303 2.76982 15.1603 4.71982 13.2103L6.20982 11.7203C6.19982 12.5403 6.32982 13.3603 6.60982 14.1503L6.13982 14.6203C4.95982 15.7903 4.95982 17.6903 6.13982 18.8603C7.30982 20.0403 9.20982 20.0403 10.3798 18.8603L13.9098 15.3303C15.0898 14.1603 15.0898 12.2603 13.9098 11.0903C13.4998 10.7003 13.4998 10.0603 13.9098 9.67031Z" fill="white"/>
//                                 </svg>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>


//             {/* 2nd Section */}
//             <div className='w-9/12 flex flex-col lg:gap-5 xl:gap-10'>
//                 {/* 2nd - 1st */}
//                 <img src={image_99} alt='image_99' className='lg:h-[400px] lg:w-[90%] xl:h-[468px] xl:w-full'/>
//                {/*  */}
//                 <div className='flex flex-col lg:w-[90%] xl:w-full'>
//                     <h1 className='mb-[20px] lg:text-4xl xl:text-[44px] font-semibold font-playfair'>Garden Maintenance</h1>
//                     <p className='text-xl text-[#000] font-[Roboto]'> Comprehensive garden maintenance services to keep your outdoor spaces healthy, clean, and thriving year-round. 
//                         From lawn care and pruning to seasonal clean-ups, we ensure every detail is handled with care.
//                     </p>
//                     <p className='py-[10px] text-xl text-[#000] font-[Roboto]'>
//                         Elevate your outdoor living with tailored garden maintenance. 
//                         Our expert team provides meticulous care — from sculpted hedges to vibrant seasonal blooms — ensuring a lush, refined landscape all year round.
//                     </p>
//                     <p className='text-xl text-[#000] font-[Roboto]'>
//                         We take the hassle out of garden care! Whether it’s trimming, weeding, mowing, or refreshing your plants, 
//                         our team keeps your garden looking its best — so you can enjoy it without the hard work.
//                     </p>
//                 </div>
//                 {/* 2nd- 2 */}
//                 <div className='flex gap-[30px] xl:gap-[60px] lg:w-[90%] xl:w-full'>
//                     {/*  */}
//                     <div className='flex items-center justify-center lg:gap-[20px] xl:gap-[25px] lg:p-3 xl:p-[5px] lg:w-[300px] xl:w-[390px] h-[150px] shadow-xl bg-[#F6F2FA] rounded-xl'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
//                             <path d="M37.8815 35.512L30.5298 33.0003L27.9998 40.3337L22.3532 29.3337L16.9998 40.3337L14.4698 33.0003L7.11816 35.512L12.4715 24.512C10.7115 22.312 9.6665 19.5253 9.6665 16.5003C9.6665 13.0967 11.0186 9.8325 13.4253 7.42579C15.832 5.01907 19.0962 3.66699 22.4998 3.66699C25.9034 3.66699 29.1677 5.01907 31.5744 7.42579C33.9811 9.8325 35.3332 13.0967 35.3332 16.5003C35.3332 19.5253 34.2882 22.312 32.5282 24.512L37.8815 35.512ZM13.3332 16.5003L18.2648 18.957L17.9165 24.457L22.4998 21.4137L27.0832 24.4387L26.7715 18.957L31.6665 16.5003L26.7532 14.0253L27.0832 8.56199L22.4998 11.5687L17.9165 8.52533L18.2282 14.0437L13.3332 16.5003Z" fill="#55833D"/>
//                         </svg>
//                         <div className='flex flex-col gap-[20px]'>
//                             <h1 className='lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Why It soft?</h1>
//                             <h1 className='lg:text-lg xl:text-xl text-[#000] font-[Roboto]'>We're making room for self care today with plan.</h1>
//                         </div>
//                     </div>
//                     {/*  */}
//                     <div className='flex items-center justify-center lg:gap-[20px] xl:gap-[25px] lg:p-3 xl:p-[5px] lg:w-[300px] xl:w-[390px] h-[150px] shadow-xl bg-[#F6F2FA] rounded-xl'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
//                             <path d="M4.40039 14.2002H11.7598V27.8428H27.5996V30.7998C27.5996 32.6675 26.0678 34.2001 24.2002 34.2002H12.7861L12.4932 34.4932L7.59961 39.3857V34.2002H4.40039C2.53268 34.2002 1 32.6675 1 30.7998V17.6006C1 15.7329 2.53268 14.2002 4.40039 14.2002ZM19.7998 3.2002H39.5996C41.4673 3.2002 43 4.73287 43 6.60059V19.7998C43 21.6694 41.4676 23.2002 39.5996 23.2002H36.4004V28.3857L31.5068 23.4932L31.2139 23.2002H16.4004V6.60059C16.4004 4.73294 17.9322 3.2003 19.7998 3.2002Z" stroke="#55833D" strokeWidth="2"/>
//                         </svg>
//                         <div className='flex flex-col gap-[20px]'>
//                             <h1 className='lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Unlimited support</h1>
//                             <h1 className='lg:text-lg xl:text-xl text-[#000] font-[Roboto]'>New range coming in on a weekly basis veg section.</h1>
//                         </div>
//                     </div>
//                 </div>
            
//                 {/* 3rd */}
//                 <div className='flex gap-[40px] lg:w-[90%] xl:w-full'>
//                     <img src={image_100} alt='image_100' className='lg:w-[220px] xl:w-[438px] h-[250px]'/>
//                     <div className='flex flex-col gap-[20px]'>
//                         <h1 className='text-2xl text-[#000] font-[Roboto] font-medium'>We serve the best work</h1>
//                         <p className='text-xl text-[#000] font-[Roboto]'>
//                             By initiating your project with Fingent, you get a dedicated and skilled team backing you up to around-the-clock. 
//                             All our processes are the one customer oriented, designed to reduce the cost of business operations.
//                         </p>
//                     </div>
//                 </div>

//                 {/* 4th */}
//                 <div className='flex lg:gap-[60px] xl:gap-[87px] lg:w-[90%] xl:w-full'>
//                     <div className='flex items-center gap-[20px] '>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
//                         <rect width="60" height="60" rx="8" fill="#55833D"/>
//                         <path d="M16.875 37.5L13.125 16.875L23.4375 26.25L30 15L36.5625 26.25L46.875 16.875L43.125 37.5H16.875ZM43.125 43.125C43.125 44.25 42.375 45 41.25 45H18.75C17.625 45 16.875 44.25 16.875 43.125V41.25H43.125V43.125Z" fill="white"/>
//                         </svg>
//                         <h1 className='lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Best quality support</h1>
//                     </div>
//                     <div className='flex items-center gap-[20px] '>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
//                         <rect width="60" height="60" rx="8" fill="#55833D"/>
//                         <path d="M26.909 37.7273L20.7272 31.5455L22.9063 29.3664L26.909 33.3536L37.0935 23.1691L39.2726 25.3636M29.9999 13L16.0908 19.1818V28.4545C16.0908 37.0318 22.0254 45.0527 29.9999 47C37.9745 45.0527 43.909 37.0318 43.909 28.4545V19.1818L29.9999 13Z" fill="white"/>
//                         </svg>
//                         <h1 className='lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Money back guarantee</h1>
//                     </div>
//                     <div className='flex items-center gap-[20px] '>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
//                         <rect width="60" height="60" rx="8" fill="#55833D"/>
//                         <path d="M40.6058 19.6275C40.1366 18.3978 38.8789 18.1263 38.2407 17.4237C37.6588 16.6891 37.7339 15.5871 36.5138 14.8365C35.2937 14.086 34.0737 14.4692 33.0788 14.2297C32.084 13.9901 31.4082 13 29.8878 13C28.3674 13 27.6729 13.9263 26.6968 14.2297C25.7207 14.5331 24.5007 14.07 23.2618 14.8365C22.0229 15.6031 22.1168 16.6891 21.5349 17.4237C20.8967 18.1263 19.6578 18.3978 19.1698 19.6275C18.6818 20.8572 19.564 21.7036 19.564 22.582C19.564 23.4603 18.6255 24.3067 19.1698 25.5364C19.7142 26.7661 20.8967 27.0376 21.5349 27.7403C22.1168 28.4749 22.0417 29.5768 23.2618 30.3274C24.4819 31.078 25.702 30.6947 26.6968 30.9342C27.6917 31.1738 28.3674 32.1639 29.8878 32.1639C31.4082 32.1639 32.1027 31.2377 33.0788 30.9342C34.0549 30.6308 35.275 31.0939 36.5138 30.3274C37.7527 29.5608 37.6588 28.4749 38.2407 27.7403C38.8789 27.0376 40.1178 26.7661 40.6058 25.5364C41.0939 24.3067 40.2116 23.4603 40.2116 22.582C40.2116 21.7036 41.1502 20.8572 40.6058 19.6275ZM29.8878 28.9699C28.4028 28.9699 26.9512 28.5953 25.7165 27.8934C24.4817 27.1915 23.5194 26.1938 22.9511 25.0265C22.3828 23.8593 22.2341 22.5749 22.5238 21.3357C22.8135 20.0966 23.5286 18.9584 24.5787 18.065C25.6287 17.1716 26.9666 16.5632 28.423 16.3167C29.8795 16.0702 31.3891 16.1968 32.7611 16.6802C34.133 17.1637 35.3057 17.9825 36.1307 19.033C36.9557 20.0835 37.396 21.3185 37.396 22.582C37.396 24.2762 36.605 25.901 35.1969 27.0989C33.7889 28.2969 31.8791 28.9699 29.8878 28.9699ZM33.6419 22.582C33.6419 23.2137 33.4218 23.8312 33.0092 24.3564C32.5967 24.8817 32.0104 25.2911 31.3244 25.5328C30.6385 25.7746 29.8836 25.8378 29.1554 25.7146C28.4272 25.5913 27.7583 25.2871 27.2332 24.8405C26.7082 24.3938 26.3507 23.8247 26.2058 23.2051C26.061 22.5855 26.1353 21.9433 26.4195 21.3597C26.7036 20.7761 27.1848 20.2772 27.8021 19.9263C28.4195 19.5753 29.1453 19.388 29.8878 19.388C30.8835 19.388 31.8383 19.7245 32.5424 20.3235C33.2464 20.9225 33.6419 21.7349 33.6419 22.582ZM33.0976 34.6552L31.915 40.4044L30.5448 47L25.6457 43.0235L19.4514 45.3391L21.9479 33.3617C23.048 33.829 24.2662 34.0594 25.4955 34.0324C26.2493 34.5216 27.1016 34.8896 28.0108 35.1184C28.6184 35.2793 29.2514 35.3601 29.8878 35.3579C31.0107 35.3609 32.1158 35.119 33.0976 34.6552ZM41 39.7976L36.1572 38.3283L37.1145 33.6332C37.6858 33.4634 38.2237 33.2211 38.71 32.9145L38.9352 32.7548L41 39.7976Z" fill="white"/>
//                         </svg>
//                         <h1 className='lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Cheap price provider</h1>
//                     </div>
//                 </div>

//             </div>
//         </div>


//         {/* 3rd Section */}
//         <div className='lg:px-12 xl:px-20 w-full flex gap-[40px]'>
//             {/*  */}
//             <div className='w-4/12'>
//                 <h1 className='text-[#55833D] font-[Roboto] text-xl font-semibold'>Care Features</h1>
//                 <h1 className='py-[20px] text-[#000] text-[44px] font-playfair'>Design with Distinction</h1>
//                 <p className='mb-[78px] text-xl font-[Roboto]'>Welcome to Garda. For 25 years, we have brought our signature design aesthetic to public and private gardens throughout New York City. 
//                     Our goal is to increase the natural beauty of every landscape.
//                 </p>
//                 <button className='px-[32px] py-[16px] border border-solid border-4 border-b-8 border-[#55833D] rounded-[100px] text-[#212529] font-[Roboto] font-semibold text-lg' onClick={handleClick}>
//                     Contact Us
//                 </button>

//             </div>
//             {/*  */}
//             <div className='w-4/12 flex flex-col'>
//                 {/*  */}
//                 <div className='mb-[90px]'>
//                     <div className='p-[14px] bg-[#F6F2FA] w-[60px] rounded-r-[40px]'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//                             <path d="M20.1335 2.41309L16.3602 6.18642C15.3335 7.22642 15.3335 8.91975 16.3602 9.95975L18.2402 11.8398L12.1735 17.9064L8.41351 14.1331L6.52018 15.9998C-0.0798185 22.6664 4.66685 27.3331 4.66685 27.3331C4.66685 27.3331 9.33352 31.9998 16.0002 25.4531L17.8802 23.5731L14.1468 19.8398L20.2002 13.7864L22.0535 15.6398C23.0935 16.6664 24.7868 16.6664 25.8268 15.6398L29.6002 11.8664L20.1335 2.41309ZM23.9068 13.7064L22.0668 11.8664L20.1468 9.94642L18.2802 8.07975L20.1602 6.19975L25.8002 11.8398L23.9068 13.7064Z" fill="#55833D"/>
//                         </svg>
//                     </div>
//                     <h1 className='py-[20px] text-[28px] font-[Roboto] font-medium'>Variation Gardening</h1>
//                     <h1 className='text-[#000] font-[Roboto] text-xl'>Verdant foliage and native plants create a lush look for this landscape.</h1>
//                 </div>
//                 {/*  */}
//                 <div className='mb-[90px]'>
//                     <div className='p-[14px] bg-[#F6F2FA] w-[60px] rounded-r-[40px]'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//                         <path d="M18.6668 8L13.6668 14.6667L17.4668 19.7333L15.3335 21.3333C13.0802 18.3333 9.3335 13.3333 9.3335 13.3333L1.3335 24H30.6668L18.6668 8Z" fill="#55833D"/>
//                         </svg>
//                     </div>
//                     <h1 className='py-[20px] text-[28px] font-[Roboto] font-medium'>Professional Landscaping</h1>
//                     <h1 className='text-[#000] font-[Roboto] text-xl'>Professional landscaping requires creativity, a sense of design.</h1>
//                 </div>
//             </div>
//             {/*  */}
//             <div className='w-4/12'>
//                 <img src={image_101} alt='image_101' className=''/>
//             </div>
//         </div>



//     </div>
//   )
// }

// export default GardenMaintance



import React from 'react'
import image_97 from'../assets/image_97.png'
import GRASS from "../assets/hgrass_2.png";
import image_98 from'../assets/image_98.png'
import { Link, useNavigate } from "react-router-dom";
import image_99 from'../assets/image_99.png'
import image_100 from'../assets/image_100.png'
import image_101 from'../assets/image_101.png'

const GardenMaintance = () => {

    const navigate = useNavigate();

    const handleClick =()=>{
        navigate('/contact')
    }

  return (
    <div className='flex flex-col md:gap-8 lg:gap-8  xl:gap-14'>
        {/* 1st Section */}
        <div className='bg-cover bg-center md:h-[500px] xl:h-[500px] relative bg-stone-800 bg-opacity-50' style={{backgroundImage:`url(${image_97})`}}>
             <div className="absolute inset-0 bg-stone-900 opacity-50 z-0"></div>
        {/*  */}
        <section className='relative z-10 pt-[302px] flex flex-col gap-[50px] justify-center items-center text-[#fff] '>
            <h1 className='text-[44px] font-semibold font-playfair'>Garden Maintenance</h1>
            <div className='flex items-center'>
                <Link className='text-2xl font-semibold font-[Roboto]' to='/'>Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1050_2594)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1050_2594">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <Link className='text-2xl font-semibold font-[Roboto]' to='/services'>Services</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1050_2594)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1050_2594">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <h1 className='text-2xl font-semibold font-[Roboto]'>Garden Maintenance</h1>
            </div>
        </section>

        {/*  */}
            <div className='absolute bottom-[0px]'>
                <img src={GRASS} alt='GRASS' className=''/>
            </div>
        </div>


        {/* 2nd Section */}
        <div className='md:px-8 lg:px-12 xl:px-20 flex flex-col lg:flex-row w-full gap-10 lg:gap-[92px]'>
            {/* 1st Section */}
            <div className='w-full lg:w-3/12 grid md:gap-5 lg:gap-5 xl:gap-10'>
                {/* 1st 1st section */}
                <div className='grid gap-6 lg:gap-[6px] xl:gap-[10px] justify-center items-center'>
                    <h1 className='lg:h-[70px] xl:h-[82px]   md:px-44 lg:px-[30px] xl:px-[50px] md:py-5  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Educational Workshops & Awareness</h1>
                    <h1 className='lg:h-[70px] xl:h-[82px]   md:px-44 lg:px-[30px] xl:px-[50px] md:py-5  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Garden Maintenance</h1>
                    <h1 className='lg:h-[70px] xl:h-[82px]   md:px-44 lg:px-[30px] xl:px-[50px] md:py-5  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Planning & Consulting</h1>
                    <h1 className='lg:h-[70px] xl:h-[82px]   md:px-44 lg:px-[30px] xl:px-[50px] md:py-5  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Vatika Creations</h1>
                    <h1 className='lg:h-[70px] xl:h-[82px]   md:px-44 lg:px-[30px] xl:px-[50px] md:py-5  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Custom Garden Solutions</h1>
                    <h1 className='lg:h-[70px] xl:h-[82px]   md:px-44 lg:px-[30px] xl:px-[50px] md:py-5  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Miyawaki Forest Development</h1>
                    <h1 className='lg:h-[70px] xl:h-[82px]   md:px-44 lg:px-[30px] xl:px-[50px] md:py-5  lg:py-[17px] xl:py-[25px] bg-[#F6F2FA] text-[#212529] text-lg font-medium font-[Roboto]'>Plantation & Sales</h1>
                </div>
                {/*1st 2nd section*/}
                <div className='bg-cover bg-center lg:h-[516px] ' style={{backgroundImage:`url(${image_98})`}}>
                    {/* section */}
                    <section className='px-[11px] py-[100px] flex flex-col items-center bg-stone-800 bg-opacity-50'>
                        <h1 className='text-[#55833D] font-extrabold font-[Roboto]'>Contact Us now</h1>
                        <h1 className='py-[20px] text-[#FFF] text-[28px] font-bold font-[Roboto]'>If need help!</h1>
                        <hr className='bg-[#FFF] h-[1px] w-[287px] mb-[30px]'/>
                        <h1 className='mb-[30px] text-[#FFF] font-[Roboto] text-xl'>Or go to contact form  :</h1>
                        <h1 className='mb-[35px] font-[Roboto] font-medium text-[#FFF] text-[28px]'>+91 99285 89650</h1>
                        <div className='flex' onClick={handleClick}>
                            <h1 className='text-[#000] px-[20px] py-[10px] bg-[#FFF] font-medium font-[Roboto]'>Let’s Start Now</h1>
                            <div className='bg-[#55833D] p-[10px]' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M11.0898 13.9103C11.4998 14.3003 11.4998 14.9403 11.0898 15.3303C10.6998 15.7203 10.0598 15.7203 9.66982 15.3303C7.71982 13.3803 7.71982 10.2103 9.66982 8.26031L13.2098 4.72031C15.1598 2.77031 18.3298 2.77031 20.2798 4.72031C22.2298 6.67031 22.2298 9.84031 20.2798 11.7903L18.7898 13.2803C18.7998 12.4603 18.6698 11.6403 18.3898 10.8603L18.8598 10.3803C20.0398 9.21031 20.0398 7.31031 18.8598 6.14031C17.6898 4.96031 15.7898 4.96031 14.6198 6.14031L11.0898 9.67031C9.90982 10.8403 9.90982 12.7403 11.0898 13.9103ZM13.9098 9.67031C14.2998 9.28031 14.9398 9.28031 15.3298 9.67031C17.2798 11.6203 17.2798 14.7903 15.3298 16.7403L11.7898 20.2803C9.83982 22.2303 6.66982 22.2303 4.71982 20.2803C2.76982 18.3303 2.76982 15.1603 4.71982 13.2103L6.20982 11.7203C6.19982 12.5403 6.32982 13.3603 6.60982 14.1503L6.13982 14.6203C4.95982 15.7903 4.95982 17.6903 6.13982 18.8603C7.30982 20.0403 9.20982 20.0403 10.3798 18.8603L13.9098 15.3303C15.0898 14.1603 15.0898 12.2603 13.9098 11.0903C13.4998 10.7003 13.4998 10.0603 13.9098 9.67031Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


            {/* 2nd Section */}
            <div className='w-full lg:w-9/12 flex flex-col md:gap-5 lg:gap-10 xl:gap-10'>
                {/* 2nd - 1st */}
                <img src={image_99} alt='image_99' className='lg:h-[400px]  xl:h-[468px] lg:w-[95%] xl:w-full'/>
               {/*  */}
                <div className='flex flex-col lg:w-[95%] xl:w-full'>
                    <h1 className='mb-5 md:text-3xl lg:text-4xl xl:text-[44px] font-semibold font-playfair'>Garden Maintenance</h1>
                    <p className='md:text-lg lg:text-xl text-[#000] font-[Roboto]'> Comprehensive garden maintenance services to keep your outdoor spaces healthy, clean, and thriving year-round. 
                        From lawn care and pruning to seasonal clean-ups, we ensure every detail is handled with care.
                    </p>
                    <p className='py-[10px] md:text-lg lg:text-xl text-[#000] font-[Roboto]'>
                        Elevate your outdoor living with tailored garden maintenance. 
                        Our expert team provides meticulous care — from sculpted hedges to vibrant seasonal blooms — ensuring a lush, refined landscape all year round.
                    </p>
                    <p className='md:text-lg lg:text-xl text-[#000] font-[Roboto]'>
                        We take the hassle out of garden care! Whether it’s trimming, weeding, mowing, or refreshing your plants, 
                        our team keeps your garden looking its best — so you can enjoy it without the hard work.
                    </p>
                </div>
                {/* 2nd- 2 */}
                <div className='flex gap-[30px] xl:gap-[60px] lg:w-[95%] xl:w-full'>
                    {/*  */}
                    <div className='flex items-center justify-center lg:gap-[20px] xl:gap-[25px] lg:p-3 xl:p-[5px] lg:w-[300px] xl:w-[390px] h-[150px] shadow-xl bg-[#F6F2FA] rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
                            <path d="M37.8815 35.512L30.5298 33.0003L27.9998 40.3337L22.3532 29.3337L16.9998 40.3337L14.4698 33.0003L7.11816 35.512L12.4715 24.512C10.7115 22.312 9.6665 19.5253 9.6665 16.5003C9.6665 13.0967 11.0186 9.8325 13.4253 7.42579C15.832 5.01907 19.0962 3.66699 22.4998 3.66699C25.9034 3.66699 29.1677 5.01907 31.5744 7.42579C33.9811 9.8325 35.3332 13.0967 35.3332 16.5003C35.3332 19.5253 34.2882 22.312 32.5282 24.512L37.8815 35.512ZM13.3332 16.5003L18.2648 18.957L17.9165 24.457L22.4998 21.4137L27.0832 24.4387L26.7715 18.957L31.6665 16.5003L26.7532 14.0253L27.0832 8.56199L22.4998 11.5687L17.9165 8.52533L18.2282 14.0437L13.3332 16.5003Z" fill="#55833D"/>
                        </svg>
                        <div className='flex flex-col gap-[20px]'>
                            <h1 className='lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Why It soft?</h1>
                            <h1 className='lg:text-lg xl:text-xl text-[#000] font-[Roboto]'>We're making room for self care today with plan.</h1>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-center lg:gap-[20px] xl:gap-[25px] lg:p-3 xl:p-[5px] lg:w-[300px] xl:w-[390px] h-[150px] shadow-xl bg-[#F6F2FA] rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M4.40039 14.2002H11.7598V27.8428H27.5996V30.7998C27.5996 32.6675 26.0678 34.2001 24.2002 34.2002H12.7861L12.4932 34.4932L7.59961 39.3857V34.2002H4.40039C2.53268 34.2002 1 32.6675 1 30.7998V17.6006C1 15.7329 2.53268 14.2002 4.40039 14.2002ZM19.7998 3.2002H39.5996C41.4673 3.2002 43 4.73287 43 6.60059V19.7998C43 21.6694 41.4676 23.2002 39.5996 23.2002H36.4004V28.3857L31.5068 23.4932L31.2139 23.2002H16.4004V6.60059C16.4004 4.73294 17.9322 3.2003 19.7998 3.2002Z" stroke="#55833D" strokeWidth="2"/>
                        </svg>
                        <div className='flex flex-col gap-[20px]'>
                            <h1 className='lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Unlimited support</h1>
                            <h1 className='lg:text-lg xl:text-xl text-[#000] font-[Roboto]'>New range coming in on a weekly basis veg section.</h1>
                        </div>
                    </div>
                </div>
            
                {/* 3rd */}
                <div className='flex gap-5 lg:gap-[20px] xl:gap-[40px] md:w-full lg:w-[95%] xl:w-full'>
                    <img src={image_100} alt='image_100' className='md:w-1/2 lg:w-[220px] xl:w-[438px] h-[250px]'/>
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-xl md:text-2xl text-[#000] font-[Roboto] font-medium'>We serve the best work</h1>
                        <p className='md:text-lg lg:text-xl text-[#000] font-[Roboto]'>
                            By initiating your project with Fingent, you get a dedicated and skilled team backing you up to around-the-clock. 
                            All our processes are the one customer oriented, designed to reduce the cost of business operations.
                        </p>
                    </div>
                </div>

                {/* 4th */}
                <div className='flex lg:gap-[20px] xl:gap-[87px] lg:w-[95%] xl:w-full'>
                    <div className='flex items-center gap-3 lg:gap-5 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect width="60" height="60" rx="8" fill="#55833D"/>
                        <path d="M16.875 37.5L13.125 16.875L23.4375 26.25L30 15L36.5625 26.25L46.875 16.875L43.125 37.5H16.875ZM43.125 43.125C43.125 44.25 42.375 45 41.25 45H18.75C17.625 45 16.875 44.25 16.875 43.125V41.25H43.125V43.125Z" fill="white"/>
                        </svg>
                        <h1 className='md:text-lg lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Best quality support</h1>
                    </div>
                    <div className='flex items-center gap-3 lg:gap-5 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect width="60" height="60" rx="8" fill="#55833D"/>
                        <path d="M26.909 37.7273L20.7272 31.5455L22.9063 29.3664L26.909 33.3536L37.0935 23.1691L39.2726 25.3636M29.9999 13L16.0908 19.1818V28.4545C16.0908 37.0318 22.0254 45.0527 29.9999 47C37.9745 45.0527 43.909 37.0318 43.909 28.4545V19.1818L29.9999 13Z" fill="white"/>
                        </svg>
                        <h1 className='md:text-lg lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Money back guarantee</h1>
                    </div>
                    <div className='flex items-center gap-3 lg:gap-5 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect width="60" height="60" rx="8" fill="#55833D"/>
                        <path d="M40.6058 19.6275C40.1366 18.3978 38.8789 18.1263 38.2407 17.4237C37.6588 16.6891 37.7339 15.5871 36.5138 14.8365C35.2937 14.086 34.0737 14.4692 33.0788 14.2297C32.084 13.9901 31.4082 13 29.8878 13C28.3674 13 27.6729 13.9263 26.6968 14.2297C25.7207 14.5331 24.5007 14.07 23.2618 14.8365C22.0229 15.6031 22.1168 16.6891 21.5349 17.4237C20.8967 18.1263 19.6578 18.3978 19.1698 19.6275C18.6818 20.8572 19.564 21.7036 19.564 22.582C19.564 23.4603 18.6255 24.3067 19.1698 25.5364C19.7142 26.7661 20.8967 27.0376 21.5349 27.7403C22.1168 28.4749 22.0417 29.5768 23.2618 30.3274C24.4819 31.078 25.702 30.6947 26.6968 30.9342C27.6917 31.1738 28.3674 32.1639 29.8878 32.1639C31.4082 32.1639 32.1027 31.2377 33.0788 30.9342C34.0549 30.6308 35.275 31.0939 36.5138 30.3274C37.7527 29.5608 37.6588 28.4749 38.2407 27.7403C38.8789 27.0376 40.1178 26.7661 40.6058 25.5364C41.0939 24.3067 40.2116 23.4603 40.2116 22.582C40.2116 21.7036 41.1502 20.8572 40.6058 19.6275ZM29.8878 28.9699C28.4028 28.9699 26.9512 28.5953 25.7165 27.8934C24.4817 27.1915 23.5194 26.1938 22.9511 25.0265C22.3828 23.8593 22.2341 22.5749 22.5238 21.3357C22.8135 20.0966 23.5286 18.9584 24.5787 18.065C25.6287 17.1716 26.9666 16.5632 28.423 16.3167C29.8795 16.0702 31.3891 16.1968 32.7611 16.6802C34.133 17.1637 35.3057 17.9825 36.1307 19.033C36.9557 20.0835 37.396 21.3185 37.396 22.582C37.396 24.2762 36.605 25.901 35.1969 27.0989C33.7889 28.2969 31.8791 28.9699 29.8878 28.9699ZM33.6419 22.582C33.6419 23.2137 33.4218 23.8312 33.0092 24.3564C32.5967 24.8817 32.0104 25.2911 31.3244 25.5328C30.6385 25.7746 29.8836 25.8378 29.1554 25.7146C28.4272 25.5913 27.7583 25.2871 27.2332 24.8405C26.7082 24.3938 26.3507 23.8247 26.2058 23.2051C26.061 22.5855 26.1353 21.9433 26.4195 21.3597C26.7036 20.7761 27.1848 20.2772 27.8021 19.9263C28.4195 19.5753 29.1453 19.388 29.8878 19.388C30.8835 19.388 31.8383 19.7245 32.5424 20.3235C33.2464 20.9225 33.6419 21.7349 33.6419 22.582ZM33.0976 34.6552L31.915 40.4044L30.5448 47L25.6457 43.0235L19.4514 45.3391L21.9479 33.3617C23.048 33.829 24.2662 34.0594 25.4955 34.0324C26.2493 34.5216 27.1016 34.8896 28.0108 35.1184C28.6184 35.2793 29.2514 35.3601 29.8878 35.3579C31.0107 35.3609 32.1158 35.119 33.0976 34.6552ZM41 39.7976L36.1572 38.3283L37.1145 33.6332C37.6858 33.4634 38.2237 33.2211 38.71 32.9145L38.9352 32.7548L41 39.7976Z" fill="white"/>
                        </svg>
                        <h1 className='md:text-lg lg:text-xl xl:text-2xl text-[#000] font-[Roboto] font-medium'>Cheap price provider</h1>
                    </div>
                </div>

            </div>
        </div>


        {/* 3rd Section */}
        {/* <div className='md:px-8 lg:px-12 xl:px-20 w-full flex flex-wrap lg:flex-nowrap gap-10'>
            
            <div className='md:w-1/2 lg:w-4/12 order-1'>
                <h1 className='text-[#55833D] font-[Roboto] text-xl font-semibold'>Care Features</h1>
                <h1 className='py-[20px] text-[#000] md:text-3xl lg:text-4xl xl:text-[44px] font-playfair'>Design with Distinction</h1>
                <p className='mb-8 lg:mb-[78px] md:text-lg lg:text-xl font-[Roboto]'>Welcome to Garda. For 25 years, we have brought our signature design aesthetic to public and private gardens throughout New York City. 
                    Our goal is to increase the natural beauty of every landscape.
                </p>
                <button className='md:px-8 md:py-3 lg:py-4 border lg:border-solid lg:border-4 lg:border-b-8 md:bg-[#55833D] lg:border-[#55833D] md:rounded-[8px] lg:rounded-[100px] md:text-[#FFF] lg:text-[#212529] font-[Roboto] font-semibold lg:text-lg' onClick={handleClick}>
                    Contact Us
                </button>

            </div>
            
            <div className='md:w-1/2 lg:w-4/12 flex flex-col order-2'>
                
                <div className='md:mb-[20px] lg:mb-[40px] xl:mb-[90px]'>
                    <div className='p-[14px] bg-[#F6F2FA] w-[60px] rounded-r-[40px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20.1335 2.41309L16.3602 6.18642C15.3335 7.22642 15.3335 8.91975 16.3602 9.95975L18.2402 11.8398L12.1735 17.9064L8.41351 14.1331L6.52018 15.9998C-0.0798185 22.6664 4.66685 27.3331 4.66685 27.3331C4.66685 27.3331 9.33352 31.9998 16.0002 25.4531L17.8802 23.5731L14.1468 19.8398L20.2002 13.7864L22.0535 15.6398C23.0935 16.6664 24.7868 16.6664 25.8268 15.6398L29.6002 11.8664L20.1335 2.41309ZM23.9068 13.7064L22.0668 11.8664L20.1468 9.94642L18.2802 8.07975L20.1602 6.19975L25.8002 11.8398L23.9068 13.7064Z" fill="#55833D"/>
                        </svg>
                    </div>
                    <h1 className='md:py-3 xl:py-5 md:text-2xl lg:text-[28px] font-[Roboto] font-medium'>Variation Gardening</h1>
                    <h1 className='text-[#000] font-[Roboto] md:text-lg lg:text-xl'>Verdant foliage and native plants create a lush look for this landscape.</h1>
                </div>
                
                <div className=''>
                    <div className='p-[14px] bg-[#F6F2FA] w-[60px] rounded-r-[40px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M18.6668 8L13.6668 14.6667L17.4668 19.7333L15.3335 21.3333C13.0802 18.3333 9.3335 13.3333 9.3335 13.3333L1.3335 24H30.6668L18.6668 8Z" fill="#55833D"/>
                        </svg>
                    </div>
                    <h1 className='md:py-3 xl:py-5 md:text-2xl lg:text-[28px] font-[Roboto] font-medium'>Professional Landscaping</h1>
                    <h1 className='text-[#000] font-[Roboto] md:text-lg lg:text-xl'>Professional landscaping requires creativity, a sense of design.</h1>
                </div>
            </div>
            
            <div className='md:w-12/12 lg:w-4/12 order-3'>
                <img src={image_101} alt='image_101' className='lg:h-[500px] xl:h-auto'/>
            </div>
        </div> */}

        {/* 3rd Section */}
        <div className='md:px-8 lg:px-12 xl:px-20 w-full flex flex-col lg:flex-row gap-10'>
            {/* Row: 1st and 2nd Section side by side on md+ */}
            <div className='flex flex-col md:flex-row md:gap-10'>
                {/* 1st Section */}
                <div className='w-full md:w-1/2 order-1'>
                    <h1 className='text-[#55833D] font-[Roboto] text-xl font-semibold'>Care Features</h1>
                    <h1 className='py-[20px] text-[#000] md:text-3xl lg:text-4xl xl:text-[44px] font-playfair'>Design with Distinction</h1>
                    <p className='mb-8 lg:mb-[78px] md:text-lg lg:text-xl font-[Roboto]'>Welcome to Garda. For 25 years, we have brought our signature design aesthetic to public and private gardens throughout New York City. 
                        Our goal is to increase the natural beauty of every landscape.
                    </p>
                    <button className='md:px-8 md:py-3 lg:py-4 border lg:border-solid lg:border-4 lg:border-b-8 md:bg-[#55833D] lg:border-[#55833D] md:rounded-[8px] lg:rounded-[100px] md:text-[#FFF] lg:text-[#212529] font-[Roboto] font-semibold lg:text-lg' onClick={handleClick}>
                        Contact Us
                    </button>       
                </div>
                {/* 2nd Section */}
                <div className='w-full md:w-1/2 order-2'>
                    {/*  */}
                    <div className='md:mb-[20px] lg:mb-[40px] xl:mb-[90px]'>
                        <div className='p-[14px] bg-[#F6F2FA] w-[60px] rounded-r-[40px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M20.1335 2.41309L16.3602 6.18642C15.3335 7.22642 15.3335 8.91975 16.3602 9.95975L18.2402 11.8398L12.1735 17.9064L8.41351 14.1331L6.52018 15.9998C-0.0798185 22.6664 4.66685 27.3331 4.66685 27.3331C4.66685 27.3331 9.33352 31.9998 16.0002 25.4531L17.8802 23.5731L14.1468 19.8398L20.2002 13.7864L22.0535 15.6398C23.0935 16.6664 24.7868 16.6664 25.8268 15.6398L29.6002 11.8664L20.1335 2.41309ZM23.9068 13.7064L22.0668 11.8664L20.1468 9.94642L18.2802 8.07975L20.1602 6.19975L25.8002 11.8398L23.9068 13.7064Z" fill="#55833D"/>
                            </svg>
                        </div>
                        <h1 className='md:py-3 xl:py-5 md:text-2xl lg:text-[28px] font-[Roboto] font-medium'>Variation Gardening</h1>
                        <h1 className='text-[#000] font-[Roboto] md:text-lg lg:text-xl'>Verdant foliage and native plants create a lush look for this landscape.</h1>
                    </div>
                    {/*  */}
                    <div className=''>
                        <div className='p-[14px] bg-[#F6F2FA] w-[60px] rounded-r-[40px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M18.6668 8L13.6668 14.6667L17.4668 19.7333L15.3335 21.3333C13.0802 18.3333 9.3335 13.3333 9.3335 13.3333L1.3335 24H30.6668L18.6668 8Z" fill="#55833D"/>
                            </svg>
                        </div>
                        <h1 className='md:py-3 xl:py-5 md:text-2xl lg:text-[28px] font-[Roboto] font-medium'>Professional Landscaping</h1>
                        <h1 className='text-[#000] font-[Roboto] md:text-lg lg:text-xl'>Professional landscaping requires creativity, a sense of design.</h1>         
                    </div>                 
                </div>
            </div>
            {/* 3rd Section - Full width below on all screens */}
            <div className='w-full order-3'>
                <img src={image_101} alt='image_101' className='w-full md:h-[600px] lg:h-[500px] xl:h-[550px]  object-cover object-center'/>
            </div>
        </div>




    </div>
  )
}

export default GardenMaintance