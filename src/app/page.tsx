import MainPageContainer from "@/components/Ui/MainPageContainer/MainPageContainer";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <MainPageContainer>
      <Link href="/custom-pdf">Create Pdf</Link>
    </MainPageContainer>
  );
};

export default Home;
