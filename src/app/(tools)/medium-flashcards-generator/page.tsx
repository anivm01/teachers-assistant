"use client";
import LargeFlashcardsGenerator from "@/components/LargeFlashcardsGenerator/LargeFlashcardsGenerator";
import MainPageContainer from "@/components/Ui/MainPageContainer/MainPageContainer";
import WordList from "@/components/WordList/WordList";
import { useWordList } from "@/contexts/WordListContext";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import wordListSample from "../../../data/wordListSample.json";
import MediumFlashcardsGenerator from "@/components/MediumFlashcardsGenerator/MediumFlashcardsGenerator";

const LargeFlashcardsGeneratorPage: React.FC = () => {
  const wordList = useWordList();

  return (
    <MainPageContainer>
      {wordListSample.length > 0 ? (
        <PDFViewer width="800" height="1000">
          <MediumFlashcardsGenerator
            paperType="A4"
            itemHeight="148.5mm"
            itemWidth="210mm"
            wordList={wordListSample}
            title="title"
          />
        </PDFViewer>
      ) : (
        <p>No word list provided</p>
      )}
    </MainPageContainer>
  );
};

export default LargeFlashcardsGeneratorPage;
