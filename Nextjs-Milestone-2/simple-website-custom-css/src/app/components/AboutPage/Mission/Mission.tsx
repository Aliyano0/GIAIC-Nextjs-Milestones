import Image from "next/image";
import VerticalText from "../../Utils/VerticalText/VerticalText"
import styles from "./mission.module.css";
import playfair from "@/app/components/HomePage/HeroSection/hero.module.css";
import goldBlackPot from "@/app/images/CategorySuggestion/blackGoldVase.png";
import orangeCeramic from "@/app/images/CategorySuggestion/orangeVase.png";
import Link from "next/link";

const Mission = () => {
  return (
    <section className={styles.section}>
      <VerticalText text="This is our mission" left={true}/>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.images}>
            <Image className={styles.orangeCeramic} src={orangeCeramic} alt="Orange Ceramic" />  

            <Image className={styles.goldBlackPot} src={goldBlackPot} alt="Black and Golden Pot">
            </Image>   
          </div>
          <div className={styles.text}>
            <h3 className={styles.heading}>
              Created With Love <span className={playfair.playfair}>&</span> Passion
            </h3>
            <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <Link href={"#"}>View More Pieces</Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Mission
