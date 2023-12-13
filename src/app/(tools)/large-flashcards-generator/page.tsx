import LargeFlashcardsGenerator from "@/components/LargeFlashcardsGenerator/LargeFlashcardsGenerator";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";

const LargeFlashcardsGeneratorPage: React.FC = () => {
  return (
    <main>
      <PDFViewer height="400">
        <LargeFlashcardsGenerator
          paperType="A4"
          itemHeight="297mm"
          itemWidth="210mm"
        />
      </PDFViewer>
    </main>
  );
};

export default LargeFlashcardsGeneratorPage;
