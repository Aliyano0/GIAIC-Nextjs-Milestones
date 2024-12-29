import styles from "./RedButton.module.css"
interface RedButtonProps {
  btnText:string;
}
const RedButton = ({btnText}: RedButtonProps) => {
  return (
   <button className={styles.btn}>{btnText}</button>
  )
}

export default RedButton
