import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import logo from "../../public/teachers-assistant-logo.svg";
import MainNav from "../MainNav/MainNav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Logout from "../Logout/Logout";
import { Logo } from "@/assets/svg";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          <Logo className={styles.icon} />
        </Link>
        <h1 className={styles.title}>Teacher's Assistant</h1>
        <MainNav />
        {session?.user ? (
          <Logout />
        ) : (
          <Link href="/sign-in" className={styles.link}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
