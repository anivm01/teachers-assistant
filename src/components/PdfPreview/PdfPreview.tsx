"use client";
import { PDFViewer } from "@react-pdf/renderer";
import { FC } from "react";
import { LargeFlashcards, MediumFlashcards } from "../pdfRenderers";
import { PdfPreviewProps } from "@/types/wordListTypes";

const PdfPreview: FC<PdfPreviewProps> = ({ rendererProps }) => {
  return (
    <div>
      {rendererProps.pdfType === "LGFC" && (
        <PDFViewer width="100%" height="500">
          <LargeFlashcards {...rendererProps} />
        </PDFViewer>
      )}
      {rendererProps.pdfType === "MDFC" && (
        <PDFViewer width="100%" height="500">
          <MediumFlashcards {...rendererProps} />
        </PDFViewer>
      )}
    </div>
  );
};

export default PdfPreview;
