import { ConfigValues, PaperType, PdfType } from "@/types/wordListTypes";

export const calculateDimensions = (
    paperType: PaperType,
    pdfType: PdfType
): Pick<ConfigValues, "itemHeight" | "itemWidth"> => {

    let itemHeight = 0;
    let itemWidth = 0;

    if (pdfType === "LGFC") {
        itemHeight = paperType === "A4" ? 297 : 279; // Default values in mm
        itemWidth = paperType === "A4" ? 210 : 216;
    }

    if (pdfType === "MDFC") {
        itemHeight = paperType === "A4" ? 148.5 : 139.5;  // item height is half for a medium size
        itemWidth = paperType === "A4" ? 210 : 216;
    }

    return { itemHeight, itemWidth };
};