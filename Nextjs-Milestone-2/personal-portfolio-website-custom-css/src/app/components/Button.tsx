import styles from "./button.module.css";
interface IButton {
  btnText: string;
}

const Button = ({ btnText }: IButton) => {
  return <button className={styles.btn}>{btnText}</button>;
};

export default Button;
