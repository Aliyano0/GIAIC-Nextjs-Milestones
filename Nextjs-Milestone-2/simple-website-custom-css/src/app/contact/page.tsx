import styles from "./contact.module.css";
import Banner from "../components/Utils/Banner/Banner";
import ContainerHeadings from "../components/Utils/ContainerHeadings/ContainerHeadings";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
  return (
    <div>
      <Banner heading="Contact Us" bgImg="images/ContactBanner/ContactBanner.jpg" contactPage={true}/>
       <section className={styles.section}>
      <ContainerHeadings heading="Lets get in touch" subtitle="Contact Us"/>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h5 className={styles.heading}>PHONE</h5>
            <p className={styles.para}>+1 929 234 5678</p>
          </div>
          <div className={styles.text}>
            <h5 className={styles.heading}>LOcation</h5>
            <p className={styles.para}>2567 Fifth Ave, New York City,
NY 20035, USA</p>
          </div>
          <div className={styles.text}>
            <h5 className={styles.heading}>Email</h5>
            <p className={styles.para}>pompoe@pottery1990.com</p>
          </div>
        </div>
        <div className={styles.bannerImage}>
        </div>
      </div>
       </section>
       <ContactForm/>
    </div>
  ) 
}

export default Contact
