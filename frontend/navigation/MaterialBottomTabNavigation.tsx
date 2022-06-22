import LoginScreen from "../components/screens/LoginScreen";
import TabOneScreen from "../components/screens/TabOneScreen";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {MaterialIcon} from "../components/atoms/MaterialIcon";
import useCachedResources from "../hooks/useCachedResources";
import {useColorScheme, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";

const Stack = createMaterialBottomTabNavigator();

type ThemeProps = {
    theme: any
}

export default function MaterialBottomTabNavigation({theme}: ThemeProps) {

    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const navbarElements: { iconName: string, text: string, route: string }[] = [
        {iconName: "calendar-month-outline", text: "Exams", route: "Login"},
        {iconName: "flag-outline", text: "Goals", route: "Goals"},
        {iconName: "playlist-plus", text: "Grades", route: "Grades"},
        {iconName: "chart-bell-curve-cumulative", text: "Analytics", route: "Analytics"},
        {iconName: "face-man-outline", text: "Profile", route: "Test"},
    ]

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={{width: '100%', height: '100%', backgroundColor: "#E5E5E5"}}>
                <Stack.Navigator initialRouteName={"Login"} activeColor={"#F46B45"} inactiveColor={"#99A0AC"}
                                 barStyle={{
                                     backgroundColor: 'white',
                                     borderTopLeftRadius: 20,
                                     borderTopRightRadius: 20
                                 }}>
                    <Stack.Screen name="Login" component={LoginScreen} options={{
                        tabBarLabel: "Login",
                        tabBarIcon: ({color}) => (
                            <MaterialIcon name={"calendar-month-outline"} color={color}
                                          size={"footer"}></MaterialIcon>
                        )
                    }}/>
                    <Stack.Screen name="Test" component={TabOneScreen} options={{
                        tabBarLabel: "Test",
                        tabBarIcon: ({color}) => (
                            <MaterialIcon name={"face-man-outline"} color={color} size={"footer"}></MaterialIcon>
                        )
                    }}/>
                </Stack.Navigator>
            </View>
        );
    }
}