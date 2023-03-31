import React from "react";
import { TextInput, StyleSheet } from "react-native";
import styled from "styled-components";
// import { useState } from "react";

//  const [name, setName] = useState ('');

type TextInputProps = {
  onChangeText: (text: string) => void;
  //value: "string"; // sem valor no codigo
  placeholderText: string;
};

export function TextField(props: TextInputProps) {
  return (
    <STextInput
      onChangeText={props.onChangeText}
      placeholder={props.placeholderText}
      //value={props.value}
    />
  );
}

const STextInput = styled.TextInput`
  font-size: 16px;
  color: "green";
  padding: 8px;
`;
