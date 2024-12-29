import styles from "./ContainerHeadings.module.css";

interface ContainerHeadingsProps {
  subtitle: string;
  heading: string;
}

const ContainerHeadings = ({subtitle, heading}:ContainerHeadingsProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>{subtitle}</p>
        <h1 className={styles.heading}>{heading}</h1>
    </div>
  )
}

export default ContainerHeadings
