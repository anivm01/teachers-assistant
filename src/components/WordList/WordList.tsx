"use client";

import Image from "next/image";
import style from "./WordList.module.scss";
import { useWordList, useWordListUpdate } from "@/contexts/WordListContext";
import Button from "../Button/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function WordList() {
  const wordList = useWordList();
  const updateWordList = useWordListUpdate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section>
      <Button
        variant="filled"
        component="button"
        onClick={() => setModalOpen(true)}
      >
        Word List
      </Button>
      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <div className={style.container}>
          <label className={style.button}>
            {wordList.length > 0 ? "Add More Images" : "Add Images"}
            <input
              className={style.img_input}
              type="file"
              name="image"
              onChange={(e) => updateWordList.addImagesToList(e)}
              accept="image/png, image/jpg, image/gif, image/jpeg"
              multiple
            />
          </label>
          <div className={style.gallery}>
            {wordList.map((single, index) => {
              return (
                <form key={index} className={style.preview}>
                  <button
                    className={style.remove}
                    type="button"
                    onClick={() => updateWordList.removeFromList(index)}
                  >
                    Remove
                  </button>
                  <div className={style.image_box}>
                    <Image
                      className={style.image}
                      src={single.src}
                      alt={`upload number ${index + 1}`}
                      fill
                    />
                  </div>
                  <input
                    className={style.word}
                    type="text"
                    value={wordList[index].word || ""}
                    onChange={(e) =>
                      updateWordList.addToWordList(e.target.value, index)
                    }
                  />
                </form>
              );
            })}
          </div>
        </div>
      </Modal>
    </section>
  );
}
