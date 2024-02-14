import PdfPreview from "@/components/PdfPreview/PdfPreview";
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
    <MainPageContainer>
      <PdfPreview pdfType={pdfType} />
    </MainPageContainer>
  );
};

export default page;
