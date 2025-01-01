"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { PiShoppingCart } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navLinksData = [
  {
    id: 1,
    name: "HOME",
    path: "/"
  },
  {
    id: 2,
    name: "ABOUT",
   path: "/about"
  },
  {
    id:3,
    name: "SHOP",
    path: "/shop"
  },
  {
    id: 4,
    name: "CONTACT",
    path: "/contact"
  },
] 

const Navbar = () => {
  const pathName = usePathname();
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav(!showNav);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
        <Link href={"/"}>
        <h3>Pompeo</h3>
        </Link>
        </div>
      <div className={styles.navBtns}>
        <ul className={styles.navLinks}>
          {navLinksData.map((elem)=>{
            return(
              <li key={elem.id}  className={styles.navLi}>
                <Link className={pathName === elem.path ? styles.active : ""} href={elem.path}>{elem.name}</Link> </li>
            )
          })}
        </ul>
        <div className={styles.cart}>
          <PiShoppingCart className={styles.cartIcon}/>
          Cart
        </div>
        <div onClick={handleClick} className={styles.hamburger}>
          <GiHamburgerMenu />
        </div>
        <div className={`${showNav ? styles.showNav : styles.hideNav} ${styles.mobileNav}`}>
            <div className={styles.mobileNavHeader}>
            <div className={styles.closeBtnContainer}>
            <div onClick={handleClick} className={styles.closeBtn}>
              &times;
            </div>
            </div>
            <ul className={styles.mobileNavLinks}>
            {navLinksData.map((elem)=>{
              return(
                <li key={elem.id}  className={styles.mobileNavLi}>
                  <Link onClick={handleClick} className={pathName === elem.path ? styles.mainRedText : ""} href={elem.path}>{elem.name}</Link> </li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Navbar
