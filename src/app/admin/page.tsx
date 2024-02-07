import Button from "@/components/Button/Button";
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
    </main>
  );
};

export default Admin;
