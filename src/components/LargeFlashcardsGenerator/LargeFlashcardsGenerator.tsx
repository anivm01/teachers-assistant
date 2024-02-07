import React from "react";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useWordList } from "@/contexts/WordListContext";
import WordListSamle from "../../data/wordListSample.json";
type PaperType = "A4" | "LETTER";
interface LargeFlashcardsGeneratorProps {
  paperType: PaperType;
  itemHeight: string;
  itemWidth: string;
}
const LargeFlashcardsGenerator = ({
  paperType,
  itemHeight,
  itemWidth,
}: LargeFlashcardsGeneratorProps) => {
  const wordList = useWordList();

  Font.register({
    family: "TeachingPrint",
    src: "/fonts/TeachingPrintRegular.woff",
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
    },
    box: {
      border: "1px solid black",
      color: "black",
      height: itemHeight,
      width: itemWidth,
      margin: "0 auto",
    },
    image: {
      objectFit: "contain",
      height: "50%",
      width: "100%",
      border: "1px solid black",
      padding: "5mm",
    },
    vocabulary: {
      height: "50%",
      width: "100%",
      padding: "5mm",
      border: "1px solid black",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "64px",
      fontFamily: "TeachingPrint",
      transform: "rotate(180deg)",
      textAlign: "center",
    },
  });

  return (
    <Document>
      <Page wrap={true} size={paperType}>
        <View style={styles.page}>
          {wordList.map((single, index) => {
            return (
              <View style={styles.box} key={index}>
                <Image src={single.src} style={styles.image} />
                <View style={styles.vocabulary}>
                  <Text style={styles.text}>{single.word}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default LargeFlashcardsGenerator;
