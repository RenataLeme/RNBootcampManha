// import React from "react";
// import { TextInput, StyleSheet } from "react-native";
// import styled from "styled-components";

// type TextInputProps = {
//   onChangeText: (text: string) => void;

//   placeholderText: string;
// };

// export function TextField(props: TextInputProps) {
//   return (
//     <STextInput
//       onChangeText={props.onChangeText}
//       placeholder={props.placeholderText}

//     />
//   );
// }

// const STextInput = styled.TextInput`
//   font-size: 16px;
//   color: "green";
//   padding: 8px;
// `;

import styled from "styled-components/native";

export const TextField = styled.TextInput`
  background-color: #e4b4d9;
  border-color: #0b0207;
  border-width: 1px;
  border-radius: 8px;
  padding: 4px;
`;
