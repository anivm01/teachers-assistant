import Button from "@/components/Ui/Button/Button";
import Images from "@/components/Images/Images";
import Pdfs from "@/components/Pdfs/Pdfs";
import { db } from "@/lib/db";
import Link from "next/link";
import React from "react";

const Admin: React.FC = async () => {
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

  const pdfFiles = await db.file.findMany({
    where: {
      fileType: {
        startsWith: "application/",
      },
    },
    select: {
      url: true,
      fileName: true,
      id: true,
    },
  });

  const products = await db.downloadableProduct.findMany({
    select: {
      title: true,
      description: true,
    },
  });

  return (
    <main>
      <h1>Admin</h1>
      <Button
        variant="filled"
        component="a"
        href="/admin/create-downloadable-product"
      >
        Create Downloadable Product
      </Button>
      <Button variant="filled" component="a" href="/admin/upload-a-file">
        Upload A File{" "}
      </Button>
      <Pdfs files={pdfFiles} />
      <Images images={imageFiles} />
      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <Link
                href={`/downloadables/${encodeURIComponent(product.title)}`}
              >
                <p>{product.title}</p>
              </Link>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Admin;
