import React from "react";
import TextField from "../atoms/TextField";
import {StyleSheet, View} from "react-native";
import TextInputField from "../atoms/TextInputField";
import IconButton from "../atoms/IconButton";
import {Text, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

export default function RegisterScreen() {
    const [data, setData] = React.useState({
        username: "",
        password: "",
        fullname: "",
    });

    function login() {
        console.log(data);
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
                text={"Register"}
                textSize={30}
                fontWeight={"bold"}
                alignments={"flex-start"}
            ></TextField>

            <IconButton
                border={{width: 1}}
                marginTop={30}
                height={50}
                borderRadius={5}
                onPress={() => {
                    loginWithGoogle();
                }}
                icon={{name: "google", size: "extraLarge", color: theme.colors.text}}
                backgroundColor={theme.colors.navbarBackground}
            ></IconButton>

            <TextField
                text={"Or, register with email.."}
                textSize={12}
                marginTop={30}
            ></TextField>

      <TextInputField
        label={"Email"}
        defaultValue={data.username}
        onChangeText={(value: string) =>
          setData({
            ...data,
            username: value,
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

      <TextInputField
        label={"Full name"}
        defaultValue={data.fullname}
        onChangeText={(value: string) =>
          setData({
            ...data,
            fullname: value,
          })
        }
        marginTop={20}
        mainIcon={{
          name: "account",
          size: "medium",
          color: theme.colors.text,
        }}
      ></TextInputField>

            <IconButton
                marginTop={30}
                height={50}
                borderRadius={5}
                onPress={() => {
                    login();
                }}
                text={{text: "Register", weight: "bold"}}
                backgroundColor={theme.colors.accent}
            ></IconButton>

            <View
                style={{
                    flexDirection: "row",
                    marginTop: 25,
                    justifyContent: "center",
                }}
            >
                <TextField text={"Already have an account? "} textSize={12}></TextField>
                <Text
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                    style={{color: "#6C63FF"}}
                >
                    Login
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    space: {
        marginBottom: 10,
    },
});
