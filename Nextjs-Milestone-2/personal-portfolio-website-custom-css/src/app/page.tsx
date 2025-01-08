import styles from "./page.module.css";
import Image from "next/image";
import profilePic from "@/app/images/profilebw.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Hello, I&apos;m</h1>
          <div className={styles.nameContainer}>
            <h1 className={`${styles.heading} ${styles.inlineBlock}`}>
              Aliyan Aqeel
            </h1>
            <p className={styles.skill}>Full-Stack Web Developer.</p>
          </div>
          <p className={styles.aboutPara}>
            I am a skilled full-stack web developer with expertise in crafting
            responsive and dynamic web applications using HTML, CSS, and
            JavaScript. Proficient in modern frameworks like React.js, Next.js,
            and Tailwind CSS, I create seamless user experiences while ensuring
            performance and scalability.{" "}
            <Link className={styles.aboutLink} href="/about">
              More about me.
            </Link>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={profilePic} alt="Aliyan Aqeel" className={styles.image} />
        </div>
      </section>
    </main>
  );
}
