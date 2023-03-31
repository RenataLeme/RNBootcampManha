import { View, Text } from "react-native";
import { Btn } from "../components/Button";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";

export function NotepadEdit({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const id = route.params.id;
  return (
    <View>
      <text>{id}</text>
      <Text>NotepadEdit</Text>
    </View>
  );
}
