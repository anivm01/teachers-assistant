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

const MediumFlashcardsRenderer: React.FC<FlashcardsGeneratorProps> = ({
  paperType,
  itemHeight,
  itemWidth,
  wordList,
  title,
}: FlashcardsGeneratorProps) => {
  console.log(`height: ${itemHeight}`);
  console.log(`width: ${itemWidth}`);
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
      height: `${itemHeight}mm`,
      width: `${itemWidth}mm`,
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
    },
    imageBox: {
      width: "50%",
      padding: "5mm",
      border: "1px solid black",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      objectFit: "contain",
      maxHeight: "70%",
      maxWidth: `${itemHeight}mm`,
      padding: "5mm",
      transform: "rotate(-90deg)",
    },
    vocabulary: {
      width: "50%",
      padding: "5mm",
      border: "1px solid black",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "64px",
      fontFamily: "TeachingPrint",
      transform: "rotate(90deg)",
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
                <View style={styles.imageBox}>
                  <Image src={single.src} style={styles.image} />
                </View>
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

export default MediumFlashcardsRenderer;
