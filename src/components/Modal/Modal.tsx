import React, { ReactNode, FC } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
