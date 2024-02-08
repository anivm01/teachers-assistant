"use client";
import { FC, useEffect, useState } from "react";
import DeleteFile from "../DeleteFile/DeleteFile";
import axios from "axios";
import Link from "next/link";

interface ImageFile {
  url: string;
  fileName: string;
}

interface PdfsProps {
  // Define any props you might need, if necessary
}

const Pdfs: FC<PdfsProps> = ({}) => {
  const [pdfs, setPdfs] = useState<ImageFile[]>([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get("/api/files/pdfs"); // Adjust the endpoint as necessary

        const data = await response.data;
        if (data.success && data.data) {
          setPdfs(data.data);
        } else {
          console.error("Failed to load Pdfs:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch Pdfs:", error);
      }
    };

    fetchPdfs();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>Pdfs</h2>
      <div>
        {pdfs.map((pdf, index) => (
          <div key={index}>
            <Link target="_blank" href={pdf.url}>
              {pdf.fileName}
            </Link>
            <DeleteFile fileName={pdf.fileName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pdfs;
