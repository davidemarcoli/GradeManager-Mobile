import React, { useEffect, useState } from "react";
import TextField from "../atoms/TextField";
import { StyleSheet, View } from "react-native";
import TextInputField from "../atoms/TextInputField";
import IconButton from "../atoms/IconButton";

import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../services/UserService";
import { User } from "../../models/User";
import CustomSnackbar from "../atoms/CustomSnackbar";

export default function LoginScreen() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const [isSnackbarVisible, setIsSnackbarVisible] = React.useState(false);
  const [error, setError] = React.useState("");
  const onToggleSnackBar = () => setIsSnackbarVisible(!isSnackbarVisible);
  const onDismissSnackBar = () => setIsSnackbarVisible(false);

  useEffect(() => {
    if (error) {
      onToggleSnackBar();
    }
  }, [error]);

  function requestLogin() {
    console.log(data);
    login(data.email, data.password)
      .then((response) => {
        if (response.ok) {
          navigation.navigate("Exams");
        } else {
          response.text().then((text) => {
            // console.error(text)
            setError(text);
          });
        }

        // console.error(JSON.stringify(response))
      })
      .catch((error) => {
        // console.error(JSON.stringify(error));
        setError(error);
      });
  }

  function loginWithGoogle() {
    console.log(data);
  }

  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40,
      }}
    >
      <TextField
        text={"Login"}
        textSize={30}
        fontWeight={"bold"}
        alignments={"flex-start"}
      ></TextField>

      <TextInputField
        label={"Email"}
        defaultValue={data.email}
        onChangeText={(value: string) =>
          setData({
            ...data,
            email: value,
          })
        }
        marginTop={20}
        mainIcon={{ name: "at", size: "medium", color: theme.colors.text }}
      ></TextInputField>

      <TextInputField
        label={"Password"}
        secureTextEntry={true}
        defaultValue={data.password}
        onChangeText={(value: string) =>
          setData({
            ...data,
            password: value,
          })
        }
        marginTop={20}
        icon={{}}
        mainIcon={{ name: "lock", size: "medium", color: theme.colors.text }}
      ></TextInputField>

      <IconButton
        marginTop={30}
        height={50}
        borderRadius={5}
        onPress={() => {
          requestLogin();
        }}
        text={{ text: "Login", weight: "bold" }}
        backgroundColor={theme.colors.accent}
      ></IconButton>

      <TextField
        text={"Or, login with..."}
        textSize={12}
        marginTop={30}
      ></TextField>

      <IconButton
        border={{ width: 1 }}
        marginTop={30}
        height={50}
        borderRadius={5}
        onPress={() => {
          requestLogin();
        }}
        icon={{ name: "google", size: "extraLarge", color: theme.colors.text }}
        backgroundColor={theme.colors.navbarBackground}
      ></IconButton>

      <View
        style={{
          flexDirection: "row",
          marginTop: 25,
          justifyContent: "center",
        }}
      >
        <TextField text={"Need a new account? "} textSize={12}></TextField>
        <Text
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{ color: "#6C63FF" }}
        >
          Register
        </Text>
      </View>
      <CustomSnackbar
        visible={isSnackbarVisible}
        message={error}
        onDismiss={onDismissSnackBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    marginBottom: 10,
  },
});
