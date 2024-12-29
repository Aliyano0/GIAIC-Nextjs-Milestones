import VerticalText from "../../Utils/VerticalText/VerticalText";
import styles from "./categories.module.css";
import playFair from "@/app/components/HomePage/HeroSection/hero.module.css"
import CategoryCircle from "./Utils/CategoryCircle";
import {categoryIcons } from './Utils/categoryIcons';

const ProductCategories = () => {
  const {vaseIcon, bowlIcon, plateIcon} = categoryIcons;
  return (
    <section className={styles.section}>  
      <VerticalText text="Hand Craft Pottery" left={true}/>
      <div className={styles.categories}>
        <div className={styles.headings}>
          <h5 className={styles.categoriesHeading}>Product Categories</h5>
          <h2 className={styles.categoryHeading}>Porcelain <span className={playFair.playfair}>&</span> Pottery</h2>
        </div>
        <div className={styles.categoryCircles}>
          <CategoryCircle bgColor="#e4b366" categoryName="Vases" categoryIcon={vaseIcon}/>
          <CategoryCircle bgColor="#f05b10" categoryName="Mugs" categoryIcon={bowlIcon}/>
          <CategoryCircle bgColor="#a21010" categoryName="Plates" categoryIcon={plateIcon}/>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutOne}>
            <h3 className={styles.aboutHeading}>Hand Crafted Pottery since 1990</h3>
            <p className={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
          <div className={styles.aboutTwo}>
            <h3 className={styles.aboutHeading}>We Provide Premium Pottery Produts</h3>
            <p className={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default ProductCategories;