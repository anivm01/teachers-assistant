
export type PaperType = "A4" | "LETTER" | undefined;
export type PdfType = "LGFC" | "MDFC" | "SMFC" | undefined

export interface WordListItem {
    file?: File;
    file_name?: string;
    word: string;
    src: string;
}

export interface WordListUpdateContextValue {
    addImagesToList: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addToWordList: (word: string, index: number) => void;
    removeFromList: (index: number) => void;
    changeWordList: (newWordList: WordListItem[]) => void;
}

export interface ConfigValues {
    paperType: PaperType;
    itemHeight: number;
    itemWidth: number;
    title: string;
    pdfType: PdfType;
}

export interface FlashcardsGeneratorProps extends ConfigValues {
    wordList: WordListItem[];
}

export interface PdfPreviewProps {
    rendererProps: FlashcardsGeneratorProps
}

export interface PdfPreviewCheckProps {
    pdfType: PdfType;
}


