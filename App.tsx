import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { AppStateContext, initialAppStateContext } from "./src/AppStateContext";
import { MaterialIcons } from "@expo/vector-icons";
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
                    <MaterialIcons name="note-add" size={size} color={color} />
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
                    <FontAwesome name="list-alt" size={size} color={color} />
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
