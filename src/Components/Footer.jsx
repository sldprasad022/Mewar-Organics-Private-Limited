import React from 'react'
import footer from '../assets/footer.png'
import f1 from '../assets/f1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-10 h-[1250px] md:h-[780px] lg:h-[550px] xl:h-[550px] bg-cover bg-center ' style={{backgroundImage : `url(${footer})`}}>
        
       <section className='grid grid-cols-1 md:grid-cols-2 p-4 md:py-10 md:px-8 gap-10 md:gap-14  lg:flex  lg:justify-between lg:px-[60px] xl:px-[206px] pt-[40px] font-[Roboto]'>
                {/* 1st Section */}
                <div className=' flex flex-col gap-3 md:gap-5 lg:gap-8'>
                    <img src={f1} alt='' className='w-[200px] h-[82px]'/>
                    <h1 className='text-[#FFFFFF] font-medium text-lg'>About Us</h1>
                    <p className='text-[#FFFFFF] text-base'>We Offer a Services Provides <br/>  Full & comprehensive services in <br/> irrigation, landscape, maintenance <br/> and professional tree care.</p>
                    <div className='flex gap-[30px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <rect width="46" height="46" rx="23" fill="white"/>
                            <path d="M33 16.7851C32.2639 17.1197 31.4704 17.3396 30.6482 17.4447C31.4895 16.9381 32.1396 16.135 32.4455 15.1694C31.652 15.6474 30.7725 15.982 29.8451 16.1732C29.0899 15.3511 28.0287 14.873 26.8241 14.873C24.5774 14.873 22.7419 16.7086 22.7419 18.9744C22.7419 19.2994 22.7801 19.6149 22.847 19.9113C19.4436 19.7392 16.413 18.1044 14.3958 15.6283C14.0421 16.2306 13.8413 16.9381 13.8413 17.6838C13.8413 19.1082 14.5583 20.3702 15.6673 21.0872C14.9885 21.0872 14.3576 20.896 13.8031 20.6092C13.8031 20.6092 13.8031 20.6092 13.8031 20.6379C13.8031 22.6264 15.218 24.2899 17.0918 24.6627C16.7476 24.7583 16.3843 24.8061 16.0115 24.8061C15.7533 24.8061 15.4952 24.7774 15.2467 24.7296C15.7629 26.3453 17.2639 27.5499 19.0707 27.5786C17.675 28.6876 15.9063 29.3377 13.9751 29.3377C13.6501 29.3377 13.325 29.3186 13 29.2803C14.8164 30.4467 16.9771 31.1254 19.2906 31.1254C26.8241 31.1254 30.9637 24.873 30.9637 19.4524C30.9637 19.2708 30.9637 19.0987 30.9541 18.917C31.7572 18.3434 32.4455 17.6168 33 16.7851Z" fill="#55833D"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <rect width="46" height="46" rx="23" fill="white"/>
                            <path d="M23 13.0391C17.5 13.0391 13 17.5291 13 23.059C13 28.059 16.66 32.209 21.44 32.959V25.959H18.9V23.059H21.44V20.8491C21.44 18.3391 22.93 16.9591 25.22 16.9591C26.31 16.9591 27.45 17.1491 27.45 17.1491V19.6191H26.19C24.95 19.6191 24.56 20.3891 24.56 21.1791V23.059H27.34L26.89 25.959H24.56V32.959C26.9164 32.5869 29.0622 31.3846 30.6099 29.5691C32.1576 27.7536 33.0053 25.4447 33 23.059C33 17.5291 28.5 13.0391 23 13.0391Z" fill="#55833D"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <rect width="46" height="46" rx="23" fill="white"/>
                            <path d="M18.8 13H27.2C30.4 13 33 15.6 33 18.8V27.2C33 28.7383 32.3889 30.2135 31.3012 31.3012C30.2135 32.3889 28.7383 33 27.2 33H18.8C15.6 33 13 30.4 13 27.2V18.8C13 17.2617 13.6111 15.7865 14.6988 14.6988C15.7865 13.6111 17.2617 13 18.8 13ZM18.6 15C17.6452 15 16.7295 15.3793 16.0544 16.0544C15.3793 16.7295 15 17.6452 15 18.6V27.4C15 29.39 16.61 31 18.6 31H27.4C28.3548 31 29.2705 30.6207 29.9456 29.9456C30.6207 29.2705 31 28.3548 31 27.4V18.6C31 16.61 29.39 15 27.4 15H18.6ZM28.25 16.5C28.5815 16.5 28.8995 16.6317 29.1339 16.8661C29.3683 17.1005 29.5 17.4185 29.5 17.75C29.5 18.0815 29.3683 18.3995 29.1339 18.6339C28.8995 18.8683 28.5815 19 28.25 19C27.9185 19 27.6005 18.8683 27.3661 18.6339C27.1317 18.3995 27 18.0815 27 17.75C27 17.4185 27.1317 17.1005 27.3661 16.8661C27.6005 16.6317 27.9185 16.5 28.25 16.5ZM23 18C24.3261 18 25.5979 18.5268 26.5355 19.4645C27.4732 20.4021 28 21.6739 28 23C28 24.3261 27.4732 25.5979 26.5355 26.5355C25.5979 27.4732 24.3261 28 23 28C21.6739 28 20.4021 27.4732 19.4645 26.5355C18.5268 25.5979 18 24.3261 18 23C18 21.6739 18.5268 20.4021 19.4645 19.4645C20.4021 18.5268 21.6739 18 23 18ZM23 20C22.2044 20 21.4413 20.3161 20.8787 20.8787C20.3161 21.4413 20 22.2044 20 23C20 23.7956 20.3161 24.5587 20.8787 25.1213C21.4413 25.6839 22.2044 26 23 26C23.7956 26 24.5587 25.6839 25.1213 25.1213C25.6839 24.5587 26 23.7956 26 23C26 22.2044 25.6839 21.4413 25.1213 20.8787C24.5587 20.3161 23.7956 20 23 20Z" fill="#55833D"/>
                        </svg>
                    </div>
                </div>
            {/* 2nd Section */}
            <div className='flex flex-col'>
                <h1 className='text-lg text-[#FFF] mb-3 md:mb-10 font-medium'>Quick Link</h1>
                <div className='flex flex-col gap-5'>
                    <Link className='flex gap-[10px]' to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                            <span className='text-[#FFF]'>Home</span>
                    </Link>
                    <Link className='flex gap-[10px]' to='/aboutus'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                        <span className='text-[#FFF]'>About Us</span>
                    </Link>
                    <Link className='flex gap-[10px]' to='/services'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                        <span className='text-[#FFF]'>Services</span>
                    </Link>
                    <Link className='flex gap-[10px]' to='/portfolio'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                        <span className='text-[#FFF]'>Portfolio</span>
                    </Link>
                    <Link className='flex gap-[10px]' to='/contact'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white"/>
                            </svg>
                        <span className='text-[#FFF]'>Contact</span>
                    </Link>
                </div>
            </div>
            {/* 3rd Section */}
            <div className='flex flex-col'>
                <h1 className='text-[#FFF] text-lg mb-3 md:mb-5 lg:mb-10 font-medium'>Contact Info</h1>
                {/*  */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M4.48408 3.75883C4.52272 4.33204 4.61933 4.89237 4.77391 5.42694L4.00103 6.19982C3.73697 5.42694 3.56951 4.60899 3.51155 3.75883H4.48408ZM10.8345 11.5004C11.382 11.655 11.9423 11.7516 12.5091 11.7903V12.7499C11.6589 12.692 10.841 12.5245 10.0616 12.2669L10.8345 11.5004ZM5.10238 2.4707H2.84816C2.49393 2.4707 2.2041 2.76053 2.2041 3.11476C2.2041 9.1625 7.10541 14.0638 13.1531 14.0638C13.5074 14.0638 13.7972 13.774 13.7972 13.4197V11.172C13.7972 10.8177 13.5074 10.5279 13.1531 10.5279C12.3545 10.5279 11.5752 10.3991 10.8538 10.1608C10.7894 10.135 10.7186 10.1286 10.6542 10.1286C10.4867 10.1286 10.3257 10.193 10.1969 10.3154L8.77997 11.7323C6.95727 10.7984 5.46305 9.31063 4.5356 7.48794L5.95254 6.07101C6.13288 5.89067 6.1844 5.63948 6.11355 5.41406C5.87525 4.69271 5.74644 3.91984 5.74644 3.11476C5.74644 2.76053 5.45661 2.4707 5.10238 2.4707Z"
                            fill="white"
                        />
                        </svg>
                    </div>
                    <h1 className="text-white text-base font-medium">+91 99285 89650</h1>
                </div>
                {/*  */}
                <div className="flex items-center gap-[12px] py-[20px]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#55833D"/>
                            <g transform="translate(7,7)" scale="0.75">
                                <path d="M16.875 0.562481C16.875 0.466559 16.8505 0.372231 16.8037 0.288462C16.757 0.204693 16.6896 0.134266 16.608 0.0838741C16.5264 0.0334821 16.4332 0.00479935 16.3374 0.000551828C16.2416 -0.00369569 16.1463 0.0166331 16.0605 0.0596062L7.0605 4.55961C6.96718 4.60637 6.88872 4.67817 6.83388 4.76698C6.77905 4.85579 6.75 4.95811 6.75 5.06248V8.59498L0.38475 10.7167C0.272788 10.754 0.17539 10.8256 0.106341 10.9213C0.0372916 11.017 8.96026e-05 11.132 0 11.25L0 17.4375C0 17.5867 0.0592632 17.7297 0.164752 17.8352C0.270242 17.9407 0.413316 18 0.5625 18H10.6875C10.8367 18 10.9798 17.9407 11.0852 17.8352C11.1907 17.7297 11.25 17.5867 11.25 17.4375V15.75H12.375V17.4375C12.375 17.5867 12.4343 17.7297 12.5398 17.8352C12.6452 17.9407 12.7883 18 12.9375 18H16.3125C16.4617 18 16.6048 17.9407 16.7102 17.8352C16.8157 17.7297 16.875 17.5867 16.875 17.4375V0.562481ZM2.25 12.375H3.375V13.5H2.25V12.375ZM4.5 12.375H5.625V13.5H4.5V12.375ZM3.375 14.625V15.75H2.25V14.625H3.375ZM4.5 14.625H5.625V15.75H4.5V14.625ZM14.625 3.37498V4.49998H13.5V3.37498H14.625ZM9 5.62498H10.125V6.74998H9V5.62498ZM10.125 7.87498V8.99998H9V7.87498H10.125ZM9 10.125H10.125V11.25H9V10.125ZM11.25 10.125H12.375V11.25H11.25V10.125ZM10.125 12.375V13.5H9V12.375H10.125ZM11.25 12.375H12.375V13.5H11.25V12.375ZM14.625 10.125V11.25H13.5V10.125H14.625ZM13.5 12.375H14.625V13.5H13.5V12.375ZM11.25 7.87498H12.375V8.99998H11.25V7.87498ZM14.625 7.87498V8.99998H13.5V7.87498H14.625ZM12.375 5.62498V6.74998H11.25V5.62498H12.375ZM13.5 5.62498H14.625V6.74998H13.5V5.62498Z" fill="white"/>
                            </g>
                    </svg>
                    <h1 className="text-white text-base">Mewar Organics Private Limited</h1>
                </div>
                {/*  */}
                <div className='flex  gap-[12px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#55833D"/>
                            <g transform="translate(8,8) scale(1)">
                                <path d="M8 0C4.66563 0 2 2.66563 2 6C2 7.15312 2.34375 8.04375 2.94062 8.94687L7.36875 15.6656C7.50313 15.8687 7.73438 16 8 16C8.26562 16 8.5 15.8656 8.63125 15.6656L13.0594 8.94687C13.6562 8.04375 14 7.15312 14 6C14 2.66563 11.3344 0 8 0ZM8 9.33125C6.15938 9.33125 4.66563 7.8375 4.66563 5.99375C4.66563 4.15 6.15938 2.65625 8 2.65625C9.84062 2.65625 11.3344 4.15 11.3344 5.99375C11.3344 7.8375 9.84062 9.33125 8 9.33125ZM8 4C6.89375 4 6 4.89375 6 6C6 7.10625 6.89375 8 8 8C9.10625 8 10 7.10625 10 6C10 4.89375 9.10625 4 8 4Z" fill="white"/>
                            </g>
                    </svg>
                    <h1 className='text-white text-base'>
                        Shop No. 1, RRG Number 2850/3, <br/> 
                        Pratap Setu, Chittorgarh <br/>
                        Rajasthan - 312001
                    </h1>
                </div>

            </div>

            {/* 4th Section */}
            <div className=''>
                <h1 className='mb-3 md:mb-5 lg:mb-10 text-lg text-white font-medium'>Solutions</h1>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-white text-base'>Terms</h1>
                    <h1 className='text-white text-base'>Leader Ship</h1>
                    <h1 className='text-white text-base'>Privacy Policy</h1>
                    <h1 className='text-white text-base'>Licenses</h1>
                    <h1 className='text-white text-base'>Tree Planting</h1>
                </div>
            </div>
   
        </section>

        <section className='mt-5 md:mt-5 lg:mt-[70px] font-[Roboto] w-[280px] md:w-auto mx-auto md:mx-0'>
            <h1 className='text-center text-[#fff]'>2025 Mewar Organics Private Limited. All rights reserved</h1>
        </section>
    </div>
  )
}

export default Footer