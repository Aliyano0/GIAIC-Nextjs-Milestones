import styles from "./contact.module.css";
import Button from "../components/Button";
const page = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.section}>
        <div>
          <h1 className={styles.heading}>CONTACT.</h1>
        </div>
        <div className={styles.formContainer}>
          <form action="#" className={styles.form}>
            <h4 className={styles.formHeading}>Get In Touch:</h4>
            <div className={styles.inputsContainer}>
              <label htmlFor="name" className={styles.labels}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className={styles.inputs}
                />
              </label>
              <label htmlFor="email" className={styles.labels}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className={styles.inputs}
                />
              </label>
              <label htmlFor="message" className={styles.labels}>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  placeholder="Your Message"
                  className={styles.textArea}
                ></textarea>
              </label>
            </div>
            <div className={styles.btnContainer}>
              <Button btnText="submit" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default page;
