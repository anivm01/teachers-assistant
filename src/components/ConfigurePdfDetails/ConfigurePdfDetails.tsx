import { useConfig } from "@/contexts/PdfConfigContext";
import { ConfigValues, PdfType } from "@/types/wordListTypes";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useState } from "react";
import style from "./ConfigurePdfDetails.module.scss";
import Loader from "../Loader/Loader";
import { useWordList } from "@/contexts/WordListContext";
import SectionHeading from "../Ui/SectionHeading/SectionHeading";
import ChoosePdfTitle from "./ChoosePdfTitle";
import ChoosePaperType from "./ChoosePaperType";
import { calculateDimensions } from "@/lib/calculateDimensions";

interface ConfigurePdfDetailsProps {}

const ConfigurePdfDetails: FC<ConfigurePdfDetailsProps> = ({}) => {
  const [pdfType, setPdfType] = useState<PdfType>("LGFC");
  const [message, setMessage] = useState("");
  const { config, updateConfig } = useConfig();
  const wordList = useWordList();
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const dimensions = calculateDimensions(
      config.paperType as "A4" | "LETTER",
      pdfType
    );
    updateConfig({ ...dimensions });

    // Checks
    if (wordList.length === 0) {
      setMessage("Please add images and words to the word list");
      return;
    }

    if (!config.title.trim()) {
      setMessage("Please give your pdf a title");
      return;
    }

    // Check if additional config values are set (example check)
    if (!config.paperType || !config.itemHeight || !config.itemWidth) {
      setMessage(
        "Make sure to choose the template you want to use and specify the paper type"
      );
      return;
    }

    const path = `/pdf-preview/${pdfType}`;

    router.push(path);
  };
  return (
    <div>
      <SectionHeading text={"Configure the details"} />
      <form onSubmit={handleSubmit}>
        <ChoosePdfTitle />
        <ChoosePaperType />

        <fieldset>
          <legend>PDF Type:</legend>
          <div>
            <label>
              <input
                type="radio"
                name="pdfType"
                value="LGFC"
                checked={pdfType === "LGFC"}
                onChange={(e) => setPdfType(e.target.value as PdfType)}
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
                checked={pdfType === "MDFC"}
                onChange={(e) => setPdfType(e.target.value as PdfType)}
              />
              Medium Flashcards
            </label>
          </div>
        </fieldset>

        {message && <p>{message}</p>}

        <button type="submit">Create PDF</button>
      </form>
    </div>
  );
};

export default ConfigurePdfDetails;
