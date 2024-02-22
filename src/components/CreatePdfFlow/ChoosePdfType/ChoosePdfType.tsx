import { useConfig } from "@/contexts/PdfConfigContext";
import { calculateDimensions } from "@/lib/calculateDimensions";
import { PdfType } from "@/types/wordListTypes";
import Image from "next/image";
import { templateTypes } from "@/data/templateTypes";
import styles from "./ChoosePdfType.module.scss";

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
      <fieldset className={styles.fieldset}>
        <div className={styles.templates}>
          {templateTypes.map((single, index) => {
            return (
              <div className={styles.single} key={index}>
                <input
                  type="radio"
                  id={single.type} // Use a unique id for the input
                  name="pdfType"
                  value={single.type}
                  className={styles.hiddenRadio} // Hide the radio button visually but keep it accessible
                  checked={config.pdfType === single.type}
                  onChange={handleChange}
                />
                <label htmlFor={single.type} className={styles.imageLabel}>
                  <div className={styles.imageBox}>
                    <Image
                      className={styles.image}
                      src={single.imgSrc}
                      alt={single.altText}
                      fill
                    />
                  </div>
                  {single.label}
                </label>
              </div>
            );
          })}
          {/* <label>
            <input
              type="radio"
              name="pdfType"
              value="LGFC"
              checked={largeFlashcards}
              onChange={handleChange}
            />
            <Image
              src="/assets/large-flashcards.jpg"
              alt="large flashcards template, image of a pineapple on top, word underneath flipped upside down"
              fill
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
          </label> */}
        </div>
      </fieldset>
    </div>
  );
};

export default ChoosePdfType;
