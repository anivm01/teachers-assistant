"use client";
import { useConfig } from "@/contexts/PdfConfigContext";

const ChoosePdfTitle = ({}) => {
  const { config, updateConfig } = useConfig();

  return (
    <div>
      <label htmlFor="pdf-title">Title:</label>
      <input
        type="text"
        id="pdf-title"
        value={config.title}
        onChange={(e) => {
          updateConfig({ title: e.target.value });
        }}
      />
    </div>
  );
};

export default ChoosePdfTitle;
