"use client";
import React, { useState } from "react";
import Button from "../Ui/Button/Button";
import axios from "axios";

const DeleteFile = ({ fileName }: { fileName: string }) => {
  const [message, setMessage] = useState("");
  const handleDelete = async () => {
    if (!fileName) {
      alert("File Name is required.");
      return;
    }
    try {
      const response = await axios.delete(`/api/files/${fileName}`, {
        method: "DELETE",
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error deleting file:", error);
      setMessage("Error deleting file");
    }
  };

  return (
    <>
      <Button
        variant="filled"
        component="button"
        onClick={() => handleDelete()}
      >
        Delete File
      </Button>
      <p>{message}</p>
    </>
  );
};

export default DeleteFile;
