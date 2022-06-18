import LoginScreen from "../components/screens/LoginScreen";
import TabOneScreen from "../components/screens/TabOneScreen";
import useCachedResources from "../hooks/useCachedResources";
import {useColorScheme, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navbar from "../components/organisms/Navbar";
import ExamsScreen from "../components/screens/ExamsScreen";
import GoalsScreen from "../components/screens/GoalsScreen";
import GradesScreen from "../components/screens/GradesScreen";

const Stack = createNativeStackNavigator();

export default function CustomNavigation() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const navbarElements: { iconName: string, text: string, route: string }[] = [
        {iconName: "calendar-month-outline", text: "Exams", route: "Exams"},
        {iconName: "flag-outline", text: "Goals", route: "Goals"},
        {iconName: "playlist-plus", text: "Grades", route: "Grades"},
        {iconName: "chart-bell-curve-cumulative", text: "Analytics", route: "Login"},
        {iconName: "face-man-outline", text: "Profile", route: "Test"},
    ]

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NavigationContainer>
                <View style={{backgroundColor: "#E5E5E5"}}>
                    <View style={{width: '100%', height: '100%'}}>
                        <Stack.Navigator initialRouteName={"Login"} screenOptions={{
                            headerShown: false,
                        }}>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Exams" component={ExamsScreen} />
                            <Stack.Screen name="Goals" component={GoalsScreen} />
                            <Stack.Screen name="Grades" component={GradesScreen} />
                            <Stack.Screen name="Test" component={TabOneScreen} />
                        </Stack.Navigator>
                    </View>
                    <Navbar elements={navbarElements} activeColor={"#F46B45"} inactiveColor={"#99A0AC"} backgroundColor={"white"}></Navbar>
                </View>
            </NavigationContainer>
        );
    }
}