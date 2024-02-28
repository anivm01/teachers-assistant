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
import { FlashcardsGeneratorProps } from "@/types/wordListTypes";

const GameCardsRenderer: React.FC<FlashcardsGeneratorProps> = ({
  paperType,
  itemHeight,
  itemWidth,
  wordList,
  title,
}) => {
  Font.register({
    family: "TeachingPrint",
    src: "/fonts/TeachingPrintRegular.woff",
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    box: {
      border: "1px solid black",
      color: "black",
      height: itemHeight + "mm",
      width: itemWidth + "mm",
      margin: "0",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      objectFit: "contain",
      height: "80%",
      width: "100%",
      padding: "5mm",
    },
    text: {
      fontSize: "16px",
      fontFamily: "TeachingPrint",
      textAlign: "center",
    },
  });

  return (
    <Document creator="Teacher's Assistant" title={title}>
      <Page wrap={true} size={paperType}>
        <View style={styles.page}>
          {wordList.map((single, index) => {
            return (
              <View style={styles.box} key={index}>
                <Image src={single.src} style={styles.image} />
                <Text style={styles.text}>{single.word}</Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default GameCardsRenderer;
