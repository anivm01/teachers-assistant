'use client'
import React, { useContext, useState, createContext, ReactNode } from "react";

interface Upload {
  file?: File;
  file_name?: string;
  word: string;
  src: string;
}

interface WordListUpdateContextValue {
  addImagesToList: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addToWordList: (word: string, index: number) => void;
  removeFromList: (index: number) => void;
  changeWordList: (newWordList: Upload[]) => void;
}

const WordListContext = createContext<Upload[]>([]);
const WordListUpdateContext = createContext<WordListUpdateContextValue | undefined>(undefined);

export const useWordList = (): Upload[] => {
  return useContext(WordListContext);
};

export const useWordListUpdate = (): WordListUpdateContextValue => {
  const context = useContext(WordListUpdateContext);
  if (!context) {
    throw new Error("useWordListUpdate must be used within a WordListProvider");
  }
  return context;
};

interface WordListProviderProps {
  children: ReactNode;
}

export const WordListProvider = ({ children }: WordListProviderProps): JSX.Element => {
  const [wordList, setWordList] = useState<Upload[]>([]);

  const changeWordList = (newWordList: Upload[]) => {
    setWordList(newWordList);
  };

  const addImagesToList = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files || []
    const uploads: Upload[] = [];
    for (let file of Array.from(files)) {
      const upload: Upload = {
        file: file,
        file_name: file.name,
        word: "",
        src: URL.createObjectURL(file),
      };
      uploads.push(upload);
    }
    const update = [...wordList, ...uploads];
    setWordList(update);
  };

  const removeFromList = (index: number) => {
    const words = [...wordList];
    words.splice(index, 1);
    setWordList(words);
  };

  const addToWordList = (word: string, index: number) => {
    setWordList((list) => {
      const updatedList = [...list];
      updatedList[index] = { ...updatedList[index], word };
      return updatedList;
    });
  };

  return (
    <WordListContext.Provider value={wordList}>
      <WordListUpdateContext.Provider
        value={{
          addImagesToList,
          addToWordList,
          removeFromList,
          changeWordList,
        }}
      >
        {children}
      </WordListUpdateContext.Provider>
    </WordListContext.Provider>
  );
};