"use client";
import styles from "./footer.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";


const Footer = ()=>{
  return(
    <footer className={styles.container}>
      <div className={styles.footerBody}>
        <div className={styles.text}>
          <h3 className={styles.heading}>Pompeo</h3>
          <p className={styles.para}>I have always striven to fix beauty in wood, stone,
glass or pottery, that has been my creed.</p>
        </div>
        <div className={styles.about}>
          <div className={styles.email}>
            <div className={styles.icon}>
            <HiOutlineMail />
            <h6 className={styles.iconHeading}>EMAIL</h6>
            </div>
            <p className={styles.iconText}>pompeopotery@gmail.com
            </p>
          </div>
          <div className={styles.find}>
            <div className={styles.icon}>
            <IoLocationOutline /> 
            <h6 className={styles.iconHeading}>FIND</h6>
            </div>
            <p className={styles.findIconText}>Central Park, Manhattan
New York, 1101
            </p>
          </div>
          <div className={styles.call}>
            <div className={styles.icon}>
            <BsTelephone />
            <h6 className={styles.iconHeading}>CALL</h6>
            </div>
            <p className={styles.iconText}>+1 292 345 678
            </p>
          </div>
         
            
        </div>
      </div>
        <div className={styles.info}>
          <div className={styles.infoPara}>
            <p>
            Template design by</p>
            
            <strong>Dorian Hoxha - Image License Info</strong>
          </div>
        </div>
    </footer>
  )
}

export default Footer
