import React from "react";
import styles from "./socialLinkCapsule.module.css";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const SocialLinkCapsule = () => {
  return (
    <div className={styles.linksContainer}>
      <Link
        href={"https://www.linkedin.com/in/aliyano0"}
        target="_blank"
        className={styles.socialLinkTag}
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={"mailto:aliyanaqeel97@gmail.com?subject=Hello"}
        target="_blank"
        className={styles.socialLinkTag}
      >
        <CiMail />
      </Link>
      <Link
        href={"https://x.com/Aliyan_o0"}
        target="_blank"
        className={styles.socialLinkTag}
      >
        <FaXTwitter />
      </Link>
      <Link
        href={"https://www.instagram.com/aliyan.o0/"}
        target="_blank"
        className={styles.socialLinkTag}
      >
        <FaInstagram />
      </Link>
      <Link
        href={"https://github.com/Aliyano0"}
        target="_blank"
        className={styles.socialLinkTag}
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default SocialLinkCapsule;
