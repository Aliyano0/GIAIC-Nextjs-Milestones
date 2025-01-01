"use client";
import Image from "next/image";
import heroImage from "@/app/images/heroSection/hero-bg-img.png"
import RedButton from "../../Utils/RedButton/RedButton";
const Hero = () => {
  return (
    <section className="section ml-[-10px] w-full mt-[60px] lg:mt-0 mb-20 xl:mt-20 xl:mb-[120px] overflow-x-hidden ">
      <div className="heroContainer flex-col justify-start lg:justify-normal h-auto lg:flex-row w-full xl:w-[1200px] lg:h-[500px] mx-auto flex items-center relative px-6 ">
      <div className="herotextcontainer w-full xs:w-[95%] sm:w-[80%] lg822:w-[60%]  lg:w-[42%] xl:w-[45%] mt-6">
      <div className="HeroText">
        <h5 className="companyName text-sm leading-6 text-[#d77474] font-normal tracking-[2px] mb-2 ">POMPEO POTTERY</h5>
        <h2 className="heading text-4xl xs:text-[48px] lg:text-[40px] xl:text-5xl xl:leading-[58px] font-medium mb-2 ">Unique Porcelain <span className="playfair-display text-[68px] leading-[68px] font-normal text-main-red">&</span> Stone Collection</h2>
        <p className="para libre-franklin leading-[26px] w-[80%] lg:w-auto text-sm xs:text-base text-main-gray">Unique & modern pottery made by our master in porcelain & stones</p>
      </div>
        <div className="btnContainer mt-[50px]">
          <RedButton btnText="SHOP COLLECTION"/>
        </div>
      </div>
      <div className="lg:w-auto lg:static lg:block lg:mt-0 w-full relative flex justify-center items-center mt-10">
        <Image className="image w-full lg822:w-[80%] lg:w-[58%] h-auto lg:top-[20%] lg:right-0 xl:w-[800px] xl:h-[450px] static lg:absolute z-[-1] xl:top-[10%] xl:right-[-110px]" src={heroImage} alt="Vase Image" objectFit="cover"></Image>
      </div>
      </div>
    </section>
  )
}

export default Hero
