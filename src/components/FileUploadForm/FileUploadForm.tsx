"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const FileUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [inputKey, setInputKey] = useState(Date.now());

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(await res.text());
      // Handle the successful response here
      console.log(res);
      setFile(null);
      setInputKey(Date.now());
      return;
    } catch (error) {
      console.error(error);
      // Handle errors here
      console.log(error);
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
    </form>
  );
};

export default FileUploadForm;
