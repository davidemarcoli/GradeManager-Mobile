import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { StyleSheet, View, TextInput } from "react-native";
import TextField from "./components/atoms/TextField";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={createStyles().container}>
        <TextField text="hoi" />
        <TextInput
          style={createStyles().input}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: "100%",
      height: "10%",
      marginTop: "10%",
      marginBottom: "10%",
      fontSize: 30,
      fontWeight: "bold",
      color: "#2427C8",
      textAlign: "center",
      backgroundColor: "#ECF9FC",
    },
  });
