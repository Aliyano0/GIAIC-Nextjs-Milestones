import VerticalText from "../VerticalText/VerticalText";
import { SlPaperPlane } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const NewsLetter = () => {
  return (
    <section className="w-full xs:my-[120px] relative">
      <div className="xl:w-[1200px] mx-auto px-6 max-w-full text-center">
        <div className="w-20 h-20 rounded-full bg-[#EBB96A] flex justify-center items-center mx-auto mb-10">
          <SlPaperPlane className="text-white text-4xl"/>
        </div>
        <p className="text-sm leading-6 font-normal tracking-[2px] uppercase text-subtitle">
          Latest News
        </p>
        <h1 className="xs:text-[40px] text-black font-medium xs:leading-[50px] mt-5 mb-[50px] text-3xl leading-[40px]">
          Latest news <span className="playfair-display text-[68px] leading-[68px] font-normal text-main-red">&</span> New updates
        </h1>
        <div className="xs:flex-row flex-col flex justify-center items-center mx-auto gap-3">
          <div className="w-full xs:w-[300px] relative">
            <TfiEmail className="absolute z-30 left-3 top-[50%] text-xl translate-y-[-50%] text-input-icon "/>
            <input className="py-2 pl-10 pr-3 text-[13px] text-main-gray font-[var-(--font-libre-franklin)] leading-[23px] font-medium border-[1px] border-input-border w-full relative placeholder:text-input-icon" type="email" placeholder="Enter your email" />
          </div>
          <button className="w-full py-[9px] xs:w-auto xs:py-[10px] px-[35px] cursor-pointer tracking-[1px] text-xs text-[var(--font-libre-franklin)] text-white uppercase bg-black transition-all duration-[0.4s] hover:bg-main-red ">Subscribe</button>
        </div>
        <div className="text-sm leading-5 tracking-[1px] text-main-gray mt-10 mb-7 font-normal">
        <label htmlFor="newsLetterRadio" className="cursor-pointer" >
          <input defaultChecked={true} type="checkbox" name="newsLetterRadio" id="newsLetterRadio" className="mt-[1px] mr-1"/>
          Sign up for our newsletter
        </label>
        </div>
      </div>
      <VerticalText text="Let's Get in Touch" right={true} />
    </section>
  )
}

export default NewsLetter
