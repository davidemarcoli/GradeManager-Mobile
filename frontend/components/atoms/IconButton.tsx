import * as React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {IconSizeProps, MaterialIcon} from "./MaterialIcon";
import TextField from "./TextField";

type IconButtonProps = {
    onPress: () => void;
    icon?: {
        name: string;
        size: IconSizeProps['iconSizes'];
        color?: string;
        padding?: number;
    };
    text?: {
        text: string,
        color?: string;
        size?: number;
        weight?: string;
    };
    backgroundColor?: string;
    borderRadius?: number;
    border?: {
        width: number;
        color: string;
    }
};


export default function IconButton ({onPress, icon, text, backgroundColor="black", borderRadius=0, border}: IconButtonProps) {

    const styleSheet = styles({onPress, icon, text, backgroundColor: backgroundColor, borderRadius, border});

    return (
        <TouchableOpacity style={[styleSheet.container, styleSheet.flex, {backgroundColor: backgroundColor, borderRadius: borderRadius}]} onPress={onPress}>
                {icon && <View style={styleSheet.icon}>
                    <MaterialIcon size={icon.size} name={icon.name} color={icon.color}></MaterialIcon>
                </View>}
                {text && <TextField text={text.text} color={text.color} fontWeight={text.weight} textSize={text.size}></TextField>}
        </TouchableOpacity>
    );
}

const styles = (props: IconButtonProps) => StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        width: '100%',
        height: '100%',
        borderColor: props.border ? props.border.color : 'black',
        borderWidth: props.border ? props.border.width : 0,
    },
    flex: {
        flex: 1,
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: props.text?.color ? props.text.color : "black",
    },
    icon: {
        marginRight: props.text ? 0 : 0,
        paddingRight: props.icon?.padding ? props.icon.padding : 0,
    }
});