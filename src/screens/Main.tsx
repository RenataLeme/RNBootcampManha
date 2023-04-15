import styled from "styled-components/native";
import { Text, ImageBackground, View } from "react-native";

const Container = styled.View`
  flex: 1;
`;

export function Main() {
  return (
    <Container>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/moroccan-flower.png")}
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            color: "#149132",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            paddingTop: 150,
          }}
        >
          "Bem-vindo ao Notepad Travel"
        </Text>
        <Text
          style={{
            color: "#149132",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",

            paddingTop: 50,
          }}
        >
          O maior aplicativo para os apaixonados por memórias de viagens!
        </Text>
        <Text
          style={{
            color: "#084b18",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 70,
            paddingHorizontal: 20,
          }}
        >
          {" "}
          Agora começa a sua história!
        </Text>
      </ImageBackground>
    </Container>
  );
}
