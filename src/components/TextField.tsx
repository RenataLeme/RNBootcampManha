import React from "react";
import { TextInput, StyleSheet } from "react-native";

type TextInputProps = {
  onChange: () => void;
  value: "string";
  placeholder: "string";
};

export function TextField(props: TextInputProps) {
  return (
    <TextInput
      style={style.textStyles}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}

const style = StyleSheet.create({
  textStyles: {
    fontSize: 16,
    color: "green",
    padding: 8,
  },
});
