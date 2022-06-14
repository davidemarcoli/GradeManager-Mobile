import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import IconButton from "./components/atoms/IconButton";
import {View} from "react-native";
import NavbarButton from "./components/molecules/NavbarButton";
import Navbar from "./components/organisms/Navbar";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const navbarElements: { iconName: string, text: string }[] = [
        {iconName: "home", text: "Home1"},
        {iconName: "home", text: "Home2"},
        {iconName: "home", text: "Home3"},
        {iconName: "home", text: "Home4"},
        {iconName: "home", text: "Home5"},
    ]

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <>
                <View style={{width: '100%', height: '80%', alignContent: "center", justifyContent: "center"}}>
                    <View style={{width: '50%', height: '15%', alignSelf: "center"}}>
                        <IconButton onPress={() => console.log("clicked")} backgroundColor={"#6C63FF"}
                                    text={{text: "Login", color: "white", size: 20, weight: "bold"}}
                                    borderRadius={10} border={{color: "grey", width: 1}}
                                    icon={{name: "google", size: "extraLarge", padding: 10, color: "white"}}
                                    sameRow={true}/>
                    </View>
                    <NavbarButton onPress={() => console.log("NavBar Button Clicked")} iconName={"home"}
                                  text={"Home"}></NavbarButton>

                </View>
                <View style={{width: '100%', height: '20%', alignContent: "center", justifyContent: "center"}}>
                    <Navbar elements={navbarElements} activeColor={"orange"} inactiveColor={"black"} backgroundColor={"#d4d4d4"}></Navbar>
                </View>
            </>
        );
    }
}
