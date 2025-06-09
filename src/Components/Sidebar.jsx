import React from 'react'
import image_89 from "../assets/image_89.png";
import image_90 from "../assets/image_90.png";
import { Link } from 'react-router-dom';
import mewarlogo1 from '../assets/mewarlogo1.png'


const Sidebar = ({setSidebarOpen}) => {
  return (
    <div className='w-[280px] lg:w-[294px] xl:w-[380px] px-[30px] py-[20px] flex flex-col gap-[50px] items-start bg-[#FFF]  h-full'>
        {/*  */}
        <button className='hidden lg:block' onClick={()=>setSidebarOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <path d="M27 4.5C39.4425 4.5 49.5 14.5575 49.5 27C49.5 39.4425 39.4425 49.5 27 49.5C14.5575 49.5 4.5 39.4425 4.5 27C4.5 14.5575 14.5575 4.5 27 4.5ZM35.0775 15.75L27 23.8275L18.9225 15.75L15.75 18.9225L23.8275 27L15.75 35.0775L18.9225 38.25L27 30.1725L35.0775 38.25L38.25 35.0775L30.1725 27L38.25 18.9225L35.0775 15.75Z" fill="#55833D"/>
                </svg>
        </button>
        {/*  */}
       <div className='flex flex-col  hidden lg:block'>
            {/* <img src={image_89} alt='image_89' loading="lazy" className='w-[160px] h-[60px] mb-10'/> */}
            <img src={mewarlogo1} alt='image_89' loading="lazy" className='w-[160px] h-[60px] mb-10'/>
            <p className='text-[#000] text-lg font-semibold font-playfair '>
                We take pride in customizing our services to meet the needs and budgets of each individual customer.
            </p>
       </div>
       {/*  */}
        <div className='flex flex-col items-start  justify-center hidden lg:block'>
           <h1 className='mb-[1px] text-[#000] text-[22px] font-playfair font-semibold '>Contact Us</h1> 
           {/* <div className='bg-[#55833D] border border-solid border-2 w-full h-[2px]'></div> */}
           <hr className='bg-[#55833D] w-full h-[2px] mb-[40px]'></hr>
                    {/*  */}
                    <div className="flex items-center gap-[12px]">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#55833D]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M4.48408 3.75883C4.52272 4.33204 4.61933 4.89237 4.77391 5.42694L4.00103 6.19982C3.73697 5.42694 3.56951 4.60899 3.51155 3.75883H4.48408ZM10.8345 11.5004C11.382 11.655 11.9423 11.7516 12.5091 11.7903V12.7499C11.6589 12.692 10.841 12.5245 10.0616 12.2669L10.8345 11.5004ZM5.10238 2.4707H2.84816C2.49393 2.4707 2.2041 2.76053 2.2041 3.11476C2.2041 9.1625 7.10541 14.0638 13.1531 14.0638C13.5074 14.0638 13.7972 13.774 13.7972 13.4197V11.172C13.7972 10.8177 13.5074 10.5279 13.1531 10.5279C12.3545 10.5279 11.5752 10.3991 10.8538 10.1608C10.7894 10.135 10.7186 10.1286 10.6542 10.1286C10.4867 10.1286 10.3257 10.193 10.1969 10.3154L8.77997 11.7323C6.95727 10.7984 5.46305 9.31063 4.5356 7.48794L5.95254 6.07101C6.13288 5.89067 6.1844 5.63948 6.11355 5.41406C5.87525 4.69271 5.74644 3.91984 5.74644 3.11476C5.74644 2.76053 5.45661 2.4707 5.10238 2.4707Z"
                                fill="white"
                            />
                            </svg>
                        </div>
                        <h1 className=" text-lg font-[Roboto] text-[#000]">+91 99285 89650</h1>
                    </div>

                    {/*  */}  {/* Green Circle */} {/* White Phone Icon */}
                    <div className="flex items-center gap-[12px] py-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#55833D"/>
                            <g transform="translate(7,7)" scale="0.75">
                                <path d="M16.875 0.562481C16.875 0.466559 16.8505 0.372231 16.8037 0.288462C16.757 0.204693 16.6896 0.134266 16.608 0.0838741C16.5264 0.0334821 16.4332 0.00479935 16.3374 0.000551828C16.2416 -0.00369569 16.1463 0.0166331 16.0605 0.0596062L7.0605 4.55961C6.96718 4.60637 6.88872 4.67817 6.83388 4.76698C6.77905 4.85579 6.75 4.95811 6.75 5.06248V8.59498L0.38475 10.7167C0.272788 10.754 0.17539 10.8256 0.106341 10.9213C0.0372916 11.017 8.96026e-05 11.132 0 11.25L0 17.4375C0 17.5867 0.0592632 17.7297 0.164752 17.8352C0.270242 17.9407 0.413316 18 0.5625 18H10.6875C10.8367 18 10.9798 17.9407 11.0852 17.8352C11.1907 17.7297 11.25 17.5867 11.25 17.4375V15.75H12.375V17.4375C12.375 17.5867 12.4343 17.7297 12.5398 17.8352C12.6452 17.9407 12.7883 18 12.9375 18H16.3125C16.4617 18 16.6048 17.9407 16.7102 17.8352C16.8157 17.7297 16.875 17.5867 16.875 17.4375V0.562481ZM2.25 12.375H3.375V13.5H2.25V12.375ZM4.5 12.375H5.625V13.5H4.5V12.375ZM3.375 14.625V15.75H2.25V14.625H3.375ZM4.5 14.625H5.625V15.75H4.5V14.625ZM14.625 3.37498V4.49998H13.5V3.37498H14.625ZM9 5.62498H10.125V6.74998H9V5.62498ZM10.125 7.87498V8.99998H9V7.87498H10.125ZM9 10.125H10.125V11.25H9V10.125ZM11.25 10.125H12.375V11.25H11.25V10.125ZM10.125 12.375V13.5H9V12.375H10.125ZM11.25 12.375H12.375V13.5H11.25V12.375ZM14.625 10.125V11.25H13.5V10.125H14.625ZM13.5 12.375H14.625V13.5H13.5V12.375ZM11.25 7.87498H12.375V8.99998H11.25V7.87498ZM14.625 7.87498V8.99998H13.5V7.87498H14.625ZM12.375 5.62498V6.74998H11.25V5.62498H12.375ZM13.5 5.62498H14.625V6.74998H13.5V5.62498Z" fill="white"/>
                            </g>
                    </svg>
                        <h1 className=" text-lg font-[Roboto] text-[#000]">Mewar Organics Private Limited</h1>
                     </div>
                    {/*  */}
                    <div className='flex  gap-[12px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#55833D"/>
                            <g transform="translate(8,8) scale(1)">
                                <path d="M8 0C4.66563 0 2 2.66563 2 6C2 7.15312 2.34375 8.04375 2.94062 8.94687L7.36875 15.6656C7.50313 15.8687 7.73438 16 8 16C8.26562 16 8.5 15.8656 8.63125 15.6656L13.0594 8.94687C13.6562 8.04375 14 7.15312 14 6C14 2.66563 11.3344 0 8 0ZM8 9.33125C6.15938 9.33125 4.66563 7.8375 4.66563 5.99375C4.66563 4.15 6.15938 2.65625 8 2.65625C9.84062 2.65625 11.3344 4.15 11.3344 5.99375C11.3344 7.8375 9.84062 9.33125 8 9.33125ZM8 4C6.89375 4 6 4.89375 6 6C6 7.10625 6.89375 8 8 8C9.10625 8 10 7.10625 10 6C10 4.89375 9.10625 4 8 4Z" fill="white"/>
                            </g>
                    </svg>
                        <h1 className='text-lg font-[Roboto] text-[#000]'>
                            Shop No. 1, RRG Number 2850/3, <br/> 
                            Pratap Setu, Chittorgarh <br/>
                            Rajasthan - 312001
                        </h1>
                    </div>        
            </div>

            {/* Tab Screen */}
            <div className='flex block lg:hidden '>
                {/* <img src={image_89} alt='image_89' loading="lazy" className='w-[160px] h-[50px] md:h-[60px]'/> */}
                <img src={mewarlogo1} alt='mewarlogo1' loading="lazy" className='w-[160px] h-[50px] md:h-[60px]'/>
                {/*  */}
                <button className='flex lg:hidden' onClick={()=>setSidebarOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 54 54" fill="none">
                        <path d="M27 4.5C39.4425 4.5 49.5 14.5575 49.5 27C49.5 39.4425 39.4425 49.5 27 49.5C14.5575 49.5 4.5 39.4425 4.5 27C4.5 14.5575 14.5575 4.5 27 4.5ZM35.0775 15.75L27 23.8275L18.9225 15.75L15.75 18.9225L23.8275 27L15.75 35.0775L18.9225 38.25L27 30.1725L35.0775 38.25L38.25 35.0775L30.1725 27L38.25 18.9225L35.0775 15.75Z" fill="#55833D"/>
                    </svg>
                </button>
            </div>


            <div className='mt-2 md:mt-10 flex flex-col w-full gap-5   block lg:hidden'>
                <Link className='px-5 py-2.5 border border-lime-400 border-b-2' to='/'>
                    <h1 className='font-medium' >Home</h1>
                </Link>
                <Link className='px-5 py-2.5 border border-lime-400  border-b-2 ' to='/aboutus'>
                    <h1 className='font-medium' >About</h1>
                </Link>
                <Link className='px-5 py-2.5 border border-lime-400  border-b-2 ' to='/services'>
                    <h1 className='font-medium' >Services</h1>
                </Link>
                <Link className='px-5 py-2.5 border border-lime-400  border-b-2 ' to='/portfolio'>
                    <h1 className='font-medium' >Portfolio</h1>
                </Link>
                <Link className='px-5 py-2.5 border border-lime-400  border-b-2 '  to='/categeories'>
                    <h1 className='font-medium'>Categories</h1>
                </Link>
                <Link className='px-5 py-2.5 border border-lime-400  border-b-2 ' to='/contact'>
                    <h1 className='font-medium' >Contact</h1>
                </Link>
            </div>


            {/*  */}
            <div className=' h-[290px] w-[320px] relative bg-cover bg-center ' style={{backgroundImage:`url(${image_90})`}}>
                <section className='flex flex-col '>
                    <h1 className='text-[#000] text-[22px] font-playfair font-semibold '>Follow Us on :</h1>
                    <hr className='bg-[#55833D] w-[70%] lg:w-full h-[2px] mb-[20px]'></hr>
                    <div className='flex gap-8 lg:gap-5'>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10C2.38004 10 2.38004 10 2.38004 10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.46004 14.34 5.08004 14.39 4.69004 14.39C4.42004 14.39 4.15004 14.36 3.89004 14.31C4.43004 16 6.00004 17.26 7.89004 17.29C6.43004 18.45 4.58004 19.13 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="#55833D"/>
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2.04004C6.5 2.04004 2 6.53004 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85004C10.44 7.34004 11.93 5.96004 14.22 5.96004C15.31 5.96004 16.45 6.15004 16.45 6.15004V8.62004H15.19C13.95 8.62004 13.56 9.39004 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3856 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53004 17.5 2.04004 12 2.04004Z" fill="#55833D"/>
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">    
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="#55833D"/>
                            </svg>
                        </a>    
                    </div>
                </section>
            </div>

    </div>
  )
}

export default Sidebar