import React from "react";
import {View} from "react-native";
import TextField from "../atoms/TextField";

export default function ExamsScreen() {

    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <TextField text={"Exams"}></TextField>
        </View>
    )

}