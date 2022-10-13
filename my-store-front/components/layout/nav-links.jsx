import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
  return (
    <div>
      <Link href="https://aniqjaved.github.io/portfolio/">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          About Us
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;
