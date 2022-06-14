import {StyleSheet, View} from "react-native";
import NavbarButton from "../molecules/NavbarButton";
import React from "react";

type NavbarProps = {
    elements: {
        iconName: string,
        text: string,
    }[],
    activeColor: string,
    inactiveColor: string,
    backgroundColor?: string,
}

export default function ({elements, activeColor, inactiveColor, backgroundColor = "white"}: NavbarProps) {

    const [activeTab, setActiveTab] = React.useState(0);

    let updateActiveTab = (index: number) => {
        console.log("NavBar Button " + index + " Clicked")
        setActiveTab(index);
    }

    const stylesSheet = styles({elements, activeColor, inactiveColor, backgroundColor})

    let navbarButtons = []

    for (let i = 0; i < elements.length; i++) {
        navbarButtons.push(<NavbarButton key={"NavbarButton" + i}
                                         onPress={() => updateActiveTab(i)}
                                         iconName={elements[i].iconName} text={elements[i].text}
                                         backgroundColor={backgroundColor}></NavbarButton>)
    }

    return (
        <>
            <View style={stylesSheet.row}>
                {navbarButtons}
            </View>
        </>
    )
}

const styles = (props: NavbarProps) => StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: props.backgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})