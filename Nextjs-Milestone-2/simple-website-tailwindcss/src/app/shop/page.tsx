import Banner from "../components/Utils/Banner/Banner";
import ContainerHeadings from "../components/Utils/ContainerHeadings/ContainerHeadings";
import ProductCard from "../components/Utils/ProductCard/ProductCard";
import { shopProductsData } from "./shopProductsData";
import NewsLetter from "../components/Utils/NewsLetter/NewsLetter";
import VerticalText from "../components/Utils/VerticalText/VerticalText";

 
const Shop = () => {
  return (
    <section className="w-full relative">
      <Banner
        heading="Shop" 
        bgImg="images/ShopBanner/ShopBanner.jpg" 
        shopPage={true}/>

        <VerticalText text="Product Collections" left={true} />
       <div className="productsGridContainer w-full xl:w-[1200px] mt-[120px] mb-60 mx-auto px-6 text-center ">
         <ContainerHeadings subtitle="Our online store" heading="Ceramic Collection"/>
         <div className="ProductsGrid grid-cols-[auto] justify-center items-center 
        md:items-start md:justify-normal md:grid-cols-[auto_auto] 
        lg822:grid-cols-[370px_370px] lg822:justify-center lg822:items-center 
        lg:justify-normal lg:items-start grid lg:grid-cols-3 gap-5">
          {shopProductsData.map((product) => (
            <ProductCard 
              key={product.id}
              productImage={product.productImage}
              productName={product.productName}
              price={product.price}
              altText={product.altText}
            />)
          )}
         </div>
      </div> 
      <NewsLetter />
    </section>
  )
}

export default Shop
