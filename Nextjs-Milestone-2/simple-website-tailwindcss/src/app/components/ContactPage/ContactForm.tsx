import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePencil } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
const ContactForm = () => {
  return ( 
    <div className="Container flex justify-center items-center py-[60px]">
      <form action="#" className="form w-full flex justify-center items-center flex-col">
        <h2 className="heading">Drop Us a Line</h2>

        <div className="formGroup w-full md:w-[768px] lg:w-auto my-10 py-[15px] px-[15px] xs:py-0 xs:px-[30px] ">

          <div className="inputGroup w-full flex md:justify-center items-center gap-[6px] mb-4 flex-wrap ">
          <label htmlFor="name" className="label w-[70%] md:w-[49%] lg:w-auto">
            Name:
          <div className="inputContainer w-full lg:w-[310px] relative ">

            <LuUserRound className="icon absolute z-20 left-3 top-1/2 translate-y-[-50%] text-[#6c6c6c4d]  "/>

            <input className="Input py-2 pl-10 pr-3 text-[13px] leading-[23px] font-medium text-main-gray libre-franklin border-[1px] border-[#6c6c6c33] w-full relative placeholder:text-[#6c6c6c4d] " type="name" id='name' placeholder="Enter your email" />
          </div>
          </label>
          <label htmlFor="email" className="label w-[70%] md:w-[49%] lg:w-auto">
            Email Adress:
           <div className="inputContainer w-full lg:w-[310px] relative ">
            <TfiEmail className="icon absolute z-20 left-3 top-1/2 translate-y-[-50%] text-[#6c6c6c4d]  "/>
            <input className="Input py-2 pl-10 pr-3 text-[13px] leading-[23px] font-medium text-main-gray libre-franklin border-[1px] border-[#6c6c6c33] w-full relative placeholder:text-[#6c6c6c4d] " type="email" id='email' placeholder="Enter your email" />
          </div>
          </label>
          </div>
          <label htmlFor="message" className="textAreaLabel w-[70%] md:w-full ">
             Message:
              <div className="textAreaContainer w-full relative ">
                <HiOutlinePencil className="textAreaIcon text-xl absolute xs:text-[22px] sm:text-2xl z-20 left-[3px] xs:left-[9px] sm:left-3 top-5 translate-y-[-50%] text-[#6c6c6c4d] "/>
            <textarea rows={8} cols={12} id="message" className="textArea w-full pl-5 xs:pl-[30px] py-2 sm:pl-10 pr-3 text-[15px] text-main-gray libre-franklin leading-6 font-medium border-[1px] border-[#6c6c6c33] relative "></textarea> 
          </div>
          
          </label>
          <button type="submit" className="btn bg-main-red text-center tracking-[1px] uppercase border-black text-white mx-0 py-3 px-6 xs:px-[30px] sm:py-[15px] sm:px-10 text-[10px] sm:text-xs font-normal leading-[30px] block cursor-pointer mt-6 ">SEND MESSAGE </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
