import React from "react";
import {ImageComponent, View, Image} from "react-native";
import TextField from "../atoms/TextField";
import CustomCard from "../atoms/CustomCard";
import {Divider, useTheme} from "react-native-paper";
import IconButton from "../atoms/IconButton";
import ProfileCard from "../organisms/ProfileCard";
import {getUser} from "../../services/UserService";

export default function ExamsScreen() {

    const theme = useTheme();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <TextField text={"Exams"}></TextField>
            <View style={{width: "80%", height: "30%", paddingTop: 20}}>
                <ProfileCard />
            </View>
        </View>
    )

}