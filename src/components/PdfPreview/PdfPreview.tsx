"use client";
import { useWordList } from "@/contexts/WordListContext";
import { PDFViewer } from "@react-pdf/renderer";
import { FC } from "react";
import { LargeFlashcards, MediumFlashcards } from "../pdfRenderers";
import { PdfPreviewProps } from "@/types/wordListTypes";
import { useConfig } from "@/contexts/PdfConfigContext";

const PdfPreview: FC<PdfPreviewProps> = ({ pdfType }) => {
  const { config } = useConfig();
  const wordList = useWordList();
  const rendererProps = {
    ...config,
    wordList: wordList,
  };
  return (
    <div>
      {pdfType === "LGFC" && (
        <PDFViewer width="100%" height="500">
          <LargeFlashcards {...rendererProps} />
        </PDFViewer>
      )}
      {pdfType === "MDFC" && (
        <PDFViewer width="100%" height="500">
          <MediumFlashcards {...rendererProps} />
        </PDFViewer>
      )}
    </div>
  );
};

export default PdfPreview;
