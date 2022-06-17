import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import IconButton from "../atoms/IconButton";
import TextField from "../atoms/TextField";

type NavbarButtonProps = {
    onPress: () => void;
    iconName: string;
    color?: string;
    backgroundColor?: string;
    text: string;
}

export default function NavbarButton({onPress, iconName, color = "black", backgroundColor = "white" ,text}: NavbarButtonProps) {

    const stylesSheet = styles({onPress, iconName, color, text, backgroundColor})

    return (
        <TouchableOpacity onPress={onPress} style={[stylesSheet.row]}>
            <IconButton onPress={onPress} icon={{name: iconName, size: "extraLarge", color: color}} backgroundColor={backgroundColor}></IconButton>
            <TextField text={text} fontWeight={"bold"} marginTop={"0%"} color={color}></TextField>
        </TouchableOpacity>
    )
}

const styles = (props: NavbarButtonProps) => StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "column",
        margin: 5
    }
});
