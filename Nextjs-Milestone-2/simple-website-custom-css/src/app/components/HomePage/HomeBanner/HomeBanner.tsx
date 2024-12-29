import styles from "./HomeBanner.module.css"
import RedButton from "../../Utils/RedButton/RedButton"

const HomeBanner = () => {
  return (
   <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.textContainer}>

        <p className={styles.companyName}>Pompeo Pottery</p>
        <h1 className={styles.heading}>Ready to start shopping?</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, <span className={styles.highlight}>consectetur adipiscing elit</span>.
          Suspendisse varius enim in eros elementum.
        </p>
        <div className={styles.btnContainer}>
        <RedButton btnText="new collection"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
