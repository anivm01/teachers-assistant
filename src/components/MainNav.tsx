"use client";
import Link from "next/link";
import styles from "../styles/MainNav.module.scss";
import hamburger from "../../public/hamburger.svg";
import Image from "next/image";
import { useState } from "react";
import { useWordList } from "../contexts/WordListContext";
import Logout from "./Logout";
import { authOptions, getAuthSession } from "@/lib/auth";
import { User, getServerSession } from "next-auth";



const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wordList = useWordList();

  // Toggle the state when the mobile menu button is clicked
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <button
        className={styles.hamburger_button}
        type="button"
        onClick={handleToggle}
        onBlur={() => setIsOpen(false)}
      >
        <Image src={hamburger} alt="hamburger menu" className={styles.icon} />
      </button>
      <ul
        className={`${styles.menu_desktop}
    ${isOpen ? styles.menu_mobile : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <li>
          {wordList.length > 0 ? (
            <Link href="/edit-list" className={styles.link}>
              Edit Word List
            </Link>
          ) : (
            <Link href="/create-list" className={styles.link}>
              New Word List
            </Link>
          )}
        </li>
        <li>
          <Link href="/" className={styles.link}>
            Library
          </Link>
        </li>
        {/* <li>
          {user ? <Logout /> : <Link href="/sign-in" className={styles.link}>
            Login
          </Link>}

        </li> */}
      </ul>
    </nav>
  );
}

export default MainNav;