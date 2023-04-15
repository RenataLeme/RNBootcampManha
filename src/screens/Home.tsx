import styled from "styled-components";
import { StyleSheet, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import screens from "../screens.json";
import Toast from "react-native-root-toast";
import { api } from "../api";
import type { Notepad } from "../types";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

const initialNotepads: Notepad[] = [];

type coords = {
  latitude: number | null;
  longitude: number | null;
};

const initialRegion = {
  loatitude: 0,
  longitude: 0,
  longitudeDelta: 0.05,
  latitudeDelta: 0.05,
};
const notepadIcon = require("../../assets/notepad.png");
console.log(notepadIcon);

function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export function Home({ navigation, route }: NativeStackScreenProps<any>) {
  const coords = route.params?.coords;
  const [notepads, setNotepads] = useState(initialNotepads);
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then(async (response) => {
      if (response.status === "granted") {
        await delay(2);
        const position = await Location.getCurrentPositionAsync();
        setRegion({
          ...region,
          ...position.coords,
        });
      } else {
        Toast.show("Necessário ter acesso a Geolocalização");
      }
    });

    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepad[]>("/notepads");
      setNotepads(data);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (
      coords !== undefined &&
      coords.latitude !== null &&
      coords.longitude !== null
    ) {
      setRegion({
        ...region,
        ...coords,
      });
    }
  }, [coords]);

  return (
    <Container>
      <MapView
        onLongPress={(event) => {
          const coords = event.nativeEvent.coordinate;
          navigation.navigate(screens.notepadCreate, {
            coords,
          });
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        // onRegionChangeComplete={region}
        showsUserLocation
      >
        {notepads
          .filter(
            ({ latitude, longitude }) => latitude !== null && longitude !== null
          )
          .map(({ latitude, longitude, id }) => (
            <MapMarker
              onPress={() => {
                navigation.navigate(screens.notepadView, {
                  id,
                });
              }}
              key={id}
              coordinate={{
                latitude,
                longitude,
              }}
            >
              <Image
                source={notepadIcon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </MapMarker>
          ))}
      </MapView>
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
