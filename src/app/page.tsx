import ImageUpload from "@/components/FileUploadForm/FileUploadForm";
import WordList from "@/components/WordList/WordList";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <main>
      <WordList />
      <Link href="/large-flashcards-generator">Generate Word List</Link>
    </main>
  );
};

export default Home;
