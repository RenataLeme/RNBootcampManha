import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ParagraphMasters = styled.Text`
  font-size: 18px;
  line-height: 24px;
  color: #1a2a3b;
  margin-vertical: 12px;
  padding-top: 10px;
`;

type ParagraphProps = {
  children: string;
};

export function Paragraph({ children }: ParagraphProps) {
  return <Text style={styles.paragraphStyle}> {children}</Text>;
}

const styles = StyleSheet.create({
  paragraphStyle: {
    fontSize: 18,
    color: "#c51c8d",
    lineHeight: 24,
    marginVertical: 12,
    marginHorizontal: 20,
  },
});
