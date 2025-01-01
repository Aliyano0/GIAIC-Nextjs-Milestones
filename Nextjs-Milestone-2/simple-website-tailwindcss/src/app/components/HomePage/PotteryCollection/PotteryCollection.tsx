import ContainerHeadings from "../../Utils/ContainerHeadings/ContainerHeadings";
import ProductCard from "../../Utils/ProductCard/ProductCard";
import RedButton from "../../Utils/RedButton/RedButton";
import VerticalText from "../../Utils/VerticalText/VerticalText";
import {productData }from "./productData";

const PotteryCollection = () => {
  return (
    <section className="section w-full py-[120px] relative border-t-[1px] border-t-[#ebebeb] ">
      <VerticalText text="Product Collections" />
      <div className="container w-full xl:w-[1200px] mx-auto px-6 text-center ">
        <ContainerHeadings subtitle="Our online store" heading="Pottery Collection"/>
        <div className="collectionGrid grid-cols-[auto] justify-center items-center 
        md:items-start md:justify-normal md:grid-cols-[auto_auto] 
        lg822:grid-cols-[370px_370px] lg822:justify-center lg822:items-center 
        lg:justify-normal lg:items-start grid lg:grid-cols-3 gap-5">
          {
            productData.map((product) => (
              <ProductCard 
                key={product.id}
                productImage={product.productImage}
                productName={product.productName}
                price={product.price}
                altText={product.altText}
              />))
          }
        </div>
        <div className="btnContainer mt-10">
          <RedButton btnText="View All Products" />
        </div>
      </div>
      
    </section>
  )
}

export default PotteryCollection
