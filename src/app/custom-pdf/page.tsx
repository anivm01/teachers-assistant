import ConfigurePdfDetails from "@/components/CreatePdfFlow/ConfigurePdfDetails/ConfigurePdfDetails";
import MainPageContainer from "@/components/Ui/MainPageContainer/MainPageContainer";
import WordList from "@/components/CreatePdfFlow/WordList/WordList";
import React from "react";

const Home: React.FC = () => {
  return (
    <MainPageContainer>
      <ConfigurePdfDetails />
    </MainPageContainer>
  );
};

export default Home;
