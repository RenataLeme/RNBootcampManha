import { useState } from "react";
import { Btn } from "./src/components/components/Button";
import { StyleSheet, Text, View, Image, Alert, TextInput } from "react-native";
import React from "react";
import { getParseTreeNode } from "typescript";
import { Paragraph } from "./src/components/Paragraph";

export default function App() {
  const [name, setName] = useState("");
  const viewPadding = name.length > 5 ? 20 : 10;

  return (
    <View>
      <View
        style={StyleSheet.compose(styles.viewPai, { padding: viewPadding })}
      >
        <Text style={styles.sampleText}>Texto para teste de estilo de cor</Text>
        <TextInput
          placeholder="Digite seu nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Btn title="clicar" onPress={() => Alert.alert("Seu nome é", name)} />
      </View>
      <View>
        <Paragraph>
          AMIGOS, a consulta aos diversos militantes facilita a criação de todos
          os recursos funcionais envolvidos.Caros amigos, a consulta aos
          diversos militantes facilita a criação de todos os recursos funcionais
          envolvidos.Gostaria de enfatizar que o entendimento das metas
          propostas representa uma abertura para a melhoria do orçamento
          setorial.
        </Paragraph>
        <Paragraph>
          Gostaria de enfatizar que o entendimento das metas propostas
          representa uma abertura para a melhoria do orçamento setorial.A
          certificação de metodologias que nos auxiliam a lidar com o novo
          modelo estrutural aqui preconizado afeta positivamente a correta
          previsão das posturas dos órgãos dirigentes com relação às suas
          atribuições.
        </Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPai: {
    padding: 68,
    marginVertical: 86,
    marginRight: 60,
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    width: "100",
    height: "100",
  },
  sampleText: {
    color: "green",
    paddingBottom: 140,
    fontWeight: "800",
  },
});
