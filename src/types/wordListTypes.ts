
export type PaperType = "A4" | "LETTER";
export type PdfType = "LGFC" | "MDFC" | "SMFC"

export interface WordListItem {
    file?: File;
    file_name?: string;
    word: string;
    src: string;
}

export interface FlashcardsGeneratorProps {
    paperType: PaperType;
    itemHeight: string;
    itemWidth: string;
    title: string;
    wordList: WordListItem[];
}

export interface PdfPreviewProps {
    pdfType: PdfType;
}

export interface WordListUpdateContextValue {
    addImagesToList: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addToWordList: (word: string, index: number) => void;
    removeFromList: (index: number) => void;
    changeWordList: (newWordList: WordListItem[]) => void;
}

export interface ConfigValues {
    paperType: PaperType;
    itemHeight: string;
    itemWidth: string;
    title: string;
}
