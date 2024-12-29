import playfair from "@/app/components/HomePage/HeroSection/hero.module.css";
import VerticalText from "../VerticalText/VerticalText";
import styles from "./NewsLetter.module.css"
import { SlPaperPlane } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const NewsLetter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.planeIcon}>
          <SlPaperPlane style={{ color: 'white', fontSize: "36px",  }}/>
        </div>
        <p className={styles.subtitle}>
          Latest News
        </p>
        <h1 className={styles.heading}>
          Latest news <span className={playfair.playfair}>&</span> New updates
        </h1>
        <div className={styles.emailInput}>
          <div className={styles.inputContainer}>
            <TfiEmail className={styles.mailIcon}/>
            <input className={styles.input} type="email" placeholder="Enter your email" />
          </div>
          <button className={styles.button}>Subscribe</button>
        </div>
        <div className={styles.newsLetterRadioContainer}>
        <label htmlFor="newsLetterRadio" >
          <input defaultChecked={true} type="checkbox" name="newsLetterRadio" id="newsLetterRadio" className={styles.radiobtn}/>
          Sign up for our newsletter
        </label>
        </div>
      </div>
      <VerticalText text="Let's Get in Touch" right={true} />
    </section>
  )
}

export default NewsLetter
