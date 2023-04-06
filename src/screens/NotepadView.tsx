import { useEffect, useState, useContext } from "react";
import { View, Text, ImageBackground, Button } from "react-native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";
import { Title } from "../components/Title";
import { api } from "../api";
import type { Notepad } from "../types";
import styled from "styled-components/native";
import Toast from "react-native-root-toast";

const initialNotepad: Notepad = {
  id: 0,
  title: "",
  subtitle: "",
  created_at: "",
  content: "",
  latitude: null,
  longitude: null,
};

const IdText = styled.Text`
  color: #57606f;
  font-size: 14px;
`;

const DateText = styled.Text`
  color: #57606f;
  font-size: 14px;
  margin-top: 8px;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: #2f3542;
  margin-bottom: 8px;
`;

const Content = styled.Text`
  font-size: 16px;
  color: #2f3542;
`;

const Container = styled.View`
  flex: 1;
`;

const Coords = styled.Text`
  color: #57606f;
  font-size: 14px;
  margin-top: 8px;
`;

export function NotepadView({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const [notepad, setNotepad] = useState(initialNotepad);
  const id = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepad>(`/notepads/${id}`);
      setNotepad(data);
    });

    return unsubscribe;
  }, [id]);

  return (
    <Container>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/moroccan-flower.png")}
        style={{
          flex: 1,
          padding: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 8,
          }}
        >
          <Button
            title="Deletar"
            color="#a30b0b"
            onPress={async () => {
              const { data } = await api.delete(`/notepads/${id}`);
              if (data.success) {
                Toast.show("Notepad deletado com sucesso!");
                navigation.navigate(screens.notepadList);
              } else {
                Toast.show("Houve um erro ao deletar o seu notepad!");
              }
            }}
          />
          <Button
            title="Ver no mapa"
            color="#057b3c"
            onPress={async () => {
              navigation.navigate(screens.home, {
                coords: {
                  longitude: notepad.longitude,
                  latitude: notepad.latitude,
                },
              });
            }}
          />
          <Button
            title="Editar"
            color="#057b3c"
            onPress={async () => {
              navigation.navigate(screens.notepadEdit, {
                id,
              });
            }}
          />
        </View>
        <IdText>#{id}</IdText>
        <DateText>{new Date(notepad.created_at).toLocaleDateString()}</DateText>
        <Title>{notepad.title}</Title>
        <Subtitle>{notepad.subtitle}</Subtitle>
        <Content>{notepad.content}</Content>
        <Coords>
          Latitude: {notepad.latitude} Longitude: {notepad.longitude}
        </Coords>
      </ImageBackground>
    </Container>
  );
}

{
  /* </View>
        <IdText>#{id}</IdText>
        <DateText>{new Date(notepad.created_at).toLocaleDateString()}</DateText>
        <Title>{notepad.title}</Title>
        <Subtitle>{notepad.subtitle}</Subtitle>
        <Content style>{notepad.content}</Content>
        <Coords>
          Latitude: {notepad.latitude} Longitude: {notepad.longitude}
        </Coords>
      </ImageBackground>
    </Container>
  );
} */
}
