import React from "react";
import TextField from "../atoms/TextField";
import {StyleSheet, View} from "react-native";
import TextInputField from "../atoms/TextInputField";
import IconButton from "../atoms/IconButton";
import {Text, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import * as yup from "yup";
import CustomSnackbar from "../atoms/CustomSnackbar";

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
});


export default function LoginScreen() {
    const [isSnackbarVisible, setIsSnackbarVisible] = React.useState(false);
    const [error, setError] = React.useState(undefined);
    const onToggleSnackBar = () => setIsSnackbarVisible(!isSnackbarVisible);
    const onDismissSnackBar = () => setIsSnackbarVisible(false);

    const [data, setData] = React.useState({
        email: "",
        password: "",
    });

    function login() {
        console.log(data);

        schema.validate(data).then(() => {
            console.log("Input valid");
            navigation.navigate("Exams");

        })
            .catch((error: any) => {
                console.log(error.errors)
                setError(error.errors[0]);
                onToggleSnackBar();
            })
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
                defaultValue={data.username}
                onChangeText={(value: string) =>
                    setData({
                        ...data,
                        username: value,
                    })
                }
                marginTop={20}
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
            ></TextInputField>

            <IconButton
                marginTop={30}
                height={50}
                borderRadius={5}
                onPress={() => {
                    login();
                }}
                text={{text: "Login", weight: "bold"}}
                backgroundColor={theme.colors.accent}
            ></IconButton>

            <TextField
                text={"Or, login with..."}
                textSize={12}
                marginTop={30}
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
                    style={{color: "#6C63FF"}}
                >
                    Register
                </Text>
            </View>
            <CustomSnackbar visible={isSnackbarVisible} message={error} onDismiss={onDismissSnackBar}/>
        </View>
    );
}

const styles = StyleSheet.create({
    space: {
        marginBottom: 10,
    },
});
