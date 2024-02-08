import Button from "@/components/Button/Button";
import DeleteFile from "@/components/DeleteFile/DeleteFile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Admin: React.FC = () => {
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

      <img
        alt="test"
        src={
          "https://ta-bucket-01.nyc3.cdn.digitaloceanspaces.com/uploads/eb469482-5b65-4c8b-b105-d1c5d95417f7-animals-set-01-koala.png"
        }
      />
      <DeleteFile fileName="224e0040-496e-4af4-a86a-24d53296bb9e-animals-set-01-caterpillar.png" />
    </main>
  );
};

export default Admin;
