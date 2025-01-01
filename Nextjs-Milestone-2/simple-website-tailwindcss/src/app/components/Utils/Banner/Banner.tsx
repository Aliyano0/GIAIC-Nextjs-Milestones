interface BannerProps {
  heading: string;
  bgImg: string;
  shopPage?: boolean;
  contactPage?: boolean;
  aboutUsPage?: boolean;
}

const Banner = ({ heading, bgImg, shopPage = false, contactPage = false, aboutUsPage = false }: BannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, #f8f6f4 30%, transparent), url("${bgImg}")`,
        backgroundPosition: `
          ${contactPage ? "0 0, 0 0" : ""} 
          ${shopPage ? "0 0, 50% 62%" : ""} 
          ${aboutUsPage ? "0 0, 50% 67%" : ""}`,
      }}
      className="Banner relative bg-no-repeat bg-[length:auto,cover] py-20 px-2 lg:px-0 md:py-[110px] xl:py-[120px] font-medium"
    >
      <div className="Content pl-[15px] pr-[24px] relative z-10 mx-auto max-w-full xl:max-w-[1200px] lg:px-6">
        <div className="TextContainer block lg:max-w-[50%] md:max-w-[65%] max-w-full">
          <h1 className="Heading mt-0 text-[30px] font-medium leading-[42px] lg:mt-5 mb-[10px] xs:text-[44px] xs:leading-[54px] ">
            {heading}
          </h1>
          <p className="Description w-full xs:w-[70%] md:w-full lg:w-[90%]  font-['Libre_Franklin'] text-[14px] font-medium leading-[24px] text-main-gray">
            The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
