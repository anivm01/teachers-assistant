"use client";
import Image from "next/image";
import style from "./WordList.module.scss";
import { useWordList, useWordListUpdate } from "@/contexts/WordListContext";
import { RemoveIcon } from "@/assets/svg";
import SectionHeading from "../Ui/SectionHeading/SectionHeading";

export default function WordList() {
  const wordList = useWordList();
  const updateWordList = useWordListUpdate();

  return (
    <section>
      <SectionHeading text={"Word List"} />
      <p>Create a word list by uploading your own words and images</p>
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
              <div key={index} className={style.single}>
                <button
                  aria-label="remove image from list"
                  className={style.remove}
                  type="button"
                  onClick={() => updateWordList.removeFromList(index)}
                >
                  <RemoveIcon />
                </button>
                <div className={style.preview}>
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
                    aria-label="word input"
                    value={wordList[index].word || ""}
                    onChange={(e) =>
                      updateWordList.addToWordList(e.target.value, index)
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
