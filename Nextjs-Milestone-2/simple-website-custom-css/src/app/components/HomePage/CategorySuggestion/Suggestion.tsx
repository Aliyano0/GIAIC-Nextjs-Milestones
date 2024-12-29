import styles from "./categorySuggestion.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SuggestionProps {
  image: StaticImageData;
  heading: string;
  para: string;
  second?: boolean;
}

const Suggestion = ({image, heading, para, second= false}:SuggestionProps) => {
  return (
     <div className={second ? styles.suggestionTwo : styles.suggestionOne}>
        <div className={second? styles.productImageTwo : styles.productImageOne
        }>
          {second? 

          <Image width={350} src={image} alt="Black and Golden Vase"/> : <Image width={250} src={image} alt="Orange Vase"/>
          }
        </div>
        <div className={styles.textContainer}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.para}>{para}</p>

      <Link href="#" className={styles.linkText}>View Details</Link>
    </div>
      </div>
  )
}

export default Suggestion
