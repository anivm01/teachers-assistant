import styles from "./Header.module.scss";
import Link from "next/link";
import MainNav from "../MainNav/MainNav";
import { Logo } from "@/assets/svg";
import AuthNav from "../AuthNav/AuthNav";

const Header = () => {
  return (
    <header>
      <div className={styles.main}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Logo className={styles.icon} />
          </Link>
          <h1 className={styles.title}>Teacher's Assistant</h1>
          <AuthNav />
        </div>
      </div>
      <div className={styles.sub}>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
