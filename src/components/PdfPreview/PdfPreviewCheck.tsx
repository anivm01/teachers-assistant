"use client";
import { useWordList } from "@/contexts/WordListContext";
import { FC, useEffect, useState } from "react";
import { PdfPreviewCheckProps } from "@/types/wordListTypes";
import { useConfig } from "@/contexts/PdfConfigContext";
import Link from "next/link";
import PdfPreview from "./PdfPreview";

const PdfPreviewCheck: FC<PdfPreviewCheckProps> = ({ pdfType }) => {
  const [missingInfo, setMissingInfo] = useState(false);
  const { config } = useConfig();
  const wordList = useWordList();

  useEffect(() => {
    const isMissingInfo =
      !config.paperType ||
      !config.itemHeight ||
      !config.itemWidth ||
      !config.title ||
      pdfType !== config.pdfType ||
      wordList.length === 0;
    setMissingInfo(isMissingInfo);
  }, [config, wordList]);

  const rendererProps = {
    ...config,
    wordList: wordList,
  };

  return (
    <div>
      {missingInfo ? (
        <div>
          <p>Info about various templates etc.....</p>
          <p>
            You need to upload content and configure the details for your pdf
          </p>
          <Link href="/">Configure</Link>
        </div>
      ) : (
        <PdfPreview rendererProps={rendererProps} />
      )}
    </div>
  );
};

export default PdfPreviewCheck;
