"use client";
import { signIn } from "next-auth/react";
import React from "react";
import styles from "../styles/GoogleLogin.module.scss";
import google from "../../public/google-logo.svg";
import Image from "next/image";
import Loader from "./Loader";

const FacebookLogin: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithFacebook = async () => {
    setIsLoading(true);

    try {
      await signIn("facebook");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.box}>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <button
          type="button"
          className={styles.google}
          onClick={loginWithFacebook}
          disabled={isLoading}
        >
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
          <span className={styles.text}>Log in with Facebook</span>
        </button>
      )}
    </div>
  );
};

export default FacebookLogin;
