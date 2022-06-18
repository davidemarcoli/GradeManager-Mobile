import React from "react";
import {View} from "react-native";
import TextField from "../atoms/TextField";

export default function GradesScreen() {

    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <TextField text={"Grades"}></TextField>
        </View>
    )

}