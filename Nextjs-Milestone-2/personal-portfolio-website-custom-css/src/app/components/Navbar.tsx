"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SocialLinkCapsule from "./SocialLinkCapsule";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 4, name: "Contact", href: "/contact" },
  // { id: 3, name: "Projects", href: "/projects" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} role="navigation">
        <div className={styles.logo}>
          <Link href={"/"}>
            My Portfolio<span className={styles.logoFullStop}>.</span>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` ${styles.navLi} ${
                pathName === link.href ? styles.activeLink : " "
              }`}
            >
              <Link className={styles.linkTag} href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinkCapsule />
    </header>
  );
};

export default Navbar;
