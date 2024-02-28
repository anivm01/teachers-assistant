"use client";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { FC } from "react";
import {
  GameCards,
  LargeFlashcards,
  MediumFlashcards,
  SmallFlashcards,
} from "../pdfRenderers";
import { PdfPreviewProps } from "@/types/wordListTypes";
import styles from "./PdfPreview.module.scss";

const PdfPreview: FC<PdfPreviewProps> = ({
  RenderComponent,
  rendererProps,
}) => {
  return (
    <div className={styles.container}>
      <>
        <PDFDownloadLink
          fileName={rendererProps.title}
          document={<RenderComponent {...rendererProps} />}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer className={styles.viewer}>
          <RenderComponent {...rendererProps} />
        </PDFViewer>
      </>
    </div>
  );
};

export default PdfPreview;
