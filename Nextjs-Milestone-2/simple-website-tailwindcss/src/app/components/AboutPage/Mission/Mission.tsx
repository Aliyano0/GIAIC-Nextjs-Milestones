import Image from "next/image";
import VerticalText from "../../Utils/VerticalText/VerticalText";
import goldBlackPot from "@/app/images/CategorySuggestion/blackGoldVase.png";
import orangeCeramic from "@/app/images/CategorySuggestion/orangeVase.png";
import Link from "next/link";

const Mission = () => {
  return (
    <section className="w-full pt-[220px] relative border-t-[1px] bordert-t-[#ebebeb]  ">
      <VerticalText text="This is our mission" left={true}/>
      <div className="Container w-full xl:w-[1200px] mx-auto px-6 text-center ">
        <div className="Row justify-center items-center flex-col w-full pb-[220px] gap-5 xxs:gap-0 flex md:flex-row md:items-start md:justify-between ">
          <div className="Images relative h-[490px] flex justify-center items-center overflow-hidden xxs:overflow-visible xxs:h-[420px] w-[320px] xxs:w-[390px] md:w-1/2 xl:w-[586px] px-[10px] ">
            <Image className="OrangeCeramic w-[300px] h-[357px] relative right-[-45px] top-[50px] xxs:top-[-60px] z-10 object-cover" src={orangeCeramic} alt="Orange Ceramic" />  

            <Image className="GoldBlackPot w-60 h-[488px] relative left-[-115px] top-0 xxs:top-[-65px]  z-30 " src={goldBlackPot} alt="Black and Golden Pot">
            {/* <Image className="OrangeCeramic w-[300px] h-[357px] absolute top-[50px] xxs:top-[-70px] right-[15%] xxs:right-[28%] md:right-[230px] z-10 object-cover" src={orangeCeramic} alt="Orange Ceramic" />  

            <Image className="GoldBlackPot w-60 h-[488px] absolute top-0 left-[35%] xxs:top-[-110px] xxs:left-[30%] md:right-[160px] z-30 " src={goldBlackPot} alt="Black and Golden Pot"> */}
            </Image>   
          </div>
          <div className="Text w-full md:w-1/2 text-left">
            <h3 className="Heading my-5 text-2xl leading-[34px] font-medium ">
              Created With Love <span className="playfair-display text-[68px] leading-[68px] font-normal text-main-red">&</span> Passion
            </h3>
            <p className="Para w-[90%] xxs:w-[80%] md:w-[70%] mb-[30px] libre-franklin text-sm leading-6 text-main-gray ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <Link href={"#"}>View More Pieces</Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Mission
