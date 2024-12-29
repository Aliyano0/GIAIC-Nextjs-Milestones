import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import styles from "./ProfileCard.module.css";
import { FaSquareFacebook, FaSquareXTwitter,FaLinkedin } from "react-icons/fa6";

interface ProfileCardProps {
  image: StaticImageData;
  name: string;
};

const ProfileCard = ({
  image,
  name
}:ProfileCardProps) => {
  return (
    <div className={styles.cardWrapper}>

    <div className={styles.profileCard}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.designation}>Senior Developer</p>
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
      <div className={styles.socialLinks}> 
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook />
          </Link>  
          <Link href="https://twitter.com/"  target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </Link>
          <Link href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>  
      </div>
      </div>
    </div>
  );
};

export default ProfileCard;
