import React from "react";
import TextField from "../atoms/TextField";
import {View, StyleSheet} from "react-native";
import TextInputField from "../atoms/TextInputField";
import PasswordInputField from "../atoms/PasswordInputField";

export default function LoginScreen() {

    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <TextField text={"Hallo"} textSize={24} fontWeight={"bold"}></TextField>

            <View>
                <PasswordInputField></PasswordInputField>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    space: {
        marginBottom: 10
    }
});