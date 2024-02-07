import FileUploadForm from "@/components/FileUploadForm/FileUploadForm";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <FileUploadForm />
    </div>
  );
};

export default page;
