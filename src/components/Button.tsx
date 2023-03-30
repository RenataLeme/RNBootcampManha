import React from "react";
import { StyleSheet, Button } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export function Btn(props: ButtonProps) {
  return <Button onPress={props.onPress} title={props.title} />;
}

// const style = StyleSheet.create({
//   buttonStyle: {
//     color: "#3c6382",
//     whidth: 40,
//     height: 20,
//     padding: 8,
//   },
// });
