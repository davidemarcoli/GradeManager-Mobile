import {StyleSheet, View} from "react-native";
import NavbarButton from "../molecules/NavbarButton";
import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

type NavbarProps = {
    elements: {
        iconName: string;
        text: string;
        route: string;
    }[];
    activeColor: string;
    inactiveColor: string;
    backgroundColor?: string;
};

export default function Navbar({
                                   elements,
                                   activeColor,
                                   inactiveColor,
                                   backgroundColor = "white",
                               }: NavbarProps) {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = React.useState(0);

    useEffect(() => {
        console.log("Route has changed to " + elements[activeTab].route);
        navigation.navigate(elements[activeTab].route);
    }, [activeTab]);

    let updateActiveTab = (index: number) => {
        console.log("NavBar Button " + index + " Clicked");
        setActiveTab(index);
    };

    const stylesSheet = styles({
        elements,
        activeColor,
        inactiveColor,
        backgroundColor,
    });

    let navbarButtons = [];

    for (let i = 0; i < elements.length; i++) {
        navbarButtons.push(
            <NavbarButton
                key={"NavbarButton" + i}
                onPress={() => updateActiveTab(i)}
                iconName={elements[i].iconName}
                text={elements[i].text}
                backgroundColor={backgroundColor}
                color={activeTab == i ? activeColor : inactiveColor}
            ></NavbarButton>
        );
    }

    return (
        <>
            <View style={stylesSheet.row}>{navbarButtons}</View>
        </>
    );
}

const styles = (props: NavbarProps) =>
    StyleSheet.create({
        row: {
            flex: 1,
            flexDirection: "row",
            width: "100%",
            position: "absolute",
            bottom: 0,
            backgroundColor: props.backgroundColor,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
    });
