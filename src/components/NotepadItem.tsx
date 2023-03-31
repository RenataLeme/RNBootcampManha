import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import type { Notepad } from "../types";

export type NotepadItemProps = {
  onPress: () => void;
  notepad: Notepad;
};

const ItemTouchable = styled.TouchableOpacity`
  padding-vertical: 18px;
  padding-horizontal: 9px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`;

const ItemDate = styled.Text`
  font-size: 10px;
  color: #333;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ItemSubtitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export function NotepadItem({
  onPress,
  notepad: { title, subtitle, created_at },
}: NotepadItemProps) {
  return (
    <ItemTouchable onPress={onPress}>
      <ItemDate>{new Date(created_at).toLocaleDateString()}</ItemDate>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{subtitle}</ItemSubtitle>
    </ItemTouchable>
  );
}
