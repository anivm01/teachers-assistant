"use client";
import { signIn } from "next-auth/react";
import React from "react";
import styles from "./ServiceLogin.module.scss";
import Loader from "../Loader/Loader";
import { FacebookIcon, GoogleIcon } from "@/assets/svg";

type ProviderType = "google" | "facebook";

const ServiceLogin: React.FC<{ provider: ProviderType }> = ({ provider }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithService = async () => {
    setIsLoading(true);

    try {
      await signIn(provider);
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
          className={styles.button}
          onClick={loginWithService}
          disabled={isLoading}
        >
          {provider === "google" && <GoogleIcon className={styles.logo} />}
          {provider === "facebook" && <FacebookIcon className={styles.logo} />}
          <span className={styles.text}>
            Log in with <span className={styles.provider}>{provider}</span>
          </span>
        </button>
      )}
    </div>
  );
};

export default ServiceLogin;
