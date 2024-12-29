import ContainerHeadings from "../../Utils/ContainerHeadings/ContainerHeadings"
import styles from "./artists.module.css"
import ProfileCard from "./utils/ProfileCard"
import maria from "@/app/images/Artists/maria.jpeg"
import dominic from "@/app/images/Artists/dominic.jpg"
import eduard from "@/app/images/Artists/eduard.jpg"
import VerticalText from "../../Utils/VerticalText/VerticalText"
const Artists = () => {
  return (
    <section className={styles.section}>
      <VerticalText text="Our Talented Crew" right={true}/>
      <div className={styles.container}>
        <ContainerHeadings subtitle="Our Crew" heading="Talented Artist"/>
        <div className={styles.artistCards}>
          <ProfileCard name="Maria Monroy" image={maria} 
          />
          <ProfileCard name="Dominic Basket" image={dominic} 
          />
          <ProfileCard name="Eduard Fisher" image={eduard} 
          />
        </div>
      </div>
    </section>
  )
}

export default Artists
