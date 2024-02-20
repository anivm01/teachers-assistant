import { useConfig } from "@/contexts/PdfConfigContext";
import { calculateDimensions } from "@/lib/calculateDimensions";
import { PdfType } from "@/types/wordListTypes";

const ChoosePdfType = () => {
  const { config, updateConfig } = useConfig();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pdfType = e.target.value as PdfType;
    updateConfig({ pdfType });

    const dimensions = calculateDimensions(config.paperType, pdfType);

    updateConfig({ ...dimensions });
  };

  const largeFlashcards = config.pdfType === "LGFC";
  const mediumFlashcards = config.pdfType === "MDFC";

  return (
    <div>
      <fieldset>
        <legend>PDF Type:</legend>
        <div>
          <label>
            <input
              type="radio"
              name="pdfType"
              value="LGFC"
              checked={largeFlashcards}
              onChange={handleChange}
            />
            Large Flashcards
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="pdfType"
              value="MDFC"
              checked={mediumFlashcards}
              onChange={handleChange}
            />
            Medium Flashcards
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default ChoosePdfType;
