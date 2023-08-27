"use server";
import Link from "next/link";
import styles from "./SignIn.module.scss";
import SignInForm from "../SignInForm/SignInForm";
import ServiceLogin from "../ServiceLogin/ServiceLogin";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.greeting}>Log in to Teacher's Assistant</h2>
      </div>
      <ServiceLogin provider="google" />
      <ServiceLogin provider="facebook" />
      <SignInForm />
      <p>
        New to Teacher's Assistant? <Link href="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
