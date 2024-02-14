"use client";
import ConfigurePdfDetails from "@/components/ConfigurePdfDetails/ConfigurePdfDetails";
import ImageUpload from "@/components/FileUploadForm/FileUploadForm";
import MainPageContainer from "@/components/Ui/MainPageContainer/MainPageContainer";
import WordList from "@/components/WordList/WordList";
import { useConfig } from "@/contexts/PdfConfigContext";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  const { config } = useConfig();

  return (
    <MainPageContainer>
      <WordList />
      <ConfigurePdfDetails />
    </MainPageContainer>
  );
};

export default Home;
