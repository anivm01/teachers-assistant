import DownloadableProductForm from "@/components/DowloadableProductForm/DownloadableProductForm";
import { db } from "@/lib/db";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const imageFiles = await db.file.findMany({
    where: {
      fileType: {
        startsWith: "image/",
      },
    },
    select: {
      url: true,
      fileName: true,
      id: true,
    },
  });
  return (
    <div>
      <DownloadableProductForm images={imageFiles} />
    </div>
  );
};

export default page;
