import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>CalcettoApp</a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/matches">
            <a>Partite</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profilo</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
