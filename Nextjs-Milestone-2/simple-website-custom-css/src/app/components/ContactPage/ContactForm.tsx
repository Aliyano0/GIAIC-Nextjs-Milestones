import styles from './ContactForm.module.css'
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePencil } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
const ContactForm = () => {
  return ( 
    <div className={styles.container}>
      <form action="#" className={styles.form}>
        <h2 className={styles.heading}>Drop Us a Line</h2>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          <div className={styles.inputContainer}>
            <LuUserRound className={styles.icon}/>
            <input className={styles.input} type="name" id='name' placeholder="Enter your email" />
          </div>
          </label>
          <label htmlFor="email" className={styles.label}>
            Email Adress:
           <div className={styles.inputContainer}>
            <TfiEmail className={styles.icon}/>
            <input className={styles.input} type="email" id='email' placeholder="Enter your email" />
          </div>
          </label>
          </div>
          <label htmlFor="message" className={styles.textAreaLabel}>
             Message:
              <div className={styles.textAreaContainer}>
                <HiOutlinePencil className={styles.textAreaIcon}/>
            <textarea rows={8} cols={12} id="message" className={styles.textArea}></textarea> 
          </div>
          
          </label>
          <button type="submit" className={styles.button}>SEND MESSAGE </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
