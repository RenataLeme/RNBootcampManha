// import { Home } from "./src/screens/Home";
// import { StatusBar } from "expo-status-bar";
// import { View } from "react-native";
// import { NotepadCreate } from "./src/screens/NotepadCreate";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NotepadEdit } from "./src/screens/NotepadEdit";
// import { NotepadList } from "./src/screens/NotepadList";
// import { NotepadView } from "./src/screens/NotepadView";

// import screens from "./src/screens.json";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={screens.home}>
//         {" "}
//         //drawer
//         <Stack.Screen name={screens.home} component={Home} />
//         <Stack.Screen name={screens.NotepadView} component={NotepadView} />
//         <Stack.Screen name={screens.NotepadCreate} component={NotepadCreate} />
//         <Stack.Screen name={screens.NotepadEdit} component={NotepadEdit} />
//         <Stack.Screen name={screens.NotepadList} component={NotepadList} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./src/screens/Home";
import { NotepadCreate } from "./src/screens/NotepadCreate";
import { NotepadView } from "./src/screens/NotepadView";
import { NotepadList } from "./src/screens/NotepadList";
import { NotepadEdit } from "./src/screens/NotepadEdit";
import screens from "./src/screens.json";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={screens.home}>
        <Drawer.Screen
          name={screens.home}
          component={Home}
          options={{
            drawerIcon({ color, size }) {
              return <FontAwesome name="home" color={color} size={size} />;
            },
          }}
        />
        <Drawer.Screen
          name={screens.notepadView}
          component={NotepadView}
          options={{
            drawerIcon({ size, color }) {
              return (
                <FontAwesome name="sticky-note" size={size} color={color} />
              );
            },
          }}
        />
        <Drawer.Screen
          name={screens.notepadCreate}
          component={NotepadCreate}
          options={{
            drawerIcon({ size, color }) {
              return (
                <MaterialIcons name="note-add" size={size} color={color} />
              );
            },
          }}
        />
        <Drawer.Screen
          name={screens.notepadEdit}
          component={NotepadEdit}
          options={{
            drawerIcon({ size, color }) {
              return (
                <MaterialCommunityIcons
                  name="note-edit"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name={screens.notepadList}
          component={NotepadList}
          options={{
            drawerIcon({ color, size }) {
              return <FontAwesome name="list-alt" size={size} color={color} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
