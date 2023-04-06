// import type { ParamListBase } from "@react-navigation/native";
// import type { NativeStackScreenProps } from "@react-navigation/native-stack";
// import Toast from "react-native-root-toast";
// import { ContainerScreen } from "../components/ContainerScreen";
// import { Title } from "../components/Title";
// import { TextField } from "../components/TextField";
// import { api } from "../api";
// import screens from "../screens.json";
// import { Notepad } from "../types";
// import { useState, useEffect } from "react";
// import {
//   Text,
//   TextInput,
//   TouchableHighlight,
//   TouchableOpacity,
// } from "react-native";
// import styled from "styled-components/native";

// const texts = {
//   title: "Editar notepad",
//   titlePlaceholder: "Digite o título",
//   subtitlePlaceholder: "Digite o subtítulo",
//   contentPlaceholder: "Digite o conteúdo",
//   submitButton: "Enviar",
//   latitudePlaceholder: "Digite a latitude",
//   longitudePlaceholder: "Digite a longitude",
// };

// const initialFormState = {
//   title: "",
//   subtitle: "",
//   content: "",
//   latitude: 0,
//   longitude: 0,
// };

// const FormContainer = styled.View`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   margin-top: 16px;
// `;

// export function NotepadEdit({
//   navigation,
//   route,
// }: NativeStackScreenProps<any>) {
//   const id = route.params.id;
//   const [form, setForm] = useState(initialFormState);

//   useEffect(() => {
//     const unsubscribe = navigation.addListener("focus", async () => {
//       const {
//         data: { title, subtitle, content },
//       } = await api.get<Notepad>(`/notepads/${id}`);
//       setForm({
//         title,
//         subtitle,
//         content,
//         latitude,
//         longitude,
//       });
//     });

//     return unsubscribe;
//   }, [id]);

//   return (
//     <ContainerScreen>
//       <Title
//         style={{
//           textAlign: "center",
//         }}
//       >
//         {texts.title}
//       </Title>
//       <FormContainer>
//         <TextField
//           value={form.title}
//           onChangeText={(title) => setForm({ ...form, title })}
//           placeholder={texts.titlePlaceholder}
//         />
//         <TextField
//           value={form.subtitle}
//           onChangeText={(subtitle) => setForm({ ...form, subtitle })}
//           placeholder={texts.subtitlePlaceholder}
//         />
//         <TextField
//           value={form.latitude.toString()}
//           onChangeText={(latitude) =>
//             setForm({ ...form, latitude: Number(latitude) })
//           }
//           placeholder={texts.latitudePlaceholder}
//         />
//         <TextField
//           value={form.longitude.toString()}
//           onChangeText={(longitude) =>
//             setForm({ ...form, longitude: Number(longitude) })
//           }
//           placeholder={texts.longitudePlaceholder}
//         />
//         <TextField
//           value={form.content}
//           onChangeText={(content) => setForm({ ...form, content })}
//           placeholder={texts.contentPlaceholder}
//           multiline={true}
//           numberOfLines={4}
//         />
//         <TouchableOpacity
//           onPress={async () => {
//             const { data } = await api.put(`/notepads/${id}`, form);
//             if (data.success) {
//               Toast.show("Notepad editado com sucesso!");
//               navigation.navigate(screens.notepadView, {
//                 id,
//               });
//             } else {
//               Toast.show(data.errors[0].message);
//             }
//           }}
//           style={{
//             backgroundColor: "#546de5",
//             paddingVertical: 8,
//             paddingHorizontal: 12,
//             borderRadius: 8,
//           }}
//         >
//           <Text
//             style={{
//               color: "#fff",
//               fontSize: 14,
//               fontWeight: "bold",
//               textAlign: "center",
//               textTransform: "uppercase",
//             }}
//           >
//             {texts.submitButton}
//           </Text>
//         </TouchableOpacity>
//       </FormContainer>
//     </ContainerScreen>
//   );
// }

import { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Toast from "react-native-root-toast";
import { ContainerScreen } from "../components/ContainerScreen";
import { Title } from "../components/Title";
import { TextField } from "../components/TextField";
import { api } from "../api";
import screens from "../screens.json";
import { Notepad } from "../types";

const texts = {
  title: "Editar notepad",
  titlePlaceholder: "Digite o título",
  subtitlePlaceholder: "Digite o subtítulo",
  contentPlaceholder: "Digite o conteúdo",
  latitudePlaceholder: "Digite a latitude",
  longitudePlaceholder: "Digite a longitude",
  submitButton: "Enviar",
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

export function NotepadEdit({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const id = route.params.id;
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const {
        data: { title, subtitle, content, latitude, longitude },
      } = await api.get<Notepad>(`/notepads/${id}`);
      setForm({
        title,
        subtitle,
        content,
        latitude,
        longitude,
      });
    });

    return unsubscribe;
  }, [id]);

  return (
    <ContainerScreen>
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
            const { data } = await api.put(`/notepads/${id}`, form);
            if (data.success) {
              Toast.show("Notepad editado com sucesso!");
              navigation.navigate(screens.notepadView, {
                id,
              });
            } else {
              Toast.show(data.errors[0].message);
            }
          }}
          style={{
            backgroundColor: "#546de5",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#fff",
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
    </ContainerScreen>
  );
}
