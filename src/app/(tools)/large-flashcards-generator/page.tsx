"use client";
import LargeFlashcardsGenerator from "@/components/LargeFlashcardsGenerator/LargeFlashcardsGenerator";
import WordList from "@/components/WordList/WordList";
import { useWordList } from "@/contexts/WordListContext";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";

const LargeFlashcardsGeneratorPage: React.FC = () => {
  const wordList = useWordList();

  return (
    <main>
      {wordList.length > 0 && (
        <PDFViewer height="400">
          <LargeFlashcardsGenerator
            paperType="A4"
            itemHeight="297mm"
            itemWidth="210mm"
          />
        </PDFViewer>
      )}
    </main>
  );
};

export default LargeFlashcardsGeneratorPage;
