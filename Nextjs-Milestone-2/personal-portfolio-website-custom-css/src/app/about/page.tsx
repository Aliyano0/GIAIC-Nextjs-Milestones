import styles from "./about.module.css";
import Image from "next/image";
import prommgramingImg from "../../../public/ProgrammingImage/programmingRed.png";
import Button from "../components/Button";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <div className={styles.headingsContainer}>
            <h1 className={`${styles.headings} ${styles.headingOne}`}>ABOUT</h1>
            <div className={styles.headingTwoContainer}>
              <h1 className={styles.headings}>ME.</h1>
              <Image
                loading="eager"
                src={prommgramingImg}
                alt="Programming screen"
                className={styles.headingImg}
              />
            </div>
          </div>
          <div className={styles.paraContainer}>
            <p className={styles.para}>
              I am a skilled full-stack web developer with expertise in crafting
              responsive and dynamic web applications using HTML, CSS, and
              JavaScript. <br /> Proficient in modern frameworks like React.js,
              Next.js, and Tailwind CSS, I specialize in creating seamless and
              intuitive user experiences. <br /> My focus lies in building
              efficient, scalable, and high-performing web applications tailored
              to meet client needs. <br /> With a passion for clean code and
              modern design, I bring ideas to life with precision and
              creativity.
            </p>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link href={"/projects"}>
            <Button btnText="Projects" />
          </Link>
        </div>
      </section>
    </main>
  );
}
