import ContainerHeadings from "../../Utils/ContainerHeadings/ContainerHeadings";
import ProductCard from "../../Utils/ProductCard/ProductCard";
import RedButton from "../../Utils/RedButton/RedButton";
import VerticalText from "../../Utils/VerticalText/VerticalText";
import styles from "./PotteryCollection.module.css";
import { productData } from "./productData";
import Link from "next/link";

const PotteryCollection = () => {
  return (
    <section className={styles.section}>
      <VerticalText text="Product Collections" />
      <div className={styles.container}>
        <ContainerHeadings
          subtitle="Our online store"
          heading="Pottery Collection"
        />
        <div className={styles.collectionGridContainer}>
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              productImage={product.productImage}
              productName={product.productName}
              price={product.price}
              altText={product.altText}
            />
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Link href="/shop">
            <RedButton btnText="View All Products" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PotteryCollection;
