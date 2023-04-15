import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { AppStateContext, initialAppStateContext } from "./src/AppStateContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootSiblingParent } from "react-native-root-siblings";
import { Home } from "./src/screens/Home";
import { NotepadCreate } from "./src/screens/NotepadCreate";
import { NotepadView } from "./src/screens/NotepadView";
import { NotepadList } from "./src/screens/NotepadList";
import { NotepadEdit } from "./src/screens/NotepadEdit";
import screens from "./src/screens.json";
import { Loader } from "./src/components/Loader";
import { api } from "./src/api";
import { Main } from "./src/screens/Main";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  const [appState, setAppState] = useState(initialAppStateContext);

  useEffect(() => {
    const interceptorRequest = api.interceptors.request.use((config) => {
      setAppState({
        loading: true,
      });
      return config;
    });

    const interceptorResponse = api.interceptors.response.use((config) => {
      setAppState({
        loading: false,
      });
      return config;
    });

    return () => {
      api.interceptors.request.eject(interceptorRequest);
      api.interceptors.response.eject(interceptorResponse);
    };
  }, []);

  return (
    <RootSiblingParent>
      <AppStateContext.Provider value={appState}>
        <Loader loading={appState.loading} />
        <NavigationContainer>
          <Drawer.Navigator initialRouteName={screens.main}>
            <Drawer.Screen
              name={screens.main}
              component={Main}
              options={{
                drawerIcon({ color, size }) {
                  return <FontAwesome5 name="fly" size={24} color="green" />;
                },
              }}
            />

            <Drawer.Screen
              name={screens.home}
              component={Home}
              options={{
                drawerIcon({ color, size }) {
                  return <AntDesign name="home" size={24} color="green" />;
                },
              }}
            />

            <Drawer.Screen
              name={screens.notepadView}
              component={NotepadView}
              options={{
                drawerItemStyle: {
                  display: "none",
                },
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
                    <SimpleLineIcons name="note" size={24} color="green" />
                  );
                },
              }}
            />
            <Drawer.Screen
              name={screens.notepadEdit}
              component={NotepadEdit}
              options={{
                drawerItemStyle: {
                  display: "none",
                },
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
                  return (
                    <MaterialCommunityIcons
                      name="note-text-outline"
                      size={24}
                      color="green"
                    />
                  );
                },
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </AppStateContext.Provider>
    </RootSiblingParent>
  );
}
