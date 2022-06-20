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
    fullname: yup.string(),
});

export default function RegisterScreen() {

    const [isSnackbarVisible, setIsSnackbarVisible] = React.useState(false);
    const [error, setError] = React.useState(undefined);
    const onToggleSnackBar = () => setIsSnackbarVisible(!isSnackbarVisible);
    const onDismissSnackBar = () => setIsSnackbarVisible(false);

    const [data, setData] = React.useState({
        email: "",
        password: "",
        fullname: "",
    });

    function register() {
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

    function registerWithGoogle() {
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
                    registerWithGoogle();
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
                defaultValue={data.email}
                onChangeText={(value: string) =>
                    setData({
                        ...data,
                        email: value,
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
            ></TextInputField>

            <IconButton
                marginTop={30}
                height={50}
                borderRadius={5}
                onPress={() => {
                    register();
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
            <CustomSnackbar visible={isSnackbarVisible} message={error} onDismiss={onDismissSnackBar}  />
        </View>
    );
}

const styles = StyleSheet.create({
    space: {
        marginBottom: 10,
    },
});
