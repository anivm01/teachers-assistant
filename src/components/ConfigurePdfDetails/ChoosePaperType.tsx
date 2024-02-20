import { useConfig } from "@/contexts/PdfConfigContext";
import { calculateDimensions } from "@/lib/calculateDimensions";
import { PaperType } from "@/types/wordListTypes";

const ChoosePaperType = () => {
  const { config, updateConfig } = useConfig();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const paperType = e.target.value as PaperType;
    updateConfig({ paperType });

    const dimensions = calculateDimensions(paperType, config.pdfType);

    updateConfig({ ...dimensions });
  };

  const isA4Checked = config.paperType === "A4";
  const isLetterChecked = config.paperType === "LETTER";

  return (
    <div>
      <fieldset>
        <legend>Paper Type:</legend>

        <input
          type="radio"
          name="paperType"
          value="A4"
          id="paper-type-a4"
          checked={isA4Checked}
          onChange={handleChange}
        />
        <label htmlFor="paper-type-a4">A4</label>

        <input
          type="radio"
          name="paperType"
          value="LETTER"
          id="paper-type-letter"
          checked={isLetterChecked}
          onChange={handleChange}
        />
        <label htmlFor="paper-type-letter">Letter</label>
      </fieldset>
    </div>
  );
};

export default ChoosePaperType;
