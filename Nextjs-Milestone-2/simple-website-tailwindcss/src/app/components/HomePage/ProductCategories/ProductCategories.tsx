import VerticalText from "../../Utils/VerticalText/VerticalText";
import CategoryCircle from "./Utils/CategoryCircle";
import {categoryIcons } from './Utils/categoryIcons';
 
const ProductCategories = () => {
  const {vaseIcon, bowlIcon, plateIcon} = categoryIcons;
  return (
    <section className="section w-full py-[120px] px-5 flex relative ">  
      <VerticalText text="Hand Craft Pottery" left={true}/>
      <div className="categories z-10 relative w-full xl:w-[1200px] text-center mx-auto px-6 block">
        <div className="headings flex flex-col w-full justify-center items-center gap-5">
          <h5 className="categoriesHeading text-sm leading-6 font-normal text-subtitle tracking-[2px] text-center uppercase ">Product Categories</h5>
          <h2 className="categoryHeading text-[40px] leading-[50px] font-medium ">Porcelain <span className="playfair-display text-[68px] leading-[68px] font-normal text-main-red">&</span> Pottery</h2>
        </div>
        <div className="Circles gap-10 flex-col lg991:flex-row mt-[60px] mb-10 w-full flex justify-center items-center lg991:gap-0 lg991:justify-between lg:justify-around xl:justify-center xl:gap-[70px]">
          <CategoryCircle bgColor="#e4b366" categoryName="Vases" categoryIcon={vaseIcon}/>
          <CategoryCircle bgColor="#f05b10" categoryName="Mugs" categoryIcon={bowlIcon}/>
          <CategoryCircle bgColor="#a21010" categoryName="Plates" categoryIcon={plateIcon}/>
        </div>
        <div className="about gap-10 md:gap-0 justify-center flex-col md:flex-row w-full xl:w-[1200px] mx-auto flex md:justify-between items-center px-[16px] mt-20 mb-5 ">
          <div className="aboutOne w-full md:w-[43%] flex flex-col text-start gap-4 ">
            <h3 className="aboutHeading w-full lg:w-[80%] xl:w-[62%] text-3xl font-normal ">Hand Crafted Pottery since 1990</h3>
            <p className="aboutText libre-franklin text-sm leading-6 font-medium text-main-gray ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
          <div className="aboutTwo w-full md:w-[43%] flex flex-col text-start gap-4 ">
            <h3 className="aboutHeading w-[62%] text-3xl font-normal ">We Provide Premium Pottery Produts</h3>
            <p className="aboutText libre-franklin text-sm leading-6 font-medium text-main-gray ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default ProductCategories;