import { View, Text } from "react-native";
import { Btn } from "../components/Button";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";

export function NotepadCreate({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  return (
    <View>
      <Btn
        title="Editar Notepad"
        onPress={() => {
          navigation.navigate(screens.NotepadEdit);
        }}
      />
      <Text>NotepadCreate</Text>
    </View>
  );
}
