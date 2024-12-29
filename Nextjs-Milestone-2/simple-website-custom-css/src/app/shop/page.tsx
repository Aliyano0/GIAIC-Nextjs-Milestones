import styles from "./shop.module.css";
import Banner from "../components/Utils/Banner/Banner";
import ContainerHeadings from "../components/Utils/ContainerHeadings/ContainerHeadings";
import ProductCard from "../components/Utils/ProductCard/ProductCard";
import { shopProductsData } from "./shopProductsData";
import NewsLetter from "../components/Utils/NewsLetter/NewsLetter";
import VerticalText from "../components/Utils/VerticalText/VerticalText";

 
const Shop = () => {
  return (
    <section className={styles.shopPage}>
      <Banner
        heading="Shop" 
        bgImg="images/ShopBanner/ShopBanner.jpg" 
        shopPage={true}/>

        <VerticalText text="Product Collections" left={true} />
       <div className={styles.productsContainer}>
         <ContainerHeadings subtitle="Our online store" heading="Ceramic Collection"/>
         <div className={styles.productsGrid}>
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
