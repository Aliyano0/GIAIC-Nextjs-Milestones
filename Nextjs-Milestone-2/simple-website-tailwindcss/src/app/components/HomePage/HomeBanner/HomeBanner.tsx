import RedButton from "../../Utils/RedButton/RedButton"

const HomeBanner = () => {
  const bgImg = "images/HomeBanner/homeBanner.jpeg"
  return (
   <div 
   style={{"backgroundImage": `linear-gradient(to right, rgba(255, 255, 255, .89) 13%, rgba(255, 255, 255, 0) 57%), url("${bgImg}")`,
    "backgroundPosition": "0 0, 50% 33%",
    "backgroundRepeat": "repeat, no-repeat",
    "backgroundSize": "auto, cover"}}
   className="homeBanner border-t-[1px] border-t-[#ebebeb] py-[120px] font-medium relative ml-[-10px]">

      <div className="content relative w-full xl:w-[1200px] mx-auto px-6 block z-10">
        <div className="textContainer w-[90%] sm:w-[80%] md:w-[65%] lg:w-1/2">

        <p className="companyName uppercase text-sm leading-6 text-[#d77474] tracking-[2px] mb-[10px] font-normal ">Pompeo Pottery</p>
        <h1 className="heading text-4xl leading-[46px] mb-[10px] ">Ready to start shopping?</h1>
        <p className="description xl:w-[80%] libre-franklin text-base font-medium leading-6 text-main-gray ">
          Lorem ipsum dolor sit amet, <span className="highlight text-[#b0413e] font-semibold underline">consectetur adipiscing elit</span>.
          Suspendisse varius enim in eros elementum.
        </p>
        <div className="btnContainer mt-[30px]">
        <RedButton btnText="new collection"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
