import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { Paragraph, ParagraphMasters } from "../components/Paragraph";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextField } from "../components/TextField";
import { Btn } from "../components/Button";
import {
  TitleDescriptionBasic,
  TitleDescriptionMasters,
} from "../components/TitleDescription";
import { Ionicons } from "@expo/vector-icons";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";

export function Home({ navigation }: NativeStackScreenProps<ParamListBase>) {
  const [name, setName] = useState("");
  const viewPadding = name.length > 5 ? 20 : 10;

  return (
    <View
      style={{
        paddingTop: 50,
      }}
    >
      <FontAwesome5
        name="cat"
        size={80}
        color="#f1c40f"
        // style={{ position: "absolute", zIndex: 10, top: 160, left: 140 }}
      />
      {/* <Image
        source={{
          uri: "https://animecomics.com.br/animecomics/images/upload/405.jpg",
          width: 620,
          height: 473,
        }}
      />

      <Image source={require("./assets/favicon.png")} /> */}
      <View>
        <TitleDescriptionMasters
          title="Nunca é demais lembrar o peso e o significado"
          description="Ainda assim, existem dúvidas a respeito de como a competitividade nas transações comerciais auxilia a preparação e a composição do sistema de participação geral."
        />
      </View>
      <View
        style={StyleSheet.compose(styles.viewPai, { padding: viewPadding })}
      >
        <Text style={styles.sampleText}>Texto para teste de estilo de cor</Text>
        {/* <TextField
          placeholderText="Digite seu nome:"
          //value={name}
          onChangeText={(text) => setName(text)}
        /> */}

        <Btn
          title="Criar Notepad"
          onPress={() => {
            navigation.navigate(screens.NotepadCreate);
          }}
        />
      </View>
      <View>
        <ParagraphMasters>
          AMIGOS, a consulta aos diversos militantes facilita a criação de todos
          os recursos funcionais envolvidos.Caros amigos, a consulta aos
          diversos militantes facilita a criação de todos os recursos funcionais
          envolvidos.Gostaria de enfatizar que o entendimento das metas
          propostas representa uma abertura para a melhoria do orçamento
          setorial.
        </ParagraphMasters>
        <ParagraphMasters>
          Gostaria de enfatizar que o entendimento das metas propostas
          representa uma abertura para a melhoria do orçamento setorial.A
          certificação de metodologias que nos auxiliam a lidar com o novo
          modelo estrutural aqui preconizado afeta positivamente a correta
          previsão das posturas dos órgãos dirigentes com relação às suas
          atribuições.
        </ParagraphMasters>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPai: {
    padding: 10,
    marginVertical: 16,
    display: "flex",
    flexDirection: "column",
    writingDirection: "auto",
    alignItems: "center",
  },

  sampleText: {
    color: "green",
    paddingBottom: 10,
    fontWeight: "800",
  },
});
