"use client";
import { useConfig } from "@/contexts/PdfConfigContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useWordList } from "@/contexts/WordListContext";
import SectionHeading from "../../Ui/SectionHeading/SectionHeading";
import ChoosePdfTitle from "../ChoosePdfTitle/ChoosePdfTitle";
import ChoosePaperType from "../ChoosePaperType/ChoosePaperType";
import ChoosePdfType from "../ChoosePdfType/ChoosePdfType";
import WordList from "../WordList/WordList";
import Button from "../../Ui/Button/Button";
import styles from "./ConfigurePdfDetails.module.scss";
import { ArrowLeft, ArrowRight } from "@/assets/svg";

const ConfigurePdfDetails = ({}) => {
  const [ready, setReady] = useState(false);
  const { config } = useConfig();
  const wordList = useWordList();
  const router = useRouter();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (
      wordList.length > 0 &&
      config.title.trim() &&
      config.paperType &&
      config.itemHeight &&
      config.itemWidth
    ) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [config, wordList]);

  return (
    <div className={styles.entireFlow}>
      <section className={styles.stepContent}>
        <SectionHeading text={"Build Your Custom Worksheet or Flashcard Set"} />
        {step === 1 && (
          <div>
            <p>Please specify the template you want to use</p>
            <ChoosePdfType />
          </div>
        )}
        {step === 2 && (
          <div>
            <p>Please specify the type of paper you want to use</p>
            <ChoosePaperType />
          </div>
        )}
        {step === 3 && (
          <div>
            <p>
              Please add images and words to create a vocabulary list for your
              flashcards or worksheet
            </p>
            <WordList />
          </div>
        )}
        {step === 4 && (
          <div>
            <p>Please give your pdf a title</p>
            <ChoosePdfTitle />
          </div>
        )}
      </section>
      <section className={styles.stepToggle}>
        <div>
          {step > 1 && (
            <button
              className={styles.direction}
              onClick={() => setStep((current) => current - 1)}
            >
              <ArrowLeft className={styles.arrow} />
            </button>
          )}
        </div>
        <Button onClick={() => setStep(1)}>step 1</Button>
        <Button onClick={() => setStep(2)}>step 2</Button>
        <Button onClick={() => setStep(3)}>step 3</Button>
        <Button onClick={() => setStep(4)}>step 4</Button>
        <div>
          {step < 4 && (
            <button
              className={styles.direction}
              onClick={() => setStep((current) => current + 1)}
            >
              <ArrowRight className={styles.arrow} />
            </button>
          )}
        </div>
      </section>
      <section className={styles.stepReady}>
        {ready ? (
          <button
            type="button"
            onClick={() => router.push(`/custom-pdf/${config.pdfType}`)}
          >
            Create PDF
          </button>
        ) : (
          <p>
            When you have filled out all the necessary details you will be able
            to generate a pdf
          </p>
        )}
      </section>
    </div>
  );
};

export default ConfigurePdfDetails;
