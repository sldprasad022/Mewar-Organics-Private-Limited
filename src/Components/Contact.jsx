import React, { useState } from 'react'
import GRASS from "../assets/hgrass_2.png";
import image_85 from "../assets/image_85.png";
import image_86 from "../assets/image_86.png";
import image_87 from "../assets/image_87.png";
import image_88 from "../assets/image_88.png";

import { easeInOut, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = () => {

  //-------------------------------------------Form Submition------------------------------------

  const[formData,setFormData]=useState({
    name :'',
    email :'',
    mobileNumber :'',
    service :'',
    message :''
  })

  const handleChange = (e)=>{
    const{name,value} = e.target
    setFormData((prev)=>({
      ...prev,
      [name] : value,
    }))
  }

  const handleSubmit = (e)=>{
      e.preventDefault();


    const formValues = new FormData();
    formValues.append("heading", `New Inquiry Alert from ${formData.name}!`);
    formValues.append("name", formData.name);
    formValues.append("email", formData.email);
    formValues.append("mobileNumber", formData.mobileNumber);
     formValues.append("service", formData.service);
    formValues.append("message", formData.message);
    formValues.append("subject", "Contact Form");
    formValues.append("toEmail", "durgaprasad@techpixe.com");

    fetch("https://api.smartaihr.com/api/users/sendingEmail", {
      method: "POST",
      body: formValues,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toast.success('Thank You For Contact Us !!')
        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          service:'',
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


//-------------------------------------------Form Submition------------------------------------

  return (
    <div className='flex flex-col gap-6 md:gap-8 lg:gap-8 xl:gap-14 bg-[#FAF9F6]'>
      {/*  */}
      <div className='h-[380px] md:h-[500px] lg:h-[460px] xl:h-[500px] bg-cover bg-center relative  bg-stone-800 bg-opacity-50' style={{backgroundImage : `url(${image_85})`}}>
          {/*  */}
          <div className="absolute inset-0 bg-stone-800 opacity-50 z-0"></div>
          <section className='relative  flex flex-col gap-[50px] pt-[210px] md:pt-[278px] justify-center items-center'>
              <h1 className='text-[#FFF] text-3xl md:text-4xl  font-semibold font-playfair'>Contact</h1>
              <div className='flex items-center gap-[5px]'>
                <Link className='text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]' to='/'>Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_1050_2207)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.24417 5.24399C5.40045 5.08776 5.61237 5 5.83334 5C6.05431 5 6.26623 5.08776 6.4225 5.24399L10.5892 9.41066C10.7454 9.56693 10.8332 9.77885 10.8332 9.99982C10.8332 10.2208 10.7454 10.4327 10.5892 10.589L6.4225 14.7557C6.26534 14.9075 6.05483 14.9915 5.83634 14.9896C5.61784 14.9877 5.40883 14.9 5.25432 14.7455C5.09982 14.591 5.01218 14.382 5.01028 14.1635C5.00838 13.945 5.09237 13.7345 5.24417 13.5773L8.82167 9.99982L5.24417 6.42232C5.08795 6.26605 5.00018 6.05413 5.00018 5.83316C5.00018 5.61219 5.08795 5.40026 5.24417 5.24399ZM10.2442 5.24399C10.4004 5.08776 10.6124 5 10.8333 5C11.0543 5 11.2662 5.08776 11.4225 5.24399L15.5892 9.41066C15.7454 9.56693 15.8332 9.77885 15.8332 9.99982C15.8332 10.2208 15.7454 10.4327 15.5892 10.589L11.4225 14.7557C11.2653 14.9075 11.0548 14.9915 10.8363 14.9896C10.6178 14.9877 10.4088 14.9 10.2543 14.7455C10.0998 14.591 10.0122 14.382 10.0103 14.1635C10.0084 13.945 10.0924 13.7345 10.2442 13.5773L13.8217 9.99982L10.2442 6.42232C10.0879 6.26605 10.0002 6.05413 10.0002 5.83316C10.0002 5.61219 10.0879 5.40026 10.2442 5.24399Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1050_2207">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
              </svg>
              <h1 className='text-[#FFF] text-xl md:text-2xl font-semibold font-[Roboto]'>Contact</h1>
              </div>
          </section>
        <div className='absolute bottom-[0px] w-full'>
            <img src={GRASS} alt='GRASS' className='w-full'/>
        </div>
      </div>

      {/*  */}
      <div className='relative'>
          <div className='lg:h-[490px] xl:h-[530px] w-[450px] bg-center bg-cover absolute left-[80px]' style={{backgroundImage:`url(${image_86})`}}>
          </div>

          <div className='px-4 md:px-8 lg:px-12 xl:px-20 flex flex-col lg:flex-row w-full'>
              <div className='w-full lg:w-1/2 flex flex-col gap-2 md:gap-3 lg:gap-5'>
                <h1 className='text-xl lg:text-[32px] text-[#55833D] font-semibold font-[Roboto]'>Contact Us</h1>
                <h1 className='text-2xl md:text-4xl xl:text-5xl text-[#000] font-medium font-playfair'>Contact us anytime to get help!</h1>
              </div>
              <p className='w-full lg:w-1/2 text-sm md:text-lg xl:text-xl font-[Roboto] text-[#212529] mt-3 md:mt-5 lg:mt-0' >
                  At Mewar Organics, we are committed to bringing you the finest selection of organic and native plants. 
                  Whether you're looking for medicinal herbs, forest plants, or ornamental greens, we ensure quality, sustainability, and expert guidance. 
                  Have a question? Reach out to us—we're here to help you grow your green space!
              </p>
          </div>




          <div className='mt-[40px] lg:mt-[74px] flex flex-col md:flex-row gap-8 md:gap-15 justify-start  justify-center items-start md:items-center pl-[16px] md:pl-0'>
              <div className='w-[200px] h-[200px] rounded-full bg-[#FFF] flex items-center justify-center' >
                    <motion.img src={image_87} alt="image_87" loading="lazy" className="w-[120px] h-[102px]" animate={{scale: [1,2], rotate: [0,0], borderRadius: ["0%"]}}
                        transition={{duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1}}/>
              </div>

            <div className='flex flex-col gap-4 md:gap-8 lg:gap-13 justify-center items-center'>
                <h1 className='text-2xl md:text-3xl lg:text-[40px] xl:text-[44px]'>+91 99285 89650</h1>
                <button className='bg-[#55833D] font-[Roboto] p-2 md:p-4 lg:px-8 lg:py-4 rounded-3xl w-[186px] text-[#FFF] hover:bg-blue-500 text-base'>
                  Call Us Now
                </button>
            </div>
          </div>
    
      </div>


      {/*  */}
      <div className='px-4 md:px-8 lg:px-12 xl:px-20  lg:grid lg:grid-cols-12 '>
          <div className='lg:col-span-4'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[44px] mb-4 md:mb-6 lg:mb-10 xl:mb-20 font-semibold font-playfair'>Address</h1>
                <div className='flex  gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#55833D"/>
                            <g transform="translate(8,8) scale(1)">
                                <path d="M8 0C4.66563 0 2 2.66563 2 6C2 7.15312 2.34375 8.04375 2.94062 8.94687L7.36875 15.6656C7.50313 15.8687 7.73438 16 8 16C8.26562 16 8.5 15.8656 8.63125 15.6656L13.0594 8.94687C13.6562 8.04375 14 7.15312 14 6C14 2.66563 11.3344 0 8 0ZM8 9.33125C6.15938 9.33125 4.66563 7.8375 4.66563 5.99375C4.66563 4.15 6.15938 2.65625 8 2.65625C9.84062 2.65625 11.3344 4.15 11.3344 5.99375C11.3344 7.8375 9.84062 9.33125 8 9.33125ZM8 4C6.89375 4 6 4.89375 6 6C6 7.10625 6.89375 8 8 8C9.10625 8 10 7.10625 10 6C10 4.89375 9.10625 4 8 4Z" fill="white"/>
                            </g>
                    </svg>
                    <h1 className='text-base font-[Roboto]'>
                        Shop No. 1, RRG Number 2850/3, <br/> 
                        Pratap Setu, Chittorgarh <br/>
                        Rajasthan - 312001
                    </h1>
                </div>

                <div className="flex items-center gap-[12px] py-2 lg:py-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#55833D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M4.48408 3.75883C4.52272 4.33204 4.61933 4.89237 4.77391 5.42694L4.00103 6.19982C3.73697 5.42694 3.56951 4.60899 3.51155 3.75883H4.48408ZM10.8345 11.5004C11.382 11.655 11.9423 11.7516 12.5091 11.7903V12.7499C11.6589 12.692 10.841 12.5245 10.0616 12.2669L10.8345 11.5004ZM5.10238 2.4707H2.84816C2.49393 2.4707 2.2041 2.76053 2.2041 3.11476C2.2041 9.1625 7.10541 14.0638 13.1531 14.0638C13.5074 14.0638 13.7972 13.774 13.7972 13.4197V11.172C13.7972 10.8177 13.5074 10.5279 13.1531 10.5279C12.3545 10.5279 11.5752 10.3991 10.8538 10.1608C10.7894 10.135 10.7186 10.1286 10.6542 10.1286C10.4867 10.1286 10.3257 10.193 10.1969 10.3154L8.77997 11.7323C6.95727 10.7984 5.46305 9.31063 4.5356 7.48794L5.95254 6.07101C6.13288 5.89067 6.1844 5.63948 6.11355 5.41406C5.87525 4.69271 5.74644 3.91984 5.74644 3.11476C5.74644 2.76053 5.45661 2.4707 5.10238 2.4707Z"
                            fill="white"
                        />
                        </svg>
                    </div>
                    <h1 className=" text-base font-[Roboto]">+91 99285 89650</h1>
                </div>

                <div className="flex items-center gap-[12px] py-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#55833D"/>
                            <g transform="translate(7,7)" scale="0.75">
                                <path d="M16.875 0.562481C16.875 0.466559 16.8505 0.372231 16.8037 0.288462C16.757 0.204693 16.6896 0.134266 16.608 0.0838741C16.5264 0.0334821 16.4332 0.00479935 16.3374 0.000551828C16.2416 -0.00369569 16.1463 0.0166331 16.0605 0.0596062L7.0605 4.55961C6.96718 4.60637 6.88872 4.67817 6.83388 4.76698C6.77905 4.85579 6.75 4.95811 6.75 5.06248V8.59498L0.38475 10.7167C0.272788 10.754 0.17539 10.8256 0.106341 10.9213C0.0372916 11.017 8.96026e-05 11.132 0 11.25L0 17.4375C0 17.5867 0.0592632 17.7297 0.164752 17.8352C0.270242 17.9407 0.413316 18 0.5625 18H10.6875C10.8367 18 10.9798 17.9407 11.0852 17.8352C11.1907 17.7297 11.25 17.5867 11.25 17.4375V15.75H12.375V17.4375C12.375 17.5867 12.4343 17.7297 12.5398 17.8352C12.6452 17.9407 12.7883 18 12.9375 18H16.3125C16.4617 18 16.6048 17.9407 16.7102 17.8352C16.8157 17.7297 16.875 17.5867 16.875 17.4375V0.562481ZM2.25 12.375H3.375V13.5H2.25V12.375ZM4.5 12.375H5.625V13.5H4.5V12.375ZM3.375 14.625V15.75H2.25V14.625H3.375ZM4.5 14.625H5.625V15.75H4.5V14.625ZM14.625 3.37498V4.49998H13.5V3.37498H14.625ZM9 5.62498H10.125V6.74998H9V5.62498ZM10.125 7.87498V8.99998H9V7.87498H10.125ZM9 10.125H10.125V11.25H9V10.125ZM11.25 10.125H12.375V11.25H11.25V10.125ZM10.125 12.375V13.5H9V12.375H10.125ZM11.25 12.375H12.375V13.5H11.25V12.375ZM14.625 10.125V11.25H13.5V10.125H14.625ZM13.5 12.375H14.625V13.5H13.5V12.375ZM11.25 7.87498H12.375V8.99998H11.25V7.87498ZM14.625 7.87498V8.99998H13.5V7.87498H14.625ZM12.375 5.62498V6.74998H11.25V5.62498H12.375ZM13.5 5.62498H14.625V6.74998H13.5V5.62498Z" fill="white"/>
                            </g>
                    </svg>
                    <h1 className=" text-base font-[Roboto]">Mewar Organics Private Limited</h1>
                </div>

                
          </div>

          {/* Form */}
          <div className='lg:col-span-8'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[44px] mb-6 md:mb-6 lg:mb-10 xl:mb-20 font-semibold font-playfair'>Get In Touch</h1>
              <form className='grid grid-cols-12 gap-4 md:gap-5' onSubmit={handleSubmit}>
                  <div className='col-span-12 md:col-span-6  flex flex-col gap-1.5 md:gap-2 lg:gap-2'>
                      <input type='text' className='xl:px-[24px] xl:py-[18px]  h-[40px] md:h-[50px] lg:h-[68px] xl:h-[78px] shadow-lg bg-[#F4F2ED]' placeholder='  Your Name'
                      value={formData.name} 
                      onChange={handleChange}
                      name = 'name'
                      required/>
                      <input type='email' className='xl:px-[24px] xl:py-[18px]  h-[40px] md:h-[50px] lg:h-[68px] xl:h-[78px] shadow-lg bg-[#F4F2ED] my-5 md:my-[40px]' placeholder='  Your Email' 
                      value={formData.email}
                      onChange={handleChange}
                      name = 'email'
                      required/>
                      <input type='number' className='xl:px-[24px] xl:py-[18px]  h-[40px] md:h-[50px] lg:h-[68px] xl:h-[78px] shadow-lg bg-[#F4F2ED]' placeholder='  Your Phone'
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      name ='mobileNumber'
                      required/>
                  </div>
                  <div className='col-span-12 md:col-span-6 flex flex-col items-start md:items-center justify-center gap-6 md:gap-12 lg:gap-12 xl:gap-12'>

                  <select name="service" className="xl:px-[24px] xl:py-[18px]  h-[40px] md:h-[51px] lg:h-[68px] xl:h-[78px] shadow-lg bg-[#F4F2ED] w-full "
                  value={formData.service}
                  onChange={handleChange}
                  required
                  >
                        <option value="" disabled className='text-gray-400'>Select a Service</option>
                        <option value="Garden Maintainance">Garden Maintainance</option>
                        <option value="Custom Garden Solutions">Custom Garden Solutions</option>
                        <option value="Plantation and Sales">Plantation and Sales</option>
                        <option value="Miyawaki Forest Development">Miyawaki Forest Development</option>
                        <option value="Planning and Consulting">Planning and Consulting</option>
                        <option value="Educational Workshops & Awareness">Educational Workshops & Awareness</option>
                        <option value="Vatika Crations">Vatika Crations</option>
                  </select>


                    <textarea className='h-[100px] md:h-[140px] lg:h-[184px] xl:h-[150px] w-full px-2.5 md:px-[30px] md:py-[18px] shadow-lg bg-[#F4F2ED]' placeholder='Write Message'
                    name = 'message'
                    type='text'
                    value={formData.message}
                    onChange={handleChange}
                    required/>

                    

                    <button type='submit' className='flex gap-[4px] items-center justify-center md:w-[200px]  lg:w-[183px] xl:w-[220px] bg-[#55833D] rounded-3xl px-8 md:px-[32px] py-3 md:py-[16px] text-[#fff] font-[Roboto]'>
                        Send
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                          <path d="M7.15833 14.3167L10.975 10.5L7.15833 6.675L8.33333 5.5L13.3333 10.5L8.33333 15.5L7.15833 14.3167Z" fill="white"/>
                        </svg>
                    </button>
                  </div>
              </form>
          </div>
      </div>


      {/*  */}
      {/* Note : Go to location -> Click 'Share' Option -> click Embed Map -> select <iframe/>code. */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4491.219737381937!2d74.622967!3d24.88546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUzJzA3LjciTiA3NMKwMzcnMjIuNyJF!5e1!3m2!1sen!2sin!4v1749113514595!5m2!1sen!2sin" 
            className='w-full h-[240px] md:h-[400px] lg:h-[600px]'>
        </iframe>
      </div>


      {/*  */}
      <div className='px-4 md:px-8 lg:px-12 xl:px-20 flex flex-col lg:flex-row w-full gap-5 md:gap-10 lg:gap-[69px]'>
          <div className='w-full lg:w-1/2 flex flex-col '>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-semibold text-[#000] font-playfair text-center'>Thank You</h1>
            <p className='text-sm md:text-lg xl:text-xl font-[Roboto] text-[#212529] my-3 md:my-5 lg:my-5 xl:my-10'>
                We deeply appreciate your time and interest in exploring our
                vision at Mewar Organics. It is our mission to create
                sustainable and beautiful green spaces that inspire peace,
                positivity, and a deeper connection with nature. Together, we
                can redefine landscapes and bring life to every corner of your
                environment.
            </p>
            <p className='text-sm md:text-lg xl:text-xl font-[Roboto] text-[#212529]'>
                We look forward to collaborating with you on a journey toward
                a greener, healthier, and more harmonious future. Let’s build a
                legacy of nature and beauty, one greenscape at a time. Thank
                you for being a part of this vision!
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
              <img src={image_88} alt='image_88' className='w-full md:h-[400px] lg:h-[412px] xl:h-auto'/>
          </div>
      </div>




    </div>
  )
}

export default Contact