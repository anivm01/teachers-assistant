import Button from "@/components/Button/Button";
import Images from "@/components/Images/Images";
import Pdfs from "@/components/Pdfs/Pdfs";
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
      <Pdfs />
      <Images />
    </main>
  );
};

export default Admin;
