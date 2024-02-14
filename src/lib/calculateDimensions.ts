import { ConfigValues, PaperType, PdfType } from "@/types/wordListTypes";

export const calculateDimensions = (
    paperType: PaperType,
    pdfType: PdfType
): Pick<ConfigValues, "itemHeight" | "itemWidth"> => {

    let itemHeight = paperType === "A4" ? "297mm" : "279mm"; // Default values in mm
    let itemWidth = paperType === "A4" ? "210mm" : "216mm";

    if (pdfType === "MDFC") {
        itemHeight = paperType === "A4" ? "148.5mm" : "139.5mm";  // item height is half for a medium size
    }

    return { itemHeight, itemWidth };
};