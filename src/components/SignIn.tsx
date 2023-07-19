import Link from "next/link"
import logo from "../../public/teachers-assistant-logo.svg";
// import UserAuthForm from "./UserAuthForm"
import Image from "next/image";
import styles from "../styles/SignIn.module.scss"
import GoogleLogin from "./GoogleLogin";

const SignIn = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.greeting}>Log in to Teacher's Assistant</h2>
            </div>
            <GoogleLogin />
            <p>
                New to Teacher's Assistant?{' '}
                <Link href='/sign-up'>
                    Sign Up
                </Link>
            </p>
        </div >
    )
}

export default SignIn