"use client";
import PdfPreviewCheck from "@/components/PdfPreview/PdfPreviewCheck";
import MainPageContainer from "@/components/Ui/MainPageContainer/MainPageContainer";
import { PdfType } from "@/types/wordListTypes";
import { FC } from "react";

interface pageProps {
  params: {
    pdfType: PdfType;
  };
}

const page: FC<pageProps> = ({ params }: pageProps) => {
  const { pdfType } = params;
  return (
    // <MainPageContainer>
    <PdfPreviewCheck pdfType={pdfType} />
    // </MainPageContainer>
  );
};

export default page;
