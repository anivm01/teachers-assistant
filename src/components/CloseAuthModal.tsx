"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "../styles/CloseAuthModal.module.scss";

interface CloseAuthModalProps {
  children: React.ReactNode;
}

const CloseAuthModal: FC<CloseAuthModalProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.background} onClick={() => router.back()}>
      <div className={styles.container}>
        <button
          className={styles.exit}
          type="button"
          onClick={() => router.back()}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default CloseAuthModal;
