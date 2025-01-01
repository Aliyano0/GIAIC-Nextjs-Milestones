"use client";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";


const Footer = ()=>{
  return(
    <footer className="Container w-full pt-[120px] border-t-[1px] border-t-[#ebebeb] bg-white">
      <div className="footerBody w-full xl:w-[1200px] mx-auto px-6">
        <div className="text w-full flex flex-col items-center justify-center gap-4 mb-[60px] text-center">
          <h3 className="heading pacifico text-[34px] leading-[40px] text-center text-black ">Pompeo</h3>
          <p className="para w-full xxs:w-[350px] text-xs text-center libre-franklin font-medium xxs:text-sm leading-6 text-main-gray mb-6 xxs:mb-[10px] ">I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed.</p>
        </div>
        <div className="about w-full flex justify-center flex-col gap-10 md:flex-row md:gap-0 mx-auto text-main-gray">
          <div className="emailCall w-full md:w-[33.333%] px-[10px]">
            <div className="icon w-full flex flex-col items-center justify-center gap-[10px] mb-5 text-[40px] sm:text-5xl">
            <HiOutlineMail />
            <h6 className="iconheading font-semibold text-[13px] leading-[23px] tracking-[1px] text-black">EMAIL</h6>
            </div>
            <p className="iconText libre-franklin font-medium text-sm leading-6 text-center ">pompeopotery@gmail.com
            </p>
          </div>
          <div className="find md:w-[33.333%] px-[10px]">
            <div className="icon w-full flex flex-col items-center justify-center gap-[10px] mb-5 text-[40px] sm:text-5xl">
            <IoLocationOutline /> 
            <h6 className="iconheading font-semibold text-[13px] leading-[23px] tracking-[1px] text-black">FIND</h6>
            </div>
            <p className="findIconText md:w-[70%] lg991:w-[60%] lg:w-[50%] mx-auto libre-franklin font-medium text-sm leading-6 text-center ">Central Park, Manhattan
New York, 1101
            </p>
          </div>
          <div className="emailCall w-full md:w-[33.333%] px-[10px]">
            <div className="icon w-full flex flex-col items-center justify-center gap-[10px] mb-5 text-[40px] sm:text-5xl">
            <BsTelephone />
            <h6 className="iconheading font-semibold text-[13px] leading-[23px] tracking-[1px] text-black">CALL</h6>
            </div>
            <p className="iconText libre-franklin font-medium text-sm leading-6 text-center ">+1 292 345 678
            </p>
          </div>
         
            
        </div>
      </div>
        <div className="info border-t-[1px] border-t-[#ebebeb] mt-20 w-full text-[10px] xxs:text-xs libre-franklin tracking-[1px] pt-[30px] pb-5 bg-white text-black flex justify-center items-center">
          <div className="infoPara flex justify-center items-center gap-1">
            <p>
            Template design by</p>
            
            <strong>Dorian Hoxha - Image License Info</strong>
          </div>
        </div>
    </footer>
  )
}

export default Footer
