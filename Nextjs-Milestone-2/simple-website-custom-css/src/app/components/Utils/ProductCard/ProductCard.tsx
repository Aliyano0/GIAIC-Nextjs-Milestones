import styles from "./ProdcutCard.module.css";
import Image, { StaticImageData } from "next/image";


interface ProductCardProps {  
  productImage: StaticImageData;
  productName: string;
  price: string;
  altText: string;
}
const ProductCard = ({productImage, productName, price, altText}:ProductCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.productImage}>
        <Image className={styles.productImage} src={productImage} alt={altText}></Image>
      </div>
      <div className={styles.text}>
        <h3 className={styles.productName}>{productName}</h3>
        <p className={styles.price}>$ {price} USD</p>
      </div>
    </div>
  )
}

export default ProductCard
