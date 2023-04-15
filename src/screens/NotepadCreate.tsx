import { Text, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Toast from "react-native-root-toast";
import { ContainerScreen } from "../components/ContainerScreen";
import { Title } from "../components/Title";
import { TextField } from "../components/TextField";
import { api } from "../api";
import screens from "../screens.json";

const texts = {
  title: "Criar Notepad",
  titlePlaceholder: "Título",
  subtitlePlaceholder: "Subtítulo",
  contentPlaceholder: "Content",
  submitButton: "Enviar",
  latitudePlaceholder: "Digite a latitude",
  longitudePlaceholder: "Digite a longitude",
};
const initialFormState = {
  title: "",
  subtitle: "",
  content: "",
  latitude: 0,
  longitude: 0,
};

const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export function NotepadCreate({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const coords = route.params?.coords;
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (coords !== undefined) {
      setForm({
        ...form,
        ...coords,
      });
    }
  }, [coords]);

  return (
    <ContainerScreen>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/moroccan-flower.png")}
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <Title
          style={{
            textAlign: "center",
          }}
        >
          {texts.title}
        </Title>
        <FormContainer>
          <TextField
            value={form.title}
            onChangeText={(title) => setForm({ ...form, title })}
            placeholder={texts.titlePlaceholder}
          />
          <TextField
            value={form.subtitle}
            onChangeText={(subtitle) => setForm({ ...form, subtitle })}
            placeholder={texts.subtitlePlaceholder}
          />
          <TextField
            value={form.latitude.toString()}
            onChangeText={(latitude) =>
              setForm({ ...form, latitude: Number(latitude) })
            }
            placeholder={texts.latitudePlaceholder}
          />
          <TextField
            value={form.longitude.toString()}
            onChangeText={(longitude) =>
              setForm({ ...form, longitude: Number(longitude) })
            }
            placeholder={texts.longitudePlaceholder}
          />
          <TextField
            value={form.content}
            onChangeText={(content) => setForm({ ...form, content })}
            placeholder={texts.contentPlaceholder}
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity
            onPress={async () => {
              const { data } = await api.post("/notepads", form);
              if (data.success) {
                Toast.show("Notepad criado com sucesso!");
                if (form.latitude && form.longitude) {
                  navigation.navigate(screens.home, {
                    coords: {
                      latitude: form.latitude,
                      longitude: form.longitude,
                    },
                  });
                } else {
                  navigation.navigate(screens.notepadList);
                }
              } else {
                Toast.show(data.errors[0].message);
              }
            }}
            style={{
              backgroundColor: "#197757",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "#93e9d9",
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {texts.submitButton}
            </Text>
          </TouchableOpacity>
        </FormContainer>
      </ImageBackground>
    </ContainerScreen>
  );
}
