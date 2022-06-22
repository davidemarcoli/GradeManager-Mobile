import React from "react";
import {Card, useTheme} from "react-native-paper";

type CustomCardTypes = {
    children: any,
    backgroundColor?: string,
    borderRadius?: number,
}

export default function CustomCard({children, backgroundColor, borderRadius=0}: CustomCardTypes) {

    const theme = useTheme()

    if (!backgroundColor) {
        backgroundColor = theme.colors.navbarBackground;
    }

    return (
        <Card elevation={5} mode="contained" style={{width: "100%", height: "100%", backgroundColor: backgroundColor, borderRadius: borderRadius}}>
            {children}
        </Card>
    )
}