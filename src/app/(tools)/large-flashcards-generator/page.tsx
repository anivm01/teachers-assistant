"use client";
// import LargeFlashcardsGenerator from "@/components/LargeFlashcardsGenerator/LargeFlashcardsGenerator";
import MainPageContainer from "@/components/Ui/MainPageContainer/MainPageContainer";
import WordList from "@/components/CreatePdfFlow/WordList/WordList";
import { LargeFlashcards } from "@/components/pdfRenderers";
import { useWordList } from "@/contexts/WordListContext";
import { FlashcardsGeneratorProps } from "@/types/wordListTypes";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";

const LargeFlashcardsGeneratorPage: React.FC = () => {
  const wordList = useWordList();

  const rendererProps: FlashcardsGeneratorProps = {
    paperType: "A4",
    itemHeight: "297",
    itemWidth: "210",
    wordList: wordList,
    title: "title",
  };

  return (
    <MainPageContainer>
      {wordList.length > 0 ? (
        <PDFViewer width="100%" height="500">
          <LargeFlashcards {...rendererProps} />
        </PDFViewer>
      ) : (
        <p>No word list provided</p>
      )}
    </MainPageContainer>
  );
};

export default LargeFlashcardsGeneratorPage;
