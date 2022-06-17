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
        {iconName: "calendar-month-outline", text: "Exams"},
        {iconName: "flag-outline", text: "Goals"},
        {iconName: "playlist-plus", text: "Grades"},
        {iconName: "chart-bell-curve-cumulative", text: "Analytics"},
        {iconName: "face-man-outline", text: "Profile"},
    ]

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={{backgroundColor: "#E5E5E5"}}>
                <View style={{width: '100%', height: '80%', alignContent: "center", justifyContent: "center"}}>
                    <View style={{width: '50%', height: '15%', alignSelf: "center"}}>
                        <IconButton onPress={() => console.log("clicked")} backgroundColor={"#6C63FF"}
                                    text={{text: "Login", color: "white", size: 20, weight: "bold"}}
                                    borderRadius={10} border={{color: "grey", width: 1}}
                                    icon={{name: "google", size: "extraLarge", padding: 10, color: "white"}}
                                    sameRow={true}/>
                    </View>

                </View>
                <View style={{width: '100%', height: '20%', alignContent: "center", justifyContent: "center"}}>
                    <Navbar elements={navbarElements} activeColor={"#F46B45"} inactiveColor={"#99A0AC"} backgroundColor={"white"}></Navbar>
                </View>
            </View>
        );
    }
}
