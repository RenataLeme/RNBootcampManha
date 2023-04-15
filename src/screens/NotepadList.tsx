import { useEffect, useState } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NotepadItem } from "../components/NotepadItem";
import { api } from "../api";
import screens from "../screens.json";
import type { Notepad } from "../types";

const initialNotepads: Notepad[] = [];

export function NotepadList({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [notepads, setNotepads] = useState(initialNotepads);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepad[]>("/notepads");
      setNotepads(data);
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/moroccan-flower.png")}
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <FlatList
          data={notepads}
          keyExtractor={({ id }) => id.toLocaleString()}
          renderItem={({ item }) => {
            return (
              <NotepadItem
                notepad={item}
                onPress={() => {
                  navigation.navigate(screens.notepadView, {
                    id: item.id,
                  });
                }}
              />
            );
          }}
        />
      </ImageBackground>
    </View>
  );
}
