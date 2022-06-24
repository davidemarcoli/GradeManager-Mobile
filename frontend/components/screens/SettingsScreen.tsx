import {Switch, Text, useTheme} from "react-native-paper";
import {PreferencesContext} from "../../theme/PreferencesContext";
import React from "react";
import {StyleSheet, View} from "react-native";
import IconButton from "../atoms/IconButton";
import {useNavigation} from "@react-navigation/native";

export default function SettingsScreen() {

    const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);
    const theme = useTheme()
    const navigation = useNavigation()

    return (
        <><View style={styles.backIcon}><IconButton onPress={() => navigation.navigate("Profile")} icon={{
            name: "arrow-back",
            iconType: "MaterialIcons",
            color: theme.colors.text,
            size: "extraLarge"
        }} backgroundColor={theme.colors.background}></IconButton></View><View
            style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <Text>Toogle Dark Mode</Text>
            <Switch onChange={() => toggleTheme()} value={isThemeDark}/>
        </View></>
    )
}

const styles = StyleSheet.create({
    backIcon: {
        position: "absolute",
        top: 40,
        left: 20,
    }
})