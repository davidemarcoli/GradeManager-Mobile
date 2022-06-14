import * as React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";

type ButtonProps = {
    onPress: () => void;
    icon?: React.ReactNode;
    text?: string;
    color?: string;
    borderRadius?: number;
};


export default function IconButton ({onPress, icon, text, color="black", borderRadius=0}: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: color}]} onPress={onPress}>
            {icon && <View style={styles.icon}>{icon}</View>}
            {text && <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: 100,
        height: 20,
        borderWidth: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 10,
    }
});