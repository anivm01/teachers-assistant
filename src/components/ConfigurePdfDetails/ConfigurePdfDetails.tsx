"use client";
import { useConfig } from "@/contexts/PdfConfigContext";
import { ConfigValues, PdfType } from "@/types/wordListTypes";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import style from "./ConfigurePdfDetails.module.scss";
import Loader from "../Loader/Loader";
import { useWordList } from "@/contexts/WordListContext";
import SectionHeading from "../Ui/SectionHeading/SectionHeading";
import ChoosePdfTitle from "./ChoosePdfTitle";
import ChoosePaperType from "./ChoosePaperType";
import ChoosePdfType from "./ChoosePdfType";

const ConfigurePdfDetails = ({}) => {
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const { config } = useConfig();
  const wordList = useWordList();
  const router = useRouter();

  useEffect(() => {
    if (wordList.length === 0) {
      setMessage("Please add images and words to the word list");
      return;
    }

    if (!config.title.trim()) {
      setMessage("Please give your pdf a title");
      return;
    }

    if (!config.paperType) {
      setMessage("Make sure to specify the type of paper you want to use");
      return;
    }

    if (!config.itemHeight || !config.itemWidth) {
      setMessage("Make sure to specify the template you want to use");
      return;
    }
    setReady(true);
  }, [config, wordList]);

  return (
    <div>
      <SectionHeading text={"Configure the details"} />
      <ChoosePdfTitle />
      <ChoosePaperType />
      <ChoosePdfType />

      {message && <p>{message}</p>}
      {ready && (
        <button
          type="button"
          onClick={() => router.push(`/custom-pdf/${config.pdfType}`)}
        >
          Create PDF
        </button>
      )}
    </div>
  );
};

export default ConfigurePdfDetails;
