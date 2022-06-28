import React from "react";
import {Snackbar} from "react-native-paper";
import {View} from "react-native";

type SnackbarProps = {
    message?: string;
    visible?: boolean;
    duration?: number;
    onDismiss?: () => void;
    onPress?: () => void;
}

export default function CustomSnackbar({
                                           message, visible = true, duration = 5000, onDismiss = (() => {
    }), onPress = () => {
    }
                                       }: SnackbarProps) {

    if (!message) {
        return <View></View>;
    }

    return (
        <Snackbar
            wrapperStyle={{bottom: 50}}
            visible={visible}
            onDismiss={onDismiss}
            action={{
                label: 'Dismiss',
                onPress: onPress,
            }}
            duration={duration} children={
            message
        }/>
    )
}