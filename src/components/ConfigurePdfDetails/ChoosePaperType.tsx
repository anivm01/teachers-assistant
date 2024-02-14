import { useConfig } from "@/contexts/PdfConfigContext";

const ChoosePaperType = () => {
  const { config, updateConfig } = useConfig();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig({ paperType: e.target.value as "A4" | "LETTER" });
  };

  return (
    <div>
      <fieldset>
        <legend>Paper Type:</legend>
        <label>
          <input
            type="radio"
            name="paperType"
            value="A4"
            checked={config.paperType === "A4"}
            onChange={handleChange}
          />
          A4
        </label>
        <label>
          <input
            type="radio"
            name="paperType"
            value="Letter"
            checked={config.paperType === "LETTER"}
            onChange={handleChange}
          />
          Letter
        </label>
      </fieldset>
    </div>
  );
};

export default ChoosePaperType;
