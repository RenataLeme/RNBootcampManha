import { Text, StyleSheet } from "react-native";

type ParagrphProps = {
  children: string;
};

export function Paragraph({ children }: ParagrphProps) {
  return <Text style={styles.paragraphStyle}> {children}</Text>;
}

const styles = StyleSheet.create({
  paragraphStyle: {
    fontSize: 18,
    color: "#34495e",
    lineHeight: 24,
    marginVertical: 8,
  },
});
