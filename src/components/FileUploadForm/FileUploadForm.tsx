"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios"; // Import axios

const FileUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [inputKey, setInputKey] = useState(Date.now());
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Use axios for the POST request
      const response = await axios.post("/api/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFile(null);
      setInputKey(Date.now());
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error uploading file");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;
    setFile(fileList[0]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        key={inputKey} // Control the input with the key
        type="file"
        name="file"
        onChange={handleFileChange}
      />
      <input type="submit" value="Upload" />
      {message && <p>{message}</p>}
    </form>
  );
};

export default FileUploadForm;
