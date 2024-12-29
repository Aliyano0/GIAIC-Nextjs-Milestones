import styles from "./Banner.module.css";
interface BannerProps {
  heading: string;
  bgImg: string;
  shopPage?: boolean;
  contactPage?: boolean;
  aboutUsPage?: boolean;
}

const Banner = ({heading, bgImg, shopPage = false, contactPage =false, aboutUsPage= false}: BannerProps) => {
  return (
     <div style={{
        backgroundImage: `linear-gradient(to right, #f8f6f4 30%, transparent), url("${bgImg}")`,
        backgroundPosition: ` 
          ${contactPage ? "0 0, 0 0": ""} 
          ${shopPage ? "0 0, 50% 62%": ""} 
          ${aboutUsPage? "0 0, 50% 67%": ""} 
        `,
         backgroundRepeat: "repeat, no-repeat",
         backgroundSize: "auto, cover",
        fontWeight: "500",
        position: "relative",
      }}
     className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.description}>
            The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.
          </p>  
        </div>
      </div>
    </div>
  )
}

export default Banner
