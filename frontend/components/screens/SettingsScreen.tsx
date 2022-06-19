import {Switch, Text, TouchableRipple, useTheme} from "react-native-paper";
import {PreferencesContext} from "../../theme/PreferencesContext";
import React, {useState} from "react";
import {View} from "react-native";

export default function SettingsScreen() {

    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <Text>Toogle Dark Mode</Text>
            <Switch onChange={() => toggleTheme()} value={isThemeDark}/>
        </View>
    )
}