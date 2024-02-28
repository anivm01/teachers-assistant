"use client";
import { useWordList } from "@/contexts/WordListContext";
import { FC, useEffect, useState } from "react";
import { PdfPreviewCheckProps } from "@/types/wordListTypes";
import { useConfig } from "@/contexts/PdfConfigContext";
import Link from "next/link";
import PdfPreview from "./PdfPreview";
import {
  GameCards,
  LargeFlashcards,
  MediumFlashcards,
  SmallFlashcards,
} from "../pdfRenderers";

const componentMap = {
  LGFC: LargeFlashcards,
  MDFC: MediumFlashcards,
  SMFC: SmallFlashcards,
  GC: GameCards,
};

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

  if (!rendererProps.pdfType || missingInfo) {
    return (
      <div>
        <p>Info about various templates etc.....</p>
        <p>You need to upload content and configure the details for your pdf</p>
        <Link href="/custom-pdf">Configure</Link>
      </div>
    );
  }

  const RenderComponent =
    rendererProps.pdfType && componentMap[rendererProps.pdfType];

  return (
    <div>
      <PdfPreview
        RenderComponent={RenderComponent}
        rendererProps={rendererProps}
      />
    </div>
  );
};

export default PdfPreviewCheck;
