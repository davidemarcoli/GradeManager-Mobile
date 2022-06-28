import React from "react";
import {View} from "react-native";
import TextField from "../atoms/TextField";
import {useTheme} from "react-native-paper";

export default function ExamsScreen() {
    const theme = useTheme();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <TextField text={"Exams"}></TextField>
        </View>
    );
}
