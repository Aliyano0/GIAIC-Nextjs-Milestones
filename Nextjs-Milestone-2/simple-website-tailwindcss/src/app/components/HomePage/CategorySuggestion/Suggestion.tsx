import styles from "./categorySuggestion.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SuggestionProps {
  image: StaticImageData;
  heading: string;
  para: string;
  second?: boolean;
}

const Suggestion = ({image, heading, para, second= false}:SuggestionProps) => {
  return (
     <div className={second ? "suggestionTwo flex justify-center items-center flex-col gap-5 md:flex-row-reverse md:gap-[60px]" : 
     "suggestionOne flex flex-col gap-5 md:gap-0 md:flex-row mb-10 md:mb-0 items-center justify-center"
     }>
        <div className={second? "productImageTwo w-full flex justify-end md:block md:w-[40%] " : "productImageOne w-full md:w-1/2 flex justify-end md:justify-center xl:block xl:w-[586px] pl-[168px] "
        }>
          {second? 

          <Image width={350} src={image} alt="Black and Golden Vase"/> : <Image width={250} src={image} alt="Orange Vase"/>
          }
        </div>
        <div className="textContainer w-full md:w-1/2 xl:w-[586px] px-[10px] ">
      <h3 className="heading text-2xl leading-[34px] my-5 ">{heading}</h3>
      <p className="para lg:w-[80%] xl:w-[70%] text-sm font-medium leading-6 text-main-gray mb-[30px] libre-franklin">{para}</p>

      <Link href="#" className="linkText text-[15px] leading-6 font-normal hover:underline hover:font-medium ">View Details</Link>
    </div>
      </div>
  )
}

export default Suggestion
