import DownloadableProductForm from "@/components/DowloadableProductForm/DownloadableProductForm";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <DownloadableProductForm />
    </div>
  );
};

export default page;
