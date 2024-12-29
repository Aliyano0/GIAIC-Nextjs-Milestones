"use client";
import Image from "next/image";
import styles from "./hero.module.css";
import heroImage from "@/app/images/heroSection/hero-bg-img.png"
import RedButton from "../../Utils/RedButton/RedButton";
const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heroContainer}>
      <div className={styles.heroTextContainer}>
      <div className={styles.heroText}>
        <h5 className={styles.companyName}>POMPEO POTTERY</h5>
        <h2 className={styles.heading}>Unique Porcelain <span className={styles.playfair}>&</span> Stone Collection</h2>
        <p className={styles.para}>Unique & modern pottery made by our master in porcelain & stones</p>
      </div>
        <div className={styles.btnContainer}>
          <RedButton btnText="SHOP COLLECTION"/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={heroImage} alt="Vase Image" objectFit="cover"></Image>
      </div>
      </div>
    </section>
  )
}

export default Hero
