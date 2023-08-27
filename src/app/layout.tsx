import { WordListProvider } from "@/contexts/WordListContext";
import "../styles/globals.scss";
import { Lilita_One } from "next/font/google";
import Header from "@/components/Header/Header";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "Teachers's Assistant",
  description:
    "A tool for teachers and parents to create printable worksheets and flashcards.",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lilita.className}>
        <WordListProvider>
          <Header />
          {authModal}
          {children}
          {/* <Footer /> */}
        </WordListProvider>
      </body>
    </html>
  );
}
