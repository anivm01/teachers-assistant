"use client";
import Link from "next/link";
import styles from "./MainNav.module.scss";
import { useState } from "react";
import Chevron from "@/assets/svg/Chevron";

const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Library", "Custom", "About"];

  // Toggle the state when the mobile menu button is clicked
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <button
        className={styles.trigger}
        type="button"
        onClick={handleToggle}
        onBlur={() => setIsOpen(false)}
      >
        <span className={styles.trigger_text}>Menu</span>
        <Chevron className={styles.trigger_icon} />
      </button>
      <ul
        className={`
          ${styles.menu_desktop}
          ${isOpen ? styles.menu_mobile : ""}`}
        onClick={() => setIsOpen(false)}
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index} className={styles.item}>
              <Link href="/" className={styles.link}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
