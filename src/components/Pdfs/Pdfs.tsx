"use client";
import { FC } from "react";
import DeleteFile from "../DeleteFile/DeleteFile";
import Link from "next/link";
import DownloadPDFButton from "../DownloadPDFButton/DownloadPDFButton";

interface pdfFile {
  url: string;
  fileName: string;
  id: string;
}

interface PdfsProps {
  files: pdfFile[];
}

const Pdfs: FC<PdfsProps> = ({ files }) => {
  return (
    <div>
      <h2>Pdfs</h2>
      <div>
        {files.map((pdf, index) => (
          <div key={index}>
            <Link target="_blank" href={pdf.url}>
              {pdf.fileName}
            </Link>
            <DeleteFile fileName={pdf.fileName} />
            <DownloadPDFButton fileName={pdf.fileName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pdfs;
