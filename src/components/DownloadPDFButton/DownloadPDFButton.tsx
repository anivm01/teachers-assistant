import React, { FC } from "react";
import axios from "axios";

interface DownloadPDFButtonProps {
  fileName: string;
}
const DownloadPDFButton: FC<DownloadPDFButtonProps> = ({ fileName }) => {
  const handleDownload = async () => {
    try {
      // Use axios to fetch the signed URL from your API route
      const response = await axios.get(`/api/files/download/${fileName}`);
      const data = response.data;

      if (data.url) {
        console.log(data);
        // If the API returns a signed URL, redirect the user to that URL
        window.location.href = data.url;
      } else {
        // Handle the case where no URL is returned
        console.error("No URL provided for download.");
      }
    } catch (error) {
      // Handle any errors that occur during the axios operation
      console.error("Failed to fetch the signed URL for download:", error);
    }
  };

  return <button onClick={() => handleDownload()}>Download PDF</button>;
};

export default DownloadPDFButton;
